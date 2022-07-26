function MenorIndex(array) {
    let indexMenor, menorValor = 0;

    for (let index = 0; index < array.length; index+=1) {
        if (index == 0) {
            menorValor = array[index];
            indexMenor = index;
        }
        else if (menorValor > array[index]) {
            menorValor = array[index];
            indexMenor = index;
        }
    }
    return console.log('O menor valor é ' + menorValor + ' e o índice é ' + indexMenor + '.')
}

MenorIndex([2, 4, 6, 7, 10, 0, -3]);