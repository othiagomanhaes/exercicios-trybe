const myFizzBuzz = require('./myFizzBuzz');

describe('Função myFizzBuzz', () => {
    it('Verifica se a função retorna fizzbuzz quando recebe um número divisível por 3 e por 5', () => {
      expect(myFizzBuzz(15)).toMatch('fizzbuzz');
    });

    it('Verifica se a função retorna fizz quando recebe um número apenas divisível por 3', () => {
      expect(myFizzBuzz(6)).toMatch('fizz');
    });

    it('Verifica se a função retorna buzz quando recebe um número apenas divisível por 5', () => {
      expect(myFizzBuzz(10)).toMatch('buzz');
    });

    it('Verifica se a função retorna o próprio número passado no praâmetro quando não for divisível por 3 e ou por 5.', () => {
      expect(myFizzBuzz(7)).toEqual(7);
    });

    it('Verifica se a função retorna false quando não recebe um número no parâmetro.', () => {
      expect(myFizzBuzz(!Number)).toBeFalsy();
    })
});
