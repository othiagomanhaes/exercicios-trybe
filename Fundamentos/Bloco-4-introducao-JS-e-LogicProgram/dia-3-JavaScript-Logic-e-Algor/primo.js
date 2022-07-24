let verifica = 0;
let primo = [];

for (let numero = 2; numero <= 50; numero+=1) {

    for (let divisor = 2; divisor < 50; divisor+=1) {

        if (numero % divisor == 0) {
            verifica = verifica + 1;
        } 
    }

    if (verifica == 1) {
        primo.push(numero);
    }
    
    verifica = 0;
}


console.log('O maior primo entre 2 e 50 é ' + primo[primo.length-1])
