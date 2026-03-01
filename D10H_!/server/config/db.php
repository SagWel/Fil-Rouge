<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

$dbHost = $_ENV['MYSQL_HOST'];
$dbPort = $_ENV['MYSQL_PORT'];
$dbName = $_ENV['MYSQL_NAME'];
$dbuser = $_ENV['MYSQL_USER'];
$dbPwd = $_ENV['MYSQL_PWD'];
$secretKey = $_ENV['MA_SUPER_CLEF_SECRETE'];

try {
    $pdo = new PDO(
        sprintf('mysql:host=%s;dbname=%s;port=%s;charset=utf8', $dbHost, $dbName, $dbPort),
        $dbuser,
        $dbPwd
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
    die('Erreur :' . $e->getMessage());
}
