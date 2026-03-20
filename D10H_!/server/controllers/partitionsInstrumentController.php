<?php

require_once '../models/partitionsModel.php';
require_once '../utils/mapperPartitions.php';

$instrumentId = $_GET['instrument_id'] ?? null;
$instrument = $_GET['id'];

if ($instrumentId) {
    $rows = getPartitonsByInstrument($pdo, $instrumentId);

    $partitions = [];

    foreach ($rows as $row) {
        $rowsOtherInstruments = getOtherInstrumentPartitionId($pdo, $row['song_id'], $row['id']);

        $partitions[] = mapperPartition($row, $rowsOtherInstruments, $instrument);
    }

    echo json_encode($partitions);
} else {
    http_response_code(400);
    echo json_encode(['erreur' => 'Instrument non repertorié']);
}
