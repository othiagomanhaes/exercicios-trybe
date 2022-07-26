function MaiorIndex(array) {
    let indexMaior, maiorValor = 0;

    for (let index = 0; index < array.length; index+=1) {
        if (index == 0) {
            maiorValor = array[index];
            indexMaior = index;
        }
        else if (maiorValor < array[index]) {
            maiorValor = array[index];
            indexMaior = index;
        }

        
    }
    return console.log('O maior valor é ' + maiorValor + ' e o índice é ' + indexMaior + '.')
}

MaiorIndex([2, 3, 6, 7, 10, 1]);


