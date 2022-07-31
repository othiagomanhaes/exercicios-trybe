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
