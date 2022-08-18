function hydrate(liquido) {
    let numbers = liquido.match(/\d+/g).map(Number);
    let soma = 0;
   
    for (let index = 0; index < numbers.length; index += 1){
        soma += numbers[index];
    }
  
    if (soma == 1) {
      return `${soma} copo de água`
    }
    else {
      return `${soma} copos de água`
    }
};
  
module.exports = hydrate;