<?php

require_once '../models/partitionsModel.php';
require_once '../utils/mapperPartitions.php';

$id = $_GET['id'] ?? null;

if ($id && ctype_digit($id)) {
    $id = (int)$id;
    $row = getPartitionById($pdo, $id);

    if ($row) {
        $rowsOtherInstruments = getOtherInstrumentPartitionId($pdo, $row['song_id'], $id);

        $partition = mapperPartition($row, $rowsOtherInstruments);

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
