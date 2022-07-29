// 1-Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let paiDeTodos = document.getElementsByTagName('body');
let titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';
paiDeTodos[0].appendChild(titulo);

// 2-Adicione a tag main com a classe main-content como filho da tag body;

let principal = document.createElement('main');
principal.classList.add('main-content');
document.body.appendChild(principal);

// 3-Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let secao = document.createElement('section');
secao.classList.add('center-content');
principal[0].appendChild(secao);

// 4-Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let paragrafo = document.createElement('p');
paragrafo.innerText = "Dom é treino";
secao.appendChild(paragrafo);

// 5-Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let secao2 = document.createElement('section');
secao2.classList.add('left-content');


