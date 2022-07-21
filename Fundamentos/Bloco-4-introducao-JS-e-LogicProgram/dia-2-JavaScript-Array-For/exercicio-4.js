let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media, soma = 0;

for (let index = 0; index < numbers.length; index +=1){
    soma = soma + numbers[index];
}

media = soma / numbers.length;

if (media > 20) {
    console.log('Valor maior do que 20');
}
else {
    console.log('Valor menor ou igual a 20')
}
