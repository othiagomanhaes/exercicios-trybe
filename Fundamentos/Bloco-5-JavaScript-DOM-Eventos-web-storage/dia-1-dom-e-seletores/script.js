let cabecalho = document.querySelector("#header-container");
cabecalho.style.backgroundColor = 'green';

let primeiraCaixa = document.querySelectorAll(".emergency-tasks");
primeiraCaixa[0].style.backgroundColor = 'pink';

let tarefas = document.getElementsByTagName("h3");
tarefas[0].style.backgroundColor = 'purple';
tarefas[1].style.backgroundColor = 'purple';
tarefas[2].style.backgroundColor = 'black';
tarefas[3].style.backgroundColor = 'black';


let segundaCaixa = document.querySelectorAll(".no-emergency-tasks");
segundaCaixa[0].style.backgroundColor = 'yellow';

let rodape = document.getElementById('footer-container');
rodape.style.backgroundColor = 'navy';