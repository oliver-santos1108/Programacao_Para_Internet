<?php
function randomize(int $min = 1, int $max = 100): void {
    $random = random_int($min, $max);
    echo $random;
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>PHP</title>
  <link rel="stylesheet" href="./style.css">
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
  </style>
</head>
<body>
    <form method="POST" action="">
      <button type="submit" name="btn_sortear"><strong>Sortear</strong></button>
    </form>
    <!-- depois de apertar o botao -->
    <?php if (isset($_POST['btn_sortear'])): ?>
      <p>
          <strong><?php randomize(); ?></strong>
      </p>
    <?php endif; ?>
</body>
</html>
