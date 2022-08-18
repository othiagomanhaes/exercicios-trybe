const myFizzBuzz = require('./myFizzBuzz');

describe('Função myFizzBuzz', () => {
    it('Verifica se a função retorna FizzBuzz quando recebe um número divisível por 3 e por 5', () => {
      expect(myFizzBuzz(15)).toMatch('fizzbuzz');
    });
});