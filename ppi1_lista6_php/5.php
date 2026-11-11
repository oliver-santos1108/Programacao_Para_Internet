
<?php
    $resultado = null;
    $min = $_POST['min'] ?? 1;
    $max = $_POST['max'] ?? 100;

if(isser($_GET["min"] && isset($_GET["max"]))){
    $min = $_GET['min'] ?? 1;
    $max = $_GET['max'] ?? 100;
        echo ( rand($min,$max))

    }
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sorteador</title>
  <link rel="stylesheet" href="./style.css">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #fdfdfd;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .campo {
      margin-bottom: 15px;
      text-align: left;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
    input[type="number"] {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
   
  </style>
</head>
<body>
    <h2>Sorteador</h2>
    <form method="POST" action="">
      <div class="campo">
        <label for="min">Número Mínimo:</label>
        <input type="number" id="min" name="min" value=" <?php echo $min;?>" >
      </div>

      <div class="campo">
        <label for="max">Número Máximo:</label>
        <input type="number" id="max" name="max" value="<?php echo $max;?>" >
      </div>

      <button type="submit">Sortear</button>
    </form>
    
    <?php
    $resultado = null;
    $erro = null;
    $min = $_POST['min'] ?? 1;
    $max = $_POST['max'] ?? 100;

    

    // verificar o formularip
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        //ve se o numero e inteiro
        $minValidado = filter_input(INPUT_POST, 'min', FILTER_VALIDATE_INT);
        $maxValidado = filter_input(INPUT_POST, 'max', FILTER_VALIDATE_INT);
        
        if ($minValidado === false || $maxValidado === false) {
            $erro = "Por favor, digite apenas números inteiros válidos.";
        } elseif ($minValidado >= $maxValidado) {
            $erro = "O número mínimo deve ser menor que o número máximo.";
        } else {
            //faz o sorteieo
            $resultado = random_int($minValidado, $maxValidado);
        }
    }
    ?>
   <!--pra exibir o numero-->
    <?php if ($resultado !== null): ?>
      <div class="resultado">
        Número sorteado: <strong><?= $resultado ?></strong>
      </div>
    <?php endif; ?>

</body>
</html>
