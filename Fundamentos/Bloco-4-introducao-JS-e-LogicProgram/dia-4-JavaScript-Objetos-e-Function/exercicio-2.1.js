function verificaPalindromo(word) {
    let reverse = '';

    for(let letra = word.length - 1; letra >= 0; letra-=1) {
        reverse += word[letra];
    };


    if (word === reverse) {
        return true;
    }
    else {
        return false;
    }
};

console.log(verificaPalindromo('jabuti'))