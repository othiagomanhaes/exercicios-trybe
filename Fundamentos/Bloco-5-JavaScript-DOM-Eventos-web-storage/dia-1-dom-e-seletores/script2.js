let doisAnos = document.getElementsByTagName("p");
doisAnos[1].innerText = "Daqui a dois anos eu vou estar trabalhando como Desenvolver Web, morando sozinho e em outra cidade".toUpperCase();

doisAnos[0].style="text-transform: uppercase";
doisAnos[2].style="text-transform: uppercase";


let principal = document.getElementsByClassName("main-content");
principal[0].style.backgroundColor = 'rgb(76,164,109)';

let central = document.getElementsByClassName("center-content");
central[0].style.backgroundColor = 'white';

document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript";

for (let ind = 0; ind < doisAnos.length; ind += 1) {
    console.log(doisAnos[ind]);
}

        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 ---Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
    Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)). 
    Crie e execute uma função que mude a cor do quadrado vermelho para branco.
    Crie e execute uma função que corrija o texto da tag <h1>.
    Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.---


 Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
        */
