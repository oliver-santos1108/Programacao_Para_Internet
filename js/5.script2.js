let h1titulo=document.getElementById("titulo");
h1titulo.innerHTML="I6 2026";
let h1 = document.createElement("h1");
h1.innerHTML="olá";
document.body.appendChild(h1);

let inputPeso = document.getElementById("iPeso");
let inputAltura = document.getElementById("iAltura");
let calcular = document.getElementById("#botao");

let peso = Number.parseFloat(inputPeso.value)
console.log(typeof(peso))
let altura = Number.parseFloat(inputAltura.value)

let imc = peso / (altura *  altura);
console.log(imc);

//não roda
temp.addEventListener("click",()=>{

    result=document.createElement("p")
    result.innerHTML=imc
    div.appendChild(result)

})