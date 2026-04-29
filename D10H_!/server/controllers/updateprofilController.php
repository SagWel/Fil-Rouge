<?php

require_once '../models/userModel.php';

$userId = $_POST['id'];
$username = $_POST['username'] ?? null;
$gender = $_POST['gender'] ?? null;
$avatar = $_POST['avatar'] ?? null;
$birthday = $_POST['birthday'] ?? null;
$userInstruments = $_POST['userInstruments'] ?? null;

try {
    if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = "../public/uploads/avatars/";

        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $destination = $uploadDir . $newAvatarName;

        if (!move_uploaded_file($_FILES['avatar']['tmp_name'], $destination)) {
            throw new Exception("Impossible de sauvegarder l'image sur le serveur.");
        }
    }

    $succes = updateProfil($pdo, $userId, $username, $gender, $avatar, $birthday, $userInstruments);

    http_response_code(200);
    echo json_encode([
        "message" => "Profil mis à jour avec succès",
        "avatarUrl" => $newAvatarName
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["erreur" => "Erreur serveur : " . $e->getMessage()]);
}
