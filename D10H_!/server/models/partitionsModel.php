<?php

function getPartitionById($pdo, $id)
{
    $sql = $pdo->prepare(
        'SELECT
            p.*,
            s.id AS song_id, s.title, s.deezer_link, s.audio_preview, s.duration,
            a.id AS artist_id, a.name AS artist_name, a.picture AS artist_picture,
            al.id AS album_id, al.title AS album_title, al.cover AS album_cover, al.deezer_link AS album_deezer_link,
            g.id AS genre_id, g.name AS genre_name,
            COUNT(DISTINCT pv.id) AS popularity_count,
            GROUP_CONCAT(i.name) AS all_instruments_names,
            GROUP_CONCAT(i.id) AS all_instruments_ids,
            GROUP_CONCAT(i.imgSrc) AS all_instruments_images,
            GROUP_CONCAT(pi.track_name) As all_instruments_roles,
            GROUP_CONCAT(pi.is_current) AS all_is_current
        FROM partitions p
        JOIN songs s ON p.song_id = s.id
        LEFT JOIN artists a ON s.artist_id = a.id
        LEFT JOIN albums al ON s.album_id = al.id
        LEFT JOIN genres g ON s.genre_id = g.id
        LEFT JOIN partition_instruments pi ON p.id = pi.partition_id
        LEFT JOIN instruments i ON pi.instrument_id = i.id
        LEFT JOIN partition_views pv ON p.id = pv.partition_id
        WHERE p.id = ?
        GROUP BY p.id'
    );

    $sql->execute([$id]);

    return $sql->fetch(PDO::FETCH_ASSOC);
}

function getOtherInstrumentPartitionId($pdo, $songId, $partitionId)
{
    $sql = $pdo->prepare(
        'SELECT
            p.id AS partitionId,
            i.id AS instrument_id,
            i.name AS instrument_name,
            i.imgSrc AS instrument_img,
            i.link_to_search AS instrument_link
        FROM partitions p
        JOIN partition_instruments pi ON p.id = pi.partition_id
        JOIN instruments i ON pi.instrument_id = i.id
        WHERE p.song_id = ?
          AND p.id != ?
          AND pi.is_current = 1'
    );

    $sql->execute([$songId, $partitionId]);

    return $sql->fetchAll(PDO::FETCH_ASSOC);
}

function getNewsPartitions($pdo)
{
    $sql = $pdo->prepare(
        'SELECT
            p.*,
            s.id AS song_id, s.title, s.deezer_link, s.audio_preview, s.duration,
            a.id AS artist_id, a.name AS artist_name, a.picture AS artist_picture,
            al.id AS album_id, al.title AS album_title, al.cover AS album_cover, al.deezer_link AS album_deezer_link,
            g.id AS genre_id, g.name AS genre_name,
            COUNT(DISTINCT pv.id) AS popularity_count,
            GROUP_CONCAT(i.name) AS all_instruments_names,
            GROUP_CONCAT(i.id) AS all_instruments_ids,
            GROUP_CONCAT(i.imgSrc) AS all_instruments_images,
            GROUP_CONCAT(pi.track_name) As all_instruments_roles,
            GROUP_CONCAT(pi.is_current) AS all_is_current
        FROM partitions p
        JOIN songs s ON p.song_id = s.id
        LEFT JOIN artists a ON s.artist_id = a.id
        LEFT JOIN albums al ON s.album_id = al.id
        LEFT JOIN genres g ON s.genre_id = g.id
        LEFT JOIN partition_instruments pi ON p.id = pi.partition_id
        LEFT JOIN instruments i ON pi.instrument_id = i.id
        LEFT JOIN partition_views pv ON p.id = pv.partition_id
        GROUP BY p.id
        ORDER BY p.created_at DESC
        LIMIT 12;'
    );

    $sql->execute();

    return $sql->fetchAll(PDO::FETCH_ASSOC);
}

