const custo = 10 * 1.2;
const venda = 35;


if (custo > 0 && venda > 0) {
    let lucroMil = (venda - custo) * 1000;
    console.log(lucroMil)
}
else {
    console.log('Valores inválidos!')
}