<?php

require_once '../config/db.php';

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

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

    switch ($ressource) {
        case 'partition':
            require_once '../middlewares/CheckNumericId.php';
            break;
        case 'partitionsInstrument':
            require_once '../middlewares/CheckInstrument.php';
            break;
        case 'auth':
            require_once '../middlewares/CheckLogin.php';
            break;
        case 'foundbyemail':
            require_once '../middlewares/Checkemail.php';
            break;
        case 'creatuser':
            require_once '../middlewares/CheckCreatUser.php';
            break;
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
