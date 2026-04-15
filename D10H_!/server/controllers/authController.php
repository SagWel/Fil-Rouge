<?php

require_once '../models/userModel.php';
require_once '../models/instrumentsModel.php';

$email = $_GET['email'];
$password = $_GET['password'];

$user = getUserByEmail($pdo, $email);

if (!$user) {
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);
    creatUser($pdo, $email, $passwordHash);
    $user = getUserByEmail($pdo, $email);
}

if (!password_verify($password, $user['password'])) {
    http_response_code(401);
    echo json_encode([
        'erreur' => 'Identifiants incorrect ...'
    ]);
    exit;
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

// Si utilisation d'une bibliothèque
// $jwt = JWT::encode($payload, $secret, 'HS256');

setcookie(
    "auth_token",
    $jwt,
    [
        'expires' => time() + 86400,
        'path' => '/',
        'secure' => false,
        'httponly' => true,
        'samesite' => 'true'
    ]
);

$firstLogin = isFirstLogin($pdo, $email);
$profiUser = getUserProfil($pdo, $user['id']);
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

http_response_code(200);
echo json_encode([
    "isAuthenticated" => true,
    "user" => [
        "id" => (int)$user['id'],
        "email" => $user['email'],
        "username" => $user['username'],
        "avatarUrl" => $profiUser['avatar_url'],
        "age" => (int)$profiUser['age'],
        "birthday" => $profiUser['birthday'],
        "gender" => $profiUser['gender'],
        "language" => $profiUser['language'],
        "visibility" => $profiUser['visibility'],
        "userInstruments" => $userInstrumentLvl
    ],
    "isFirstLogin" => $firstLogin
]);
