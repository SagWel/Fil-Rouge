<?php

require_once '../models/userModel.php';
require_once '../models/instrumentsModel.php';

$email = $_GET['email'];
$password = $_GET['password'];
$username = $_GET['username'] ?? null;
$age = $_GET['age'] ?? null;
$gender = $_GET['gender'] ?? null;

$passwordHash = password_hash($password, PASSWORD_DEFAULT);

creatUser($pdo, $email, $passwordHash, $username, $age, $gender);
$user = getUserByEmail($pdo, $email);
$profilUser = getUserProfil($pdo, $user['id']);
$userInstruments = getUserInstruments($pdo, $user['id']);
$userInstrumentLvl = [];

foreach ($userInstruments as $userInstrument) {

    $userInstrumentLvl[] = [
        "instrument" => [
            "id" => $userInstrument['id'],
            "name" => $userInstrument['name'],
            'img_src' => $userInstrument['img_src'],
            'lint_to_search' => $userInstrument['link_to_search']
        ],
        "lvl" => $userInstrument['lvl']
    ];
}

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
        "id" => (int)$user['id'],
        "email" => $user['email'],
        "username" => $user['username'],
        "avatarUrl" => $profilUser['avatar_url'],
        "age" => (int)$profilUser['age'],
        "birthday" => $profilUser['birthday'],
        "gender" => $profilUser['gender'],
        "userInstruments" => $userInstrumentLvl
    ],
    "isFirstLogin" => $firstLogin
]);
