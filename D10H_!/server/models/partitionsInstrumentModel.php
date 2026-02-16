<?php

function getPartitonsByInstrument($instrument)
{
    global $pdo;

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
        -- La partie cruciale est ici :
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

    return $sql->fetchAll(PDO::FETCH_ASSOC);
}
