<?php

require_once '../models/partitionsModel.php';
require_once '../utils/mapperPartitions.php';

$rows = getSuggestionsPartitions($pdo);

$partitions = [];

foreach ($rows as $row) {
    $rowsOtherInstruments = getOtherInstrumentPartitionId($pdo, $row['song_id'], $row['id']);

    $partitions[] = mapperPartition($row, $rowsOtherInstruments);
}

echo json_encode($partitions);
