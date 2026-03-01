<?php

$data = json_decode(file_get_contents('php://input'), true);

$email = $_GET['id'];
$username = $data['username'] ?? null;
$avatar = $data['avatar'] ?? null;
$bio = $data['bio'] ?? null;
$birthday = $data['birthday'] ?? null;
$gender = $data['gender'] ?? null;
$visibility = $data['visibility'] ?? null;

if ($email) {
}
