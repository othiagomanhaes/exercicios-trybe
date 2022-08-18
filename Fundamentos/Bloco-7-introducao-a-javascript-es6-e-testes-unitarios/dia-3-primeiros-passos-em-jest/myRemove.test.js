const myRemove = require('./myRemove');

describe('Função que remove um item do array', () => {
  it('Verifica se a função remove o item do array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  });

  it('Verifica se o array fica o do jeito desejado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifica se o item não estiver no array, o array segue inalterado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});