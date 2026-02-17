<?php

require_once '../models/partitionModel.php';

$id = $_GET['id'];

if ($id && ctype_digit($id)) {
    $id = (int)$id;

    $row = getPartitionById($pdo, $id);

    if ($row) {

        $instrumentsNames = explode(',', $row['all_instruments_names']);
        $instrumentsIds = explode(',', $row['all_instruments_ids']);
        $instrumentsImgs = explode(',', $row['all_instruments_images']);
        $instrumentsCurrent = explode(',', $row['all_is_current']);

        $currentInstrument = null;
        $othersInstruments = [];

        foreach ($instrumentsNames as $index => $instrumentName) {
            $instrumentData = [
                "id" => (int)$instrumentsIds[$index],
                "name" => $instrumentName,
                "imgSrc" => $instrumentsImgs[$index],
            ];

            if ((int)$instrumentsCurrent[$index] === 1) {
                $currentInstrument = $instrumentData;
            } else {
                $othersInstruments[] = $instrumentData;
            }
        }

        $partition = [
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
            "measures" => json_decode($row['measures']),
            "duration" => (int)$row['duration'],
            "deezer_link" => $row['deezer_link'],
            "audio_preview" => $row['audio_preview'],
            "partition_preview" => $row['partition_preview']
        ];
        echo json_encode($partition);
    } else {
        http_response_code(404);
        echo json_encode(['erreur' => 'Partition introuvable ...']);
    }
} else {
    http_response_code(400);
    echo json_encode(['erreur' => 'ID non conforme ou non existant']);
}
