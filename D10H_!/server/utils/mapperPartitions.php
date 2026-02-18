<?php

function mapperPartition(array $rows, ?string $searchedInstrument = null)
{
    $partitions = [];

    foreach ($rows as $row) {
        $instrumentsNames = explode(',', $row['all_instruments_names']);
        $instrumentsIds = explode(',', $row['all_instruments_ids']);
        $instrumentsCurrent = explode(',', $row['all_is_current']);

        $currentInstrument = null;
        $othersInstruments = [];

        foreach ($instrumentsNames as $index => $instrumentName) {
            $instrumentData = [
                "id" => (int)$instrumentsIds[$index],
                "name" => $instrumentName
            ];

            if ($searchedInstrument && $instrumentName === $searchedInstrument) {
                $currentInstrument = $instrumentData;
            } elseif (!$searchedInstrument && $instrumentsCurrent[$index] === "1") {
                $currentInstrument = $instrumentData;
            } else {
                $othersInstruments[] = $instrumentData;
            }
        }

        if (!$currentInstrument) {
            http_response_code(404);
            echo json_encode([
                "erreur" => "Pas de current Instrument",
                "debug_infos" => [
                    "Liste instruments" => $instrumentName,
                    "Ids instruents" => $instrumentsIds,
                    "instruments Is_current" => $instrumentsCurrent,
                    "current instrument" => $currentInstrument,
                    "autres instruments" => $othersInstruments
                ]
            ]);
            return;
        }

        $partitions[] = [
            "id" => (int)$row['id'],
            "title" => $row['title'],
            "artist" => [
                "id" => $row['artist_id'],
                "name" => $row['artist_name']
            ],
            "album" => $row['album_id'] ? [
                "id" => $row['album_id'],
                "title" => $row['album_title']
            ] : null,
            "genre" => $row['genre_name'],
            "difficulty" => (int)$row['difficulty'],
            "instruments" => [
                "currentInstrument" => $currentInstrument,
                "othersInstruments" => $othersInstruments
            ],
            "bpm" => (int)$row['bpm'],
            "time_signature" => $row['time_signature'],
            "clef" => $row['clef'],
            "clef_signature" => $row['clef_signature'] ? $row['clef_signature'] : null,
            "measures" => [],
            "duration" => (int)$row['duration'],
            "deezer_link" => $row['deezer_link'],
            "audio_preview" => $row['audio_preview'],
            "partition_preview" => $row['partition_preview']
        ];
    }
    return $partitions;
}
