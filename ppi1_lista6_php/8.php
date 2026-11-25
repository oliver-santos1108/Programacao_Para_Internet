<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>somar</title>
</head>
<style>
    body { 
            font-family: Arial, sans-serif; 
            margin: 20px;     
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        #botao { 
            padding: 10px 20px; 
            font-size: 16px; 
            cursor: pointer; 
            background-color: #007BFF; 
            color: white; border: none; 
            border-radius: 4px; 
        }
        #botao:hover { 
            background-color: #0056b3; 
        }
        section { 
            margin-top: 20px; 
            padding: 15px; 
        }
       
       
</style>
<body>
    <h1>Soma</h1>
    <p>Digite dois valor que você deseja somar, separados por um espaço.</p>
    <form action="" method= "GET">
        <label for="numeros">números</label>
        <input id="numeros" type="text" name="num">
        <input id="botao" type="submit" value="Somar">
    </form>
    <?php 
    if(isset($_GET["num"])){ //se num esta setada
        $num = explode(" ", $_GET["num"]);
        $soma = 0; 

        for($i = 0; $i < count($num); $i++){
            $soma = $soma + floatval($num[$i]);
        }

        echo $soma;

    } else {
        echo "erro.";
    }
    ?>
</body>
</html>