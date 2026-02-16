<?php

require_once '../config/db.php';

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');



$requestUri = $_SERVER['REQUEST_URI'] ?? '';

$path = parse_url($requestUri, PHP_URL_PATH);

$parts = explode('/', trim($path, '/'));

$publicIndex = array_search('public', $parts);

if ($publicIndex !== false) {
    $ressource = $parts[$publicIndex + 1] ?? '';
    $id = $parts[$publicIndex + 2] ?? null;
} else {
    $ressource = $parts[0] ?? '';
    $id = $parts[1] ?? null;
}

$ressource = preg_replace('/[^a-zA-Z0-9]/', '', $ressource ?? '');

$controlerFile = "../controllers/" . $ressource . "Controller.php";

if ($ressource && file_exists($controlerFile)) {
    if ($id) {
        $_GET['id'] = $id;
    }
    require_once $controlerFile;
} else {
    http_response_code(404);
    echo json_encode([
        "erreur" => "Ressource introuvable",
        "debug_info" => [
            "url_recue" => $requestUri,
            "tableau_parts" => $parts,
            "index_public_trouve" => $publicIndex,
            "ressource_extraite" => $ressource,
            "fichier_tente" => $controlerFile,
            "dossier_actuel" => getcwd()
        ]
    ]);
}
