<?php

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['message' => "Erreur : Aucune donnée reçue"]);
    exit;
}

$email = $_GET['id'];
$password = $data['password'];
$username = trim($data['username']);
$age = $data['age'];
$gender = $data['identity'];

static $reservedNames = ['admin', 'root', 'support', 'help', 'api', 'moderator'];
static $genders = ['M', 'F', 'NB', 'Private'];

if ($email && $password) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL) && strlen($password) > 7) {
        $_GET['email'] = filter_var($email, FILTER_SANITIZE_EMAIL);
        $_GET['password'] = $password;
        if ($username && 3 < strlen($username) && strlen($username)  <= 20) {
            if (preg_match('/^[a-zA-Z0-9_]+$/', $username)) {
                if (!in_array(strtolower($username), $reservedNames)) {
                    $_GET['username'] = $username;
                    if (is_numeric($age)) {
                        $_GET['age'] = $age;
                        if (in_array($gender, $genders)) {
                            $_GET['gender'] = $gender;
                        } else {
                            http_response_code(400);
                            echo json_encode(['message' => "Erreur : Genre non listé. Veuillez nous contacter si besoin."]);
                            exit;
                        }
                    } else {
                        http_response_code(400);
                        echo json_encode(['message' => "Erreur : L'age n'est pas dans le bon format"]);
                    }
                } else {
                    http_response_code(400);
                    echo json_encode(['message' => "Erreur : Ce nom d'utilisateur est réservé."]);
                    exit;
                }
            } else {
                http_response_code(400);
                echo json_encode(['message' => "Erreur : Seuls les caractères alphanumériques et l'underscore sont autorisés."]);
                exit;
            }
        } else {
            http_response_code(400);
            echo json_encode(['message' => "Erreur : La longueur doit être comprise entre 3 et 20 caractères."]);
            exit;
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => "Erreur : Identifiants incorrect ..."]);
        exit;
    }
} else {
    http_response_code(400);
    echo json_encode(['message' => "Erreur : Identifiants incorrect ..."]);
    exit;
}
