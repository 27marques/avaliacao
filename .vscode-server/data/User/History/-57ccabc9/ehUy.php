<?php

// defnir a constante DB_HOST
define('DB_HOST', 'localhost');
// definir a constante DB_USER
define('DB_USER', 'root');
// definir a constante DB_PASS
define('DB_PASS', 'senac');
// definir a constante DB_NAME
define('DB_NAME', 'usuarios');


try{
    // criar a conexão com o banco de dados
    $conn = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME, DB_USER, DB_PASS);
    // definir o modo de erro PDO::ERRMODE_EXCEPTION
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // preparar a query
    $stmt = $conn->prepare('SELECT * FROM usuarios');
    // executar a query
    $stmt->execute();
    // obter os dados
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // exibir os dados
    print_r($result);
}

?>