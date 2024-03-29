//6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é representado dentro de um array. Então seu chefe pede que seja mudado o formato de array para objeto. Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro:

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (name, factory, age) => {
   return {
        name,
        factory,
        age,
    };
};

console.log(toObject(...palio));
console.log(toObject(...shelbyCobra));
console.log(toObject(...chiron));

