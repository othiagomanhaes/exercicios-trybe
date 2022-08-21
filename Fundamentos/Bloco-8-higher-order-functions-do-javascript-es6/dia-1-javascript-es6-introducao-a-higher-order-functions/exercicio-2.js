const checker = (numAposta, numRandom) => (numAposta === numRandom) ? 'Parabéns" Você acertou' : 'Errou! Tente novamente!'

const resultado = (aposta, check) => {
  let numRandom = Math.floor(Math.random() * 5 + 1);
  return check(aposta, numRandom);
};

console.log(resultado(2, checker));
