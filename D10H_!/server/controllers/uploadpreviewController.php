<?php

// 1. Récupération des données envoyées par le Front-end
$data = json_decode(file_get_contents('php://input'), true);

$partitionId = $data['partition_id'] ?? null;
$base64Image = $data['image'] ?? null; // La chaîne jpgUrl de React

if ($partitionId && $base64Image) {

    // 2. Nettoyage de la chaîne Base64
    // On retire le préfixe "data:image/jpeg;base64," pour n'avoir que les données
    $imageParts = explode(';base64,', $base64Image);
    $imageTypeAux = explode('image/', $imageParts[0]);
    $imageType = $imageTypeAux[1]; // jpg
    $imageBase64 = base64_decode($imageParts[1]);

    // 3. Définition du chemin de stockage
    $folderPath = "../public/uploads/previews/";

    // Création du dossier s'il n'existe pas
    if (!file_exists($folderPath)) {
        mkdir($folderPath, 0777, true);
    }

    $fileName = "partition_" . $partitionId . ".jpg";
    $file = $folderPath . $fileName;

    // 4. Enregistrement du fichier sur le serveur
    if (file_put_contents($file, $imageBase64)) {

        // 5. Mise à jour du chemin dans la base de données
        // On stocke le chemin relatif pour que le mapper puisse le lire
        $dbPath = "uploads/previews/" . $fileName;

        $sql = $pdo->prepare("UPDATE partitions SET partition_preview = ? WHERE id = ?");
        $sql->execute([$dbPath, $partitionId]);

        echo json_encode([
            "success" => true,
            "message" => "Aperçu enregistré avec succès",
            "path" => $dbPath
        ]);
    } else {
        http_response_code(500);
        echo json_encode(["erreur" => "Impossible d'écrire le fichier sur le serveur"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["erreur" => "Données manquantes (ID ou Image)"]);
}
