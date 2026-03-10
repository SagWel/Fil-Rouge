<?php

function getAllInstruments($pdo)
{
    $sql = $pdo->prepare(
        'SELECT * FROM instruments'
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
