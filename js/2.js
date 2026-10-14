// comentario de uma linha
/* comentario de multiplas linhas*/
//Três formasde declarar uma varialvel (sem tipo)
//O var e o let se distiguem pelo escopo de declaração, cria variavel global

let nome="Oliver";
var sobrenome;

if(nome=="Oliver"){
    sobrenome= "Santos"
    let idade=17;
    var pet="dog"

    console.log("nome:"+nome+"sobrenome:"+sobrenome+"idade:"+idade+"pet:"+pet)
}
let idade=18;
//console.log("nome:"+nome+"sobrenome:"+sobrenome+"idade:"+idade+"pet:"+pet)
//Estruturas de Seleção no js

    if(idade=="18"){
        console.log("A")
    }
    if(idade==="18"){
        console.log("B")
        //não converte para string e não imprime
    }
    peso=50
    altura=1.60
    imc=peso/(altura*altura)
    //classiicação do IMC
    if (imc < 18.5) {
    console.log("Abaixo do peso");
    } 
    else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
    } 
    else if (imc >= 25 && imc < 30) {
    console.log("Sobrepeso");
    } 
    else if (imc >= 30 && imc < 35) {
    console.log("Obesidade grau 1");
    } 
    else if (imc >= 35 && imc < 40) {
    console.log("Obesidade grau 2 (severa)");
    } else{
    console.log("Obesidade grau 3 (mórbida)");
}
    /*else{
        console.log("nome:"+"Joana")
    }*/

        //switch case estruturra de seleção

        a=2

        switch(a){
            case 1: console.log("A"); break;
            case 2: console.log("B"); break;
            case 3: console.log("C"); break;
            default: console.log("D")
        }

        // switch case expressão
         switch(b){
            case a**a==4: console.log("A"); break;
            case a==2: console.log("B"); break;
            case 3==3: console.log("C"); break;
            default: console.log("D")
        }

        //while
        let i=0
        while(i<5){
            console.log(i);
            i++
        }

        //for
        for(let i=0;i<5;i++){
            console.log(i)

        }

        //array
        let carnes= ["picanha", "costela","alcatra","fraldinha"]
        carnes.forEach((v1, index)=>{
              console.log(v1+"index"+index);

        });