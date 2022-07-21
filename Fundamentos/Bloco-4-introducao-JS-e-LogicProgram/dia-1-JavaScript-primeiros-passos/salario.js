let salarioBruto = 3000;
let salarioLiquido = null;


/*Desconto do INSS*/
if (salarioBruto < 1556.94) {
   salarioLiquido = salarioBruto - (salarioBruto * 0.08)
}
else if (2594.92 > salarioBruto && salarioBruto > 1556.94) {
    salarioLiquido = salarioBruto - (salarioBruto * 0.09)
}
else if (5189.82 > salarioBruto && salarioBruto > 2594.92) {
    salarioLiquido = salarioBruto - (salarioBruto * 0.11)
}
else if (salarioBruto > 5189.82) {
    salarioLiquido = salarioBruto - 570.88
}

/*Deconto do IR*/
if (salarioLiquido <= 1903.98) {
    console.log(salarioLiquido);   
}
else if (2826.65 >= salarioLiquido && salarioLiquido > 1903.98) {
    salarioLiquido = salarioLiquido - ((salarioLiquido * 0.075) - 142.80);
    console.log(salarioLiquido);
}
else if (3751.05 >= salarioLiquido && salarioLiquido > 2826.65) {
    salarioLiquido = salarioLiquido - ((salarioLiquido * 0.15) - 354.80);
    console.log(salarioLiquido);
}
else if (4664.68 >= salarioLiquido && salarioLiquido > 3751.05) {
    salarioLiquido = salarioLiquido - ((salarioLiquido * 0.225) - 636.13);
    console.log(salarioLiquido);
}
else if (salarioLiquido > 4664.68) {
    salarioLiquido = salarioLiquido - ((salarioLiquido * 0.275) - 869.36);
    console.log(salarioLiquido);
}
