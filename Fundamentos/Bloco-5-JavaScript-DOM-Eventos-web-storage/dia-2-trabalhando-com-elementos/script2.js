// 1-Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let paiDeTodos = document.getElementsByTagName('body');
let titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';
paiDeTodos[0].appendChild(titulo);
