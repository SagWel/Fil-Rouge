<?php

require_once '../models/popularModel.php';
require_once '../utils/mapperPartitions.php';

$rows = getPopularPartitions($pdo);
$partitions = mapperPartition($rows);

echo json_encode($partitions);
