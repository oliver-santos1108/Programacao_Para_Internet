//rodar o arquivo: 
// node nomeDaPasta/nomeDoArquivo
// node js/3.js

//definir variaveis
var b;
let a;
const c = 3.14;

// estruturas: if else; for; switch

//String, Number, null, undefied

b=2.0;
console.log("O tipo da variável B: "+typeof(b));
a="2";
console.log("O tipo da variável B: "+typeof(a));

if(!(a==b)){
    console.log("O valor das variáveis é diferente");
}
if(a===b){ //o tipo de variável e o valor precisam ser iguais
    console.log("O valor das variáveis é idêntica");
}
if(a==b){
    console.log("O valor das variáveis é igual");
}

//array===============================================================================================

var itensChurrasco = [];
itensChurrasco.push("costela");
itensChurrasco.push("pão e alho");
itensChurrasco.push("carvão");

// jeito podre de imprimir array: console.log(itensChurrasco);

// jeito trabalhoso de imprimir array: 
for (let i = 0; i<itensChurrasco.length-1; i++){}

itensChurrasco.forEach((e,i) =>{ // melhor jeito de imprimir array 
    console.log((i+1)+"-"+e)
}); 

nome = "Oliver Cristine Silva dos Santos"
//Para imprimir o nome ao contrário:
console.log(nome.split(" ").reverse().join(" "));
console.log(nome.split("").reverse().join(""));



//filter==============================================================================================
console.log(itensChurrasco.filter((e,i) => {return i!=3}));

itensChurrasco.filter((e) => {console.log(e); return !e == "romops" })

//filtrar por qualquer elemento que contenha uma letra como p
console.log(itensChurrasco.filter((e,i) => {
    //true false
      return !e.split("").includes("p");
}))

//JSON==============================================================================================

console.log(JSON.stringify(itensChurrasco));
array2=JSON.parse("[\"bla\" , \"bla1\"]")
console.log(array2[1])


