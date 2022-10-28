<?php

// defnir a constante DB_HOST
define('DB_HOST', 'localhost');
// definir a constante DB_USER
define('DB_USER', 'root');
// definir a constante DB_PASS
define('DB_PASS', 'senac');
// definir a constante DB_NAME
define('DB_NAME', 'usuarios');


try {
    // criar uma nova instância de PDO
    $db = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
    // definir o atributo PDO::ATTR_ERRMODE para PDO::ERRMODE_EXCEPTION
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // definir o atributo PDO::ATTR_DEFAULT_FETCH_MODE para PDO::FETCH_OBJ
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
    // definir o atributo PDO::ATTR_EMULATE_PREPARES para false
    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
} catch (PDOException $e) {
    // exibir a mensagem de erro
    echo $e->getMessage();
}


?>