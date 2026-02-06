<?php

const MYSQL_HOST = "localhost";
const MYSQL_PORT = "3306";
const MYSQL_NAME = "d10h_!";
const MYSQL_USER = "root";
const MYSQL_PDW = "";

try {
    $pdo = new PDO(
        sprintf('mysql:host=%s;dbname=%s;port=%s;charset=utf8', MYSQL_HOST, MYSQL_NAME, MYSQL_PORT),
        MYSQL_USER,
        MYSQL_PDW
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die('Erreur :' . $e->getMessage());
}
