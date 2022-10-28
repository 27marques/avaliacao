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
    $pdo = new PDO('mysql:host='.DB_HOST.';dbname='.DB_NAME, DB_USER, DB_PASS);
    
}  catch(PDOException $e){
    // exibir a mensagem de erro
    echo 'Erro: '.$e->getMessage();
}

$sql = "SELECT * FROM usuarios";

$prepare = $pdo->prepare($sql);
$users = $prepare->fetchAll(PDO::FETCH_ASSOC);

foreach($users as $user){
    echo $user['nome'];
}

?>  

