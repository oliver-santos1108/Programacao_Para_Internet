let h1titulo = document.getElementById("titulo");
h1titulo.innerHTML = "IFSC 2026";
let h1 = document.createElement("h1");
h1.innerHTML = "oi";
document.body.appendChild(h1);
let inputPeso = document.getElementById("iPeso");
let inputAltura = document.getElementById("iAltura");
let calcular = document.getElementById("botao");
let pimc = document.querySelector("#IMC");
calcular.addEventListener("click", function() {
    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);
    if (peso <= 0 || altura <= 0 ||
        inputPeso.value === "" || inputAltura.value === "") {
        pimc.innerHTML = "Digite um peso e uma altura válidos!";
        return;
    }
    let imc = peso / (altura * altura);
    pimc.innerHTML = "Seu IMC é: " + imc.toFixed(2);
    let imagem = document.getElementById("imagem");
    let classificacao = document.getElementById("classificacao");
    switch (true) {
    case (imc < 18.5):
        classificacao.innerHTML = "Abaixo do peso";
        imagem.src = "../js/img/abaixopeso.png";
        break;
    case (imc < 25):
        classificacao.innerHTML = "Peso normal";
        imagem.src = "../js/img/normal.png";
        break;
    case (imc < 30):
        classificacao.innerHTML = "Sobrepeso";
        imagem.src = "../js/img/sobrepeso.png";
        break;
    case (imc < 35):
        classificacao.innerHTML = "Obesidade grau 1";
        imagem.src = "../js/img/obesidade1.png";
        break;
    case (imc < 40):
        classificacao.innerHTML = "Obesidade grau 2 (severa)";
        imagem.src = "../js/img/obesidade2.png";
        break;
    default:
        classificacao.innerHTML = "Obesidade grau 3 (mórbida)";
        imagem.src = "../js/img/obesidade3.png";
        break;
}
});