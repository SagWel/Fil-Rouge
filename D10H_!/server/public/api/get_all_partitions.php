<?php

require_once '../../config/db.php';

$instrument = $_GET['instrumentName'];

$sql = $pdo->prepare(
    'SELECT
        p.*,
        a.name AS artist_name,
        al.title AS album_title,
        g.name AS genre_name,
        GROUP_CONCAT(i.name) AS all_instruments_names,
        GROUP_CONCAT(i.id) AS all_instruments_ids,
        GROUP_CONCAT(pi.is_current) AS all_is_current
    FROM partitions p
    LEFT JOIN artists a ON p.artist_id = a.id
    LEFT JOIN albums al ON p.album_id = al.id
    LEFT JOIN genres g ON p.genre_id = g.id
    LEFT JOIN partition_instruments pi ON p.id = pi.partition_id
    LEFT JOIN instruments i ON pi.instrument_id = i.id
    WHERE p.id IN (
        SELECT pi2.partition_id
        FROM partition_instruments pi2
        JOIN instruments i2 ON pi2.instrument_id = i2.id
        WHERE i2.name = :instrumentName
        AND pi2.is_current = 1
    )
    GROUP BY p.id'
);
$sql->execute([
    'instrumentName' => $instrument
]);

$rows = $sql->fetchAll(PDO::FETCH_ASSOC);
$partitions = [];

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

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
