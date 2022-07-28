function daquiADoisAnos() {
    let doisAnos = document.getElementsByTagName("p");
    doisAnos[1].innerText = "Daqui a dois anos eu vou estar trabalhando como Desenvolver Web, morando sozinho e em outra cidade";
}
daquiADoisAnos();

function quadroCorDaTrybe() {
let principal = document.getElementsByClassName("main-content");
principal[0].style.backgroundColor = 'rgb(76,164,109)';
}
quadroCorDaTrybe();

function quadroVermelhoFicaBranco() {
let central = document.getElementsByClassName("center-content");
central[0].style.backgroundColor = 'white';
}
quadroVermelhoFicaBranco();

function corrigeH1() {
document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScript";
}
corrigeH1();

function todoPMaiusculo(){
    let recebeP = document.getElementsByTagName("p");
    recebeP[0].style="text-transform: uppercase";
    recebeP[1].style="text-transform: uppercase";
    recebeP[2].style="text-transform: uppercase";
}
todoPMaiusculo();

function mostraParagrafo() {
    let todosP = document.getElementsByTagName("p");
    for (let ind = 0; ind < todosP.length; ind += 1){
        console.log(todosP[ind].innerHTML);
    }
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
