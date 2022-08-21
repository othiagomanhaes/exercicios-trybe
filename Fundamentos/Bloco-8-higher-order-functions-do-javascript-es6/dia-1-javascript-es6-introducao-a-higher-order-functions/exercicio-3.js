const contaPontos = (gabarito, respostasAluno) => {
  let nota = 0;
  let contaNa = 0;
  if(gabarito === respostasAluno) {
    return 'A nota do aluno foi 10!'
  }
  else {
    for (let ind = 0; ind < gabarito.length; ind += 1) {
        if (respostasAluno[ind] === 'N.A') {
          contaNa += 1;
        } 
        else if (respostasAluno[ind] === gabarito[ind]) {
          nota += 1;
        }
        else {
            nota -= 0.5;
        };
    };
  };

  return `A nota do aluno foi ${nota}. Contou ${contaNa} N.A's.`;
};

const corretor = (gabarito, respostasAluno, checker) => {
  return checker(gabarito, respostasAluno);
};


const respostasCertas = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostasEstuda = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(corretor(respostasCertas, respostasEstuda, contaPontos));