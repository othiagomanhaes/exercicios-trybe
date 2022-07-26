function somaNumerodiminuindoUm(num) {
    let soma = 0;
    let total = 0;

    for (let index = 1; index <= num; index+=1) {
    
    if (index == 1) {
        soma = 5 + (num - index);
        total += soma;
    soma = 0;
    }
        else{
            soma = 0 + (num - index);
            total += soma;
            soma = 0;
        }
    }
    return console.log(total);
}

somaNumerodiminuindoUm(5)