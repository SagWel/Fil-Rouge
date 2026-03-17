<?php

require_once '../models/partitionsModel.php';

$id = $_GET['id'] ?? null;

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
                "linkToSearch" => "/partitions/" . strtolower($instrumentName)
            ];

            if ($instrumentsCurrent[$index] === "1") {
                $currentInstrument = $instrumentData;
            } else {
                $othersInstruments[] = $instrumentData;
            }
        }

        if (!$currentInstrument) {
            http_response_code(404);
            echo json_encode(["erreur" => "Instrument principal non trouvé"]);
            return;
        }

        $artist = [
            "id" => (int)$row['artist_id'],
            "name" => $row['artist_name'],
            "picture" => $row['artist_picture'] ?? "",
        ];

        $album = [
            "id" => (int)$row['album_id'],
            "title" => $row['album_title'],
            "cover" => $row['album_cover'] ?? "",
            "artist" => $artist,
            "deezer_link" => $row['album_deezer_link'] ?? "",
        ];

        $song = [
            "id" => (int)($row['song_id'] ?? 0),
            "title" => $row['title'],
            "deezer_link" => $row['deezer_link'] ?? "",
            "audio_preview" => $row['audio_preview'] ?? "",
            "duration" => (int)($row['duration'] ?? 0),
            "artist" => $artist,
            "album" => $album,
            "genre" => [
                "id" => (int)($row['genre_id'] ?? 0),
                "name" => $row['genre_name'] ?? "",
                "picture" => ""
            ]
        ];

        $partition = [
            "id" => (int)$row['id'],
            "difficulty" => (int)$row['difficulty'],
            "instruments" => [
                "currentInstrument" => $currentInstrument,
                "othersInstruments" => $othersInstruments
            ],
            "song" => $song,
            "bpm" => (int)($row['bpm'] ?? 0),
            "time_signature" => $row['time_signature'] ?? "4/4",
            "clef" => $row['clef'] ?? "G",
            "clef_signature" => $row['clef_signature'] ?? null,
            "measures" => json_decode($row['measures']),
            "partition_preview" => $row['partition_preview'] ?? ""
        ];

        header('Content-Type: application/json');
        echo json_encode($partition);
    } else {
        http_response_code(404);
        echo json_encode(['erreur' => 'Partition introuvable']);
    }
} else {
    http_response_code(400);
    echo json_encode(['erreur' => 'ID non conforme']);
}
