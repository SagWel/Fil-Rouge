<?php

function mapperPartition(array $rows, ?string $searchedInstrument = null)
{
    $partitions = [];

    foreach ($rows as $row) {
        $instrumentsNames = explode(',', $row['all_instruments_names']);
        $instrumentsIds = explode(',', $row['all_instruments_ids']);
        $instrumentsImages = isset($row['all_instruments_images']) ? explode(',', $row['all_instruments_images']) : [];
        $instrumentsCurrent = explode(',', $row['all_is_current']);

        $currentInstrument = null;
        $othersInstruments = [];

        foreach ($instrumentsNames as $index => $instrumentName) {
            $instrumentData = [
                "id" => (int)$instrumentsIds[$index],
                "name" => $instrumentName,
                "imgSrc" => $instrumentsImages[$index],
                "linkToSearch" => "/partitions/" . strtolower($instrumentName)
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

        $artist = [
            "id" => (int)$row['artist_id'],
            "name" => $row['artist_name'],
            "picture" => $row['artist_picture'],
        ];

        $album = [
            "id" => (int)$row['album_id'],
            "title" => $row['album_title'],
            "cover" => $row['album_cover'],
            "artist" => $artist,
            "deezer_link" => $row['album_deezer_link'],
        ];

        $song = [
            "id" => (int)($row['song_id'] ?? 0),
            "title" => $row['title'],
            "deezer_link" => $row['deezer_link'],
            "audio_preview" => $row['audio_preview'],
            "duration" => (int)$row['duration'],
            "artist" => $artist,
            "album" => $album,
            "genre" => [
                "id" => (int)($row['genre_id'] ?? 0),
                "name" => $row['genre_name'] ?? "",
                "picture" => ""
            ]
        ];

        $partitions[] = [
            "id" => (int)$row['id'],
            "difficulty" => (int)$row['difficulty'],
            "instruments" => [
                "currentInstrument" => $currentInstrument,
                "othersInstruments" => $othersInstruments
            ],
            "song" => $song,
            "bpm" => (int)$row['bpm'],
            "time_signature" => $row['time_signature'],
            "clef" => $row['clef'],
            "clef_signature" => $row['clef_signature'] ? $row['clef_signature'] : null,
            "measures" => json_decode($row['measures']),
            "partition_preview" => $row['partition_preview']
        ];
    }
    return $partitions;
}
