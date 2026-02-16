<?php

function getPartitionById($id)
{
    global $pdo;

    $sql = $pdo->prepare(
        'SELECT
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
        GROUP BY p.id'
    );

    $sql->execute([
        'id' => $id
    ]);

    return $sql->fetch(PDO::FETCH_ASSOC);
}
