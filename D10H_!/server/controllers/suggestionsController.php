<?php

require_once '../models/partitionsModel.php';
require_once '../utils/mapperPartitions.php';

$rows = getSuggestionsPartitions($pdo);
$partitions = mapperPartition($rows);

echo json_encode($partitions);
