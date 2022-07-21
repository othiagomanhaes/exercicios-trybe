let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 0;

for (index = 0; index < numbers.length; index +=1) {
    if (index == 0){
        maior = numbers[index];
        menor = numbers[index];
    }  
    else if (menor > numbers[index]) {
        menor = numbers[index];
    }
}

console.log('O número menor é: ' + menor)
