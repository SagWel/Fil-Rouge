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
    $id2 = $parts[$publicIndex + 3] ?? null;
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
    if ($id2) {
        $_GET['id2'] = $id2;
    }

    $middlewareID = '../middlewares/CheckNumericId.php';

    switch ($ressource) {
        case 'score':
            require_once $middlewareID;
            break;
        case 'scoresinstrument':
            require_once '../middlewares/CheckInstrument.php';
            break;
        case 'auth':
            require_once '../middlewares/CheckLogin.php';
            break;
        case 'foundbyemail':
            require_once '../middlewares/CheckEmail.php';
            break;
        case 'creatuser':
            require_once '../middlewares/CheckCreatUser.php';
            break;
        case 'creatuserinstruments':
            require_once $middlewareID;
            break;
        case 'profil':
            require_once $middlewareID;
            break;
        case 'updateprofil':
            require_once '../middlewares/CheckProfilInputs.php';
            $_POST['userId'] = $id;
            break;
        case 'searchscore':
            require_once '../middlewares/CheckQuery.php';
            break;
        case 'adduserhistory':
            require_once $middlewareID;
            $_POST['userId'] = $id;
            $_POST['scoreId'] = $id2;
            break;
        case 'suggestions':
            require_once $middlewareID;
            break;
        case 'history':
            require_once $middlewareID;
            break;
        case 'deleteaccount':
            require_once $middlewareID;
            require_once '../middlewares/CheckLogin.php';
            $_POST['userId'] = $id;
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
