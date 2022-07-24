let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior, menor = '';

for (let index = 0; index < array.length; index+=1) {

    if (index == 0) {
        maior = array[index];
        menor = array[index];
    }
    else if (maior.length < array[index].length) {
        maior = array[index];
    }

    if (menor.length > array[index].length) {
        menor = array[index];
    }
}

console.log('O maior no array é ' + maior);
console.log('O menor no array é ' + menor);
