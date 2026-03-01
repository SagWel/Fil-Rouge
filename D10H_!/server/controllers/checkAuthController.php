<?php

require_once '../models/userModel.php';

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
