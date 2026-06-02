<?php

require_once '../models/userModel.php';
require_once '../models/instrumentsModel.php';

$email = $_POST['email'];
$password = $_POST['password'];

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

$secretKey = $_ENV['MA_SUPER_CLEF_SECRETE'];

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
$profilUser = getUserProfil($pdo, $user['id']);
$userInstruments = getUserInstruments($pdo, $user['id']);
$userInstrumentLvl = [];

foreach ($userInstruments as $userInstrument) {

    $userInstrumentLvl[] = [
        "instrument" => [
            "id" => $userInstrument['id'],
            "name" => $userInstrument['name']
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
        "avatarUrl" => $profilUser['avatar_url'],
        "age" => (int)$profilUser['age'],
        "birthday" => $profilUser['birthday'],
        "gender" => $profilUser['gender'],
        "language" => $profilUser['language'],
        "filterExplicit" => $profilUser['filter_explicit'],
        "isChildAccount" => (int)$profilUser['is_child_account'] === 1 ? true : false,
        "userInstruments" => $userInstrumentLvl
    ],
    "isFirstLogin" => $firstLogin
]);
