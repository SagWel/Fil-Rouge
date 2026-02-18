<?php

require_once '../models/newsModel.php';
require_once '../utils/mapperPartitions.php';

$rows = getNewsPartitions($pdo);
$partitions = mapperPartition($rows);

echo json_encode($partitions);