function getPopularPartitions($pdo)
{
    $sql = $pdo->prepare(
        'SELECT
            p.*,
            s.id AS song_id, s.title, s.deezer_link, s.audio_preview, s.duration,
            a.id AS artist_id, a.name AS artist_name, a.picture AS artist_picture,
            al.id AS album_id, al.title AS album_title, al.cover AS album_cover, al.deezer_link AS album_deezer_link,
            g.id AS genre_id, g.name AS genre_name,
            COUNT(DISTINCT pv.id) AS popularity_count,
            GROUP_CONCAT(i.name) AS all_instruments_names,
            GROUP_CONCAT(i.id) AS all_instruments_ids,
            GROUP_CONCAT(i.imgSrc) AS all_instruments_images,
            GROUP_CONCAT(pi.track_name) As all_instruments_roles,
            GROUP_CONCAT(pi.is_current) AS all_is_current
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
        ORDER BY popularity_count DESC
        LIMIT 12;'
    );

    $sql->execute();

    return $sql->fetchAll(PDO::FETCH_ASSOC);
}

function getSuggestionsPartitions($pdo)
{
    $sql = $pdo->prepare(
        'SELECT
            p.*,
            s.id AS song_id, s.title, s.deezer_link, s.audio_preview, s.duration,
            a.id AS artist_id, a.name AS artist_name, a.picture AS artist_picture,
            al.id AS album_id, al.title AS album_title, al.cover AS album_cover, al.deezer_link AS album_deezer_link,
            g.id AS genre_id, g.name AS genre_name,
            COUNT(DISTINCT pv.id) AS popularity_count,
            GROUP_CONCAT(i.name) AS all_instruments_names,
            GROUP_CONCAT(i.id) AS all_instruments_ids,
            GROUP_CONCAT(i.imgSrc) AS all_instruments_images,
            GROUP_CONCAT(pi.track_name) As all_instruments_roles,
            GROUP_CONCAT(pi.is_current) AS all_is_current
        FROM partitions p
        JOIN songs s ON p.song_id = s.id
        LEFT JOIN artists a ON s.artist_id = a.id
        LEFT JOIN albums al ON s.album_id = al.id
        LEFT JOIN genres g ON s.genre_id = g.id
        LEFT JOIN partition_instruments pi ON p.id = pi.partition_id
        LEFT JOIN instruments i ON pi.instrument_id = i.id
        LEFT JOIN partition_views pv ON p.id = pv.partition_id
        GROUP BY p.id
        ORDER BY RAND()
        LIMIT 12;'
    );

    $sql->execute();

    return $sql->fetchAll(PDO::FETCH_ASSOC);
}


function getPartitonsByInstrument($pdo, $instrumentId)
{
    $sql = $pdo->prepare(
        'SELECT
            p.*,
            s.id AS song_id, s.title, s.deezer_link, s.audio_preview, s.duration,
            a.id AS artist_id, a.name AS artist_name, a.picture AS artist_picture,
            al.id AS album_id, al.title AS album_title, al.cover AS album_cover, al.deezer_link AS album_deezer_link,
            g.id AS genre_id, g.name AS genre_name,
            COUNT(DISTINCT pv.id) AS popularity_count,
            GROUP_CONCAT(i.name) AS all_instruments_names,
            GROUP_CONCAT(i.id) AS all_instruments_ids,
            GROUP_CONCAT(i.imgSrc) AS all_instruments_images,
            GROUP_CONCAT(pi.track_name) As all_instruments_roles,
            GROUP_CONCAT(pi.is_current) AS all_is_current
        FROM partitions p
        JOIN songs s ON p.song_id = s.id
        LEFT JOIN artists a ON s.artist_id = a.id
        LEFT JOIN albums al ON s.album_id = al.id
        LEFT JOIN genres g ON s.genre_id = g.id
        LEFT JOIN partition_instruments pi ON p.id = pi.partition_id
        LEFT JOIN instruments i ON pi.instrument_id = i.id
        LEFT JOIN partition_views pv ON p.id = pv.partition_id
        WHERE p.id IN (
            SELECT pi2.partition_id
            FROM partition_instruments pi2
            WHERE pi2.instrument_id = ?
            AND pi2.is_current = 1
        )
        GROUP BY p.id'
    );

    $sql->execute([$instrumentId]);

    return $sql->fetchAll(PDO::FETCH_ASSOC);
}
