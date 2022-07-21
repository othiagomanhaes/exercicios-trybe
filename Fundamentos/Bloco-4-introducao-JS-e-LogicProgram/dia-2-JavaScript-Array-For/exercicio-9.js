let numeros = [];
let numerosDivididos = [];

for (index = 1; index <= 25; index+=1) {
    numeros.push(index);
}

for (index = 0; index < numeros.length; index+=1) {
    numerosDivididos.push(numeros[index]/2);
}
console.log(numerosDivididos)