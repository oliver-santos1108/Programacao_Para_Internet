//no navegador o js tem window
console.log(window.screen)
var l ; 
window.document.body.innerHTML = "<p> OLÁ </p>"
document.body.style.backgroundColor = "red"
document.body.style.color = "white"

//div
let div=document.createElement("div");

//nome
let nome=document.createElement("p");
nome.innerHTML="Informe seu nome: "
div.appendChild(nome);

    //input nome
    document.body.appendChild(div);
    let temp=document.createElement("input");
    temp.id="inputNome"
    div.appendChild(temp)

//input altura
    div.appendChild(document.createElement("br"));
    temp=document.createElement("label");
    temp.innerHTML = "altura"
    div.appendChild(temp);
    temp=document.createElement("input");
    temp.id="inputAtura"
    div.appendChild(temp)

//input peso
     div.appendChild(document.createElement("br"));
    temp=document.createElement("label");
    temp.innerHTML = "peso"
    div.appendChild(temp);
    temp=document.createElement("input");
    temp.id="inputPeso"
    div.appendChild(temp)

//imagem comunismo
let img=document.createElement("img")
img.src = "img/comunismo2.png"
document.body.appendChild(img)


//add botão
div.appendChild(document.createElement("br"));
temp=document.createElement("button");
temp.id="btnCalcular"
temp.innerHTML="btnCalcular"
div.appendChild(temp)

temp.addEventListener("click",()=>{
    inputPeso=document.getElementById("inputPeso")
    inputAltura=document.getElementById("inputAltura")
    peso=Number.parseFloat(inputPeso.value)
    altura=Number.parseFloat(inputAltura.value)
    imc=peso/(altura*altura);
    console.log(imc)
    result=document.createElement("p")
    result.innerHTML=imc
    div.appendChild(result)


})