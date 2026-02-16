<?php

require_once '../models/partitionsInstrumentModel.php';

$instrument = $_GET['id'];

if ($id) {
    $rows = getPartitonsByInstrument($instrument);
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

            if ($instrumentName === $instrument) {
                $currentInstrument = $instrumentData;
            } else {
                $othersInstruments[] = $instrumentData;
            }
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

    echo json_encode($partitions);
} else {
    http_response_code(400);
    echo json_encode(['erreur' => 'Instrument non repertorié']);
}
