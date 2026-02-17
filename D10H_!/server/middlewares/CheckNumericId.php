<?php
if (!is_numeric($id)) {
    http_response_code(400);
    echo json_encode(["erreur" => "L'identifiant dois être un nombre"]);
    exit();
}
