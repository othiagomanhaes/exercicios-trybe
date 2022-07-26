function maiorNomeNoArray(array) {
    let maiorPalavra = '';

    for (let index = 0; index < array.length; index+=1) {
        if (index == 0){
            maiorPalavra = array[index];
        }
        else if (maiorPalavra.length < array[index].length){
            maiorPalavra = array[index];
        }
    }
    return console.log(maiorPalavra);
}

maiorNomeNoArray(['José', 'Lucas', 'Nadia', 'Fernanda', 'Cairo', 'Joana']);