<?php 
    session_start();

    if(!isset($_POST['usuario'])){
        header("Location: login.php");
        exit();
    }
    //imprimir usuario e senha
    echo "<br>Usuário: " . $_SESSION['usuario'] . "<br>Senha: " . $_SESSION['senha'];
?>