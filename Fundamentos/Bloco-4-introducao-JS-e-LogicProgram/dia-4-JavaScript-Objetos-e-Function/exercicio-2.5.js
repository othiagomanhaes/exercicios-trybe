function maisSeRepetenoArray(array) {
    let contaIgual = 0;
    let vezesIgual = 0;
    let repetido = 0;

    for (let index = 0; index < array.length; index+=1){

        for (let index2 = 0; index2 < array.length; index2+=1) {

            if (array[index] == array[index2]) {
                contaIgual += 1;
                
            }
        }

        if (index == 0) {
            repetido = array[index];
            vezesIgual = contaIgual;
        }
        else if (contaIgual > vezesIgual) {
            vezesIgual = contaIgual;
            repetido = array[index];
        }
        contaIgual = 0;
    }
    return console.log(repetido);
}
maisSeRepetenoArray([2, 3, 2, 5, 8, 2, 3]);
