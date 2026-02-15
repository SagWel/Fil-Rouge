<?php

require_once '../../config/db.php';

$id = $_GET['id'];

$sql = $pdo->prepare('SELECT
    p.*, a.name AS artist_name,
    al.title AS album_title,
    g.name AS genre_name,
    GROUP_CONCAT(i.name) AS all_instruments_names,
    GROUP_CONCAT(i.id) AS all_instruments_ids,
    GROUP_CONCAT(i.imgSrc) AS all_instruments_images,
    GROUP_CONCAT(pi.is_current) AS all_is_current
    FROM partitions p
    LEFT JOIN artists a ON p.artist_id = a.id
    LEFT JOIN albums al ON p.album_id = al.id
    LEFT JOIN genres g ON p.genre_id = g.id
    LEFT JOIN partition_instruments pi ON p.id = pi.partition_id
    LEFT JOIN instruments i ON pi.instrument_id = i.id
    WHERE p.id = :id
    GROUP BY p.id');
$sql->execute([
    'id' => $id
]);

$row = $sql->fetch(PDO::FETCH_ASSOC);

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

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
