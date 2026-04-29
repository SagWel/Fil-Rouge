<?php

require_once '../models/userModel.php';
require_once '../models/instrumentsModel.php';

$token = $_COOKIE['auth_token'] ?? null;

if (!$token) {
    http_response_code(401);
    echo json_encode(["isAuthenticate" => false, "message" => "Aucun token trouvé"]);
    exit;
}

$parts = explode('.', $token);

$jsonPayload = base64_decode(str_replace(['-', '_', ''], ['+', '/', '='], $parts[1]));

$payload = json_decode($jsonPayload, true);

$signatureTest = hash_hmac('sha256', $parts[0] . "." . $parts[1], $secretKey, true);
$base64UrlSignatureTest = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signatureTest));

if ($base64UrlSignatureTest !== $parts[2]) {
    http_response_code(401);
    echo json_encode(["isAuthenticate" => false, "message" => "Token non conforme"]);
    exit;
}

if (time() > $payload['exp']) {
    http_response_code(401);
    echo json_encode(["isAuthenticate" => false, "message" => "Token exipré"]);
    exit;
}

$email = $payload['email'];

$user = getUserByEmail($pdo, $email);
$profiUser = getUserProfil($pdo, $user['id']);
$firstLogin = isFirstLogin($pdo, $email);
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
        "userInstruments" => $userInstrumentLvl
    ],
    "isFirstLogin" => $firstLogin
]);
