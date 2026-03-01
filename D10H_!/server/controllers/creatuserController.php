<?php

require_once '../models/userModel.php';

$email = $_GET['email'];
$password = $_GET['password'];
$username = $_GET['username'];
$age = $_GET['age'];
$gender = $_GET['gender'];

$passwordHash = password_hash($password, PASSWORD_DEFAULT);

creatUser($pdo, $email, $passwordHash);
$user = getUserByEmail($pdo, $email);

$header = json_encode(['alg' => 'HS256', 'typ' => 'JWT']);

$payload = json_encode([
    'user_id' => $user['id'],
    'email' => $user['email'],
    'iat' => time(),
    'exp' => time() + 86400
]);

$base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
$base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));

$signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $secretKey, true);
$base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));

$jwt = $base64UrlHeader . '.' . $base64UrlPayload . "." . $base64UrlSignature;

setcookie(
    "auth_token",
    $jwt,
    [
        'expires' => time() + 86400,
        'path' => '/',
        'secure' => false,
        'httponly' => true,
        'samesite' => 'Lax'
    ]
);

$firstLogin = isFirstLogin($pdo, $email);
http_response_code(200);
echo json_encode([
    "isAuthenticated" => true,
    "user" => [
        "id" => $user['id'],
        "username" => $user['username'],
        "email" => $user['email']
    ],
    "isFirstLogin" => $firstLogin
]);
