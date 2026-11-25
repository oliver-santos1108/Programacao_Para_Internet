<?php 
    session_start();

    if(!isset($_POST['usuario'])){
        header("Location: login.php");
        exit();
    }

    $_SESSION['usuario'] = $_POST['usuario'];
    $_SESSION['senha'] = $_POST['senha'];

    header("Location: home.php")
?>