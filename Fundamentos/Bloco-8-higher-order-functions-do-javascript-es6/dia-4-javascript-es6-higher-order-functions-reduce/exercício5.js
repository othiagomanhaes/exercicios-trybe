const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
  

//5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


function containsA(array) {

    const pegaA = array.reduce((acc, curr) => {
        for (let ind = 0; ind < curr.length; ind += 1) {
            if (curr[ind] === 'a' || curr[ind] === 'A') {
                acc += 1;
            }
        };
        return acc;
    }, 0);
    return pegaA;
};

console.log(containsA(names));
