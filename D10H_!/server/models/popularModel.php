<?php

function getPopularPartitions($pdo)
{
    $sql = $pdo->prepare(
        'SELECT
            p.*,
            s.title,
            s.deezer_link,
            s.audio_preview,
            s.duration,
            a.name AS artist_name,
            a.id AS artist_id,
            al.title AS album_title,
            al.id AS album_id,
            g.name AS genre_name,
            GROUP_CONCAT(i.name) AS all_instruments_names,
            GROUP_CONCAT(i.id) AS all_instruments_ids,
            GROUP_CONCAT(pi.is_current) AS all_is_current,
            COUNT(pv.id) AS recent_views
        FROM partitions p
        JOIN songs s ON p.song_id = s.id
        LEFT JOIN artists a ON s.artist_id = a.id
        LEFT JOIN albums al ON s.album_id = al.id
        LEFT JOIN genres g ON s.genre_id = g.id
        LEFT JOIN partition_instruments pi ON p.id = pi.partition_id
        LEFT JOIN instruments i ON pi.instrument_id = i.id
        LEFT JOIN partition_views pv ON p.id = pv.partition_id
            AND pv.viewed_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
        GROUP BY p.id
        ORDER BY recent_views DESC
        LIMIT 12;'
    );

    $sql->execute();

    return $sql->fetchAll(PDO::FETCH_ASSOC);
}
