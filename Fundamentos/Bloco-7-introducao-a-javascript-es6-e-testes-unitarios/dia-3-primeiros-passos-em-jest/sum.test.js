const sum = require('./sum.js');

describe('Verifica afunção sum', () => {
  it('Verifica se 4 + 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9)
  });

  it('Verifica se 0 + 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0)
  });

  it('Verifica se sum lança um erro se recebe uma string', () => {
    expect(() => {sum() }).toThrow();
  });

  it('Verifica se a mensagem de erro é: "parameters must be numbers" quando receber uma string', () => {
    expect(() => {sum() }).toThrowError(new Error('parameters must be numbers'));
  });
});