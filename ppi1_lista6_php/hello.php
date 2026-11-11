
    <h1>
    <?php
    //seu código aqui 
    //só dentro dessa tag o código será reconhecido como php
    echo "O capitalismo falhou, falha e falhará em cada uma das sociedades aonde ele colocar os seus tentáculos que se baseiam na expropriação e na exploração do homem pelo homem.";
    ?>
    </h1>
    <?php
    $valor=50; //variavel
    echo "<p>" .$valor. "<p>"; //imprime com estilização

    $nome = "oliver"; //variavel
    echo $nome; //imprime

    $array = ""; //declarando array como String
    $array = array(); //falando que essa string é um Array de String
    $array = ["pera", "maçã", "banana"]; //preenchendo o array
    echo "<br>";
    print_r($array);

    echo "<ul>";
    for($i=0; $i<=($array); $i++){
        echo "<li> $array[$i] </li>";
    }
    echo "</ul>";
    ?>

    
