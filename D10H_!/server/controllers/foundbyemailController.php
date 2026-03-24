<?php

require_once '../models/userModel.php';

$email = $_GET['email'];

$user = getUserByEmail($pdo, $email);

if ($user) {
    $profiUser = getUserProfil($pdo, $user['id']);

    http_response_code(409);
    echo json_encode([
        "message" => "utilisateur déjà existant",
        "isFounded" => true,
        "user" => [
            "id" => $user['id'],
            "email" => $user['email'],
            "username" => $user['username'],
            "avatarUrl" => $profiUser['avatar_url'],
            "age" => $profiUser['age'],
            "birthday" => $profiUser['birthday'],
            "gender" => $profiUser['gender'],
            "visibility" => $profiUser['visibility']
        ]
    ]);
    exit;
}

http_response_code(200);
echo json_encode(["message" => "utilisateur non trouvé. Création autorisée", "isFounded" => false]);
