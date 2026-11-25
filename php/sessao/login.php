<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
 }
label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}
button{
    font-size: 100px;
    padding: 30px;
    border-radius: 30px;
    font-family:Arial, sans-serif;
}
p {
    font-size: 50px;
}
#botao { 
    padding: 5px 20px; 
    font-size: 16px; 
    cursor: pointer; 
    background-color: #007BFF; 
    color: white; 
    border: none; 
    border-radius: 4px; 
}
#botao:hover { 
    background-color: #0056b3; 
}
</style>
<body>
    <form action= "./start.php" method="POST">
        <label for="usuario">Usuário</label>
        <input id="usuario" type="text" name="usuario">
        <br>
        <label for="senha">Senha</label>
        <input id="senha" type="pasword" name="senha">
        <br>
        <br>
        <input id="botao" type="submit" value="Entrar">
</body>
</html>