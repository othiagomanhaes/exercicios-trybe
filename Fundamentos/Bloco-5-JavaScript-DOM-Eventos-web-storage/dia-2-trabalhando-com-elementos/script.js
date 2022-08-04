let nossoElemento = document.getElementById("elementoOndeVoceEsta");

let paiDoNossoElemento = document.getElementById("elementoOndeVoceEsta").parentElement;
paiDoNossoElemento.style.color = 'green';

let primeFilhoDoNossoElemento = document.getElementById("elementoOndeVoceEsta").firstElementChild;
primeFilhoDoNossoElemento.innerText = "Olá, eu sou o Pai.";

let primeiroFilhDePai = document.getElementById("pai").firstChild;

let primeiroFilhoDoNossoPai = document.getElementById("elementoOndeVoceEsta").parentElement.firstChild;

let textoDeOndeTo = document.getElementById("elementoOndeVoceEsta").nextSibling;

let irmaoDoNossoElemento = document.getElementById("elementoOndeVoceEsta").nextElementSibling;

let terceiroFilhoDoPai = document.getElementById("pai").children[2];

//Criar um irmão para ondeVocêEstá

let elementoIrmaoP = document.createElement("p");
let paiNosso = document.getElementById("pai");
elementoIrmaoP.innerText = "Try this";
paiNosso.appendChild(elementoIrmaoP);

//Crie um filho para o elemento 'ondeVoceEstá'
let ondeEuTo = document.getElementById("elementoOndeVoceEsta");
let filhoDeOndeTo = document.createElement('p');
filhoDeOndeTo.innerText = "RECEBA!! Luva de Predeiro!!";
ondeEuTo.appendChild(filhoDeOndeTo);


