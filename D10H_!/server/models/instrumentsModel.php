<?php

function getAllInstruments($pdo)
{
    $sql = $pdo->prepare(
        'SELECT * FROM instruments'
    );

    $sql->execute();

    return $sql->fetchAll(PDO::FETCH_ASSOC);
}
