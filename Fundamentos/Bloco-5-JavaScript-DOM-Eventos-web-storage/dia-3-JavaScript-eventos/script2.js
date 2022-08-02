function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
  // Escreva seu código abaixo.


function criaDiasDoMes () {  
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let listaDiasMes = document.getElementById('days');

    for (let ind = 0; ind < decemberDaysList.length; ind += 1) {
        let diasDoMes = document.createElement('li');
        diasDoMes.className = 'days';
        diasDoMes.innerText = decemberDaysList[ind];

        if (decemberDaysList[ind] == 24 || decemberDaysList[ind] == 25 || decemberDaysList[ind] == 31) {
            diasDoMes.className += ' holiday';
        }

        if(decemberDaysList[ind] == 4 || decemberDaysList[ind] == 11 || decemberDaysList[ind] == 18 || decemberDaysList[ind] == 25) {
            diasDoMes.className += ' friday';
        }

        listaDiasMes.appendChild(diasDoMes);
    }
}

criaDiasDoMes();

//Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
//Sua função deve receber um parâmetro com a string 'Feriados'
//Adicione a este botão a ID "btn-holiday"
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function criaBotaoFeriados(textoFeriados) {
    let botao = document.createElement('button');
    botao.innerText = textoFeriados;
    botao.id = 'btn-holiday';
    let divisaoDobotao = document.getElementsByClassName('buttons-container');
    divisaoDobotao[0].appendChild(botao);
}
criaBotaoFeriados('Feriados');

//Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
//Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
//👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

let mesmoBotao = document.getElementById('btn-holiday');
mesmoBotao.addEventListener('click', mudaFundoFeriado);
mesmoBotao.addEventListener('dblclick', desmudaFundoFeriado);

function mudaFundoFeriado() {
    let feriados = document.getElementsByClassName('holiday');
    for (let ind2 = 0; ind2 < feriados.length; ind2 += 1) {
        feriados[ind2].style.backgroundColor = 'yellow';
    }
}

function desmudaFundoFeriado(){
    let feriados = document.getElementsByClassName('holiday');
    for (let ind2 = 0; ind2 < feriados.length; ind2 += 1) {
        feriados[ind2].style.backgroundColor = 'rgb(238,238,238)';
    }
}

//Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
//Adicione a esse botão o ID "btn-friday";
//Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function criaBotaoSexta(sextou) {
    let botaoSexta = document.createElement('button');
    botaoSexta.id = 'btn-friday';
    let divDoBotao = document.getElementsByClassName('buttons-container');
    divDoBotao[0].appendChild(botaoSexta);
    botaoSexta.innerText = sextou;
}
criaBotaoSexta('Sexta-feira');

//Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
//👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

let mesmoBotaoSexta = document.getElementById('btn-friday');
mesmoBotaoSexta.addEventListener('click', mudaSexta);
mesmoBotaoSexta.addEventListener('dblclick', desMudaSexta);

function mudaSexta() {
    let sextas = document.getElementsByClassName('friday');
    for(let ind3 = 0; ind3 < sextas.length; ind3 += 1) {
        sextas[ind3].innerText = 'SEXTOU, BABY!';
    }
}

function desMudaSexta() {
    let cont = 4;
    let sextas1 = document.getElementsByClassName('friday');
    for (let ind4 = 0; ind4 < sextas1.length; ind4 += 1) {
        sextas1[ind4].innerText = cont;
        cont += 7;
    }
}

//Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
//Dica - Propriedade: event.target.

let osDias = document.getElementById('days');

function aumentaDia(evt) {
    evt.target.style.fontSize = '35px';
}
osDias.addEventListener('mouseover', aumentaDia);

function diminuiDia(evt) {
    evt.target.style.fontSize = '20px';
}
osDias.addEventListener('mouseout', diminuiDia);


//Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks"

function addTarefa(tarefa) {
    let tarefinha = document.createElement('span');
    let myTasks = document.getElementsByClassName('my-tasks');
    myTasks[0].appendChild(tarefinha);
    tarefinha.innerText = tarefa;
}
addTarefa('Estudar');

//Implemente uma função que adicione uma legenda com cor para a tarefa.
//* Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addLegenda(cor) {
    let divisao = document.createElement('div');
    divisao.className = 'task';
    divisao.style.backgroundColor = cor;
    let minhasTarefas = document.getElementsByClassName('my-tasks');
    minhasTarefas[0].appendChild(divisao);
}
addLegenda('red');

//Implemente uma função que selecione uma tarefa.
//Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
//Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

let divisaoOn = document.getElementsByClassName('my-tasks');

function selectTarefa(evt) {
    if (evt.target.className === 'task'){
        evt.target.className = 'task selected'
      } else {
        evt.target.className = 'task'
      }
}
divisaoOn[0].addEventListener('click', selectTarefa);

//Implemente uma função que atribua a cor da tarefa ao dia do calendário.
//Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
//Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)

let corDaTarefa = document.getElementsByClassName('.task');

function corDia(evt) {
   
}
osDias2.addEventListener('click', corDia);
