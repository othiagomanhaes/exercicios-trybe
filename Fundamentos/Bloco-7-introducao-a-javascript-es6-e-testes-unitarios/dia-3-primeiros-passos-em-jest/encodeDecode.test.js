const {encode, decode} = require('./encodeDecode');

describe('Verifica se a função consegue codificar uma mensagem', () => {
  it('Verifica se encode e decode são funções', () => {
    expect(encode).toBeInstanceOf(Function);
    expect(decode).toBeInstanceOf(Function);
  });

  it('Verifica se a vogal a, é convertido em 1', () => {
    expect(encode('a')).toEqual('1');
  });

  it('Verifica se a vogal e, é convertido em 2', () => {
    expect(encode('e')).toEqual('2');
  });

  it('Verifica se a vogal i, é convertido em 3', () => {
    expect(encode('i')).toEqual('3');
  });

  it('Verifica se a vogal o, é convertido em 4', () => {
    expect(encode('o')).toEqual('4');
  });

  it('Verifica se a vogal u, é convertido em 5', () => {
    expect(encode('u')).toEqual('5');
  });

  it('Verifica se o número 1, é convertido em a', () => {
    expect(decode('1')).toEqual('a');
  });

  it('Verifica se o número 2, é convertido em e', () => {
    expect(decode('2')).toEqual('e');
  });

  it('Verifica se o número 3, é convertido em i', () => {
    expect(decode('3')).toEqual('i');
  });

  it('Verifica se o número 4, é convertido em o', () => {
    expect(decode('4')).toEqual('o');
  });

  it('Verifica se o número 5, é convertido em u', () => {
    expect(decode('5')).toEqual('u');
  });

  it('Verifica se somente as vogais são convertidas nos números desejados', () => {
    expect(encode('b')).not.toEqual('1');
  });

  it('Verifica se somente os números desejados são convertidas nas vogais esperadas', () => {
    expect(decode('6')).not.toEqual('a');
  });

  it('Verifica se a string passada tem o mesmo tamanho que a string retornada.', () => {
    expect(encode('thiago')).toHaveLength(6)
  });

  it('Verifica se a string passada tem o mesmo tamanho que a string retornada.', () => {
    expect(decode('th3ag4')).toHaveLength(6)
  });
});
