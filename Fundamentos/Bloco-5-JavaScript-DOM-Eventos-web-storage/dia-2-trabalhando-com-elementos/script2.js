// 1-Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(titulo);


// 2-Adicione a tag main com a classe main-content como filho da tag body;
let principal = document.createElement('main');
principal.className = 'main-content';
document.body.appendChild(principal);


// 3-Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let secaoCenter = document.createElement('section');
secaoCenter.className = 'center-content';
principal.appendChild(secaoCenter);


// 4-Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let paragrafo = document.createElement('p');
paragrafo.innerText = 'Algum texto';
secaoCenter.appendChild(paragrafo);


// 5-Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let secaoLeft = document.createElement('section');
secaoLeft.className = 'left-content';
principal.insertBefore(secaoLeft, secaoCenter);


// 6-Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let secaoRight = document.createElement('section');
secaoRight.className = 'right-content';
principal.insertBefore(secaoRight, secaoCenter);


// 7-Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let imagem = document.createElement('img');
imagem.src = 'https://picsum.photos/200';
imagem.className = 'small-image';
secaoLeft.appendChild(imagem);


// 8-Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let lista = document.createElement('ul');
let array = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let ind=0; ind < array.length; ind += 1){
    let itemDaLista = document.createElement('li');

    itemDaLista.innerText = array[ind];
    lista.appendChild(itemDaLista);
}
secaoRight.appendChild(lista);


// 9-Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
let subt1 = document.createElement('h3');
let subt2 = document.createElement('h3');
let subt3 = document.createElement('h3');

principal.appendChild(subt1);
principal.appendChild(subt2);
principal.appendChild(subt3);


//PARTE - 2;

// 1-Adicione a classe title na tag h1 criada;
titulo.className = 'title';


// 2-Adicione a classe description nas 3 tags h3 criadas;
subt1.className = 'description';
subt2.className = 'description';
subt3.className = 'description';

~
// 3-Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
principal.removeChild(secaoLeft);


// 4-Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
secaoRight.style.marginRight = 'auto';


// 5-Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
secaoCenter.style.backgroundColor = 'green';


// 6-Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
let listaDeLi = document.getElementsByTagName('li');
lista.removeChild(listaDeLi[9]);
lista.removeChild(listaDeLi[8]);
