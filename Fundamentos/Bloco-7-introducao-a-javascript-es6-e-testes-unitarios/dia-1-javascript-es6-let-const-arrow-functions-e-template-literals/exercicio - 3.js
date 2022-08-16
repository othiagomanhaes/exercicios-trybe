const fatorial = num => {
    for(let ind = num; ind > 2; ind -= 1) {
        num = num * (ind-1);
    }
    return `Este é o fatorial: ${num}.`
}
 console.log(fatorial(3));

