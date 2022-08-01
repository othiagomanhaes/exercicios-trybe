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