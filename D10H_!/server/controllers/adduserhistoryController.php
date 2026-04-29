<?php

require_once '../models/scoresModel.php';

$userId = $_POST['userId'] ?? null;
$scoreId = $_POST['scoreId'] ?? null;

if ($userId && $scoreId) {
    addToUserHistory($pdo, $userId, $scoreId);
    echo json_encode(["status" => "success"]);
} else {
    http_response_code(400);
    echo json_encode(["status" => "error"]);
}
