<?php

function getAllInstruments($pdo)
{
    $sql = $pdo->prepare(
        'SELECT i.id, i.name, i.img_src, i.link_to_search FROM instruments i'
    );

    $sql->execute();

    return $sql->fetchAll(PDO::FETCH_ASSOC);
}

function creatUserInstruments($pdo, $userId, $instrument, $level)
{
    $sql = $pdo->prepare(
        'INSERT INTO user_instruments (user_id, instrument_id, level) VALUES (?, ?, ?)'
    );

    return $sql->execute([$userId, $instrument['id'], $level]);
}

function getUserInstruments($pdo, $userId)
{
    $sql = $pdo->prepare(
        'SELECT i.id, i.name, i.img_src, i.link_to_search, ui.level AS lvl
         FROM instruments i
         JOIN user_instruments ui ON i.id = ui.instrument_id
         WHERE ui.user_id = ?'
    );

    $sql->execute([$userId]);

    return $sql->fetchAll(PDO::FETCH_ASSOC);
}
