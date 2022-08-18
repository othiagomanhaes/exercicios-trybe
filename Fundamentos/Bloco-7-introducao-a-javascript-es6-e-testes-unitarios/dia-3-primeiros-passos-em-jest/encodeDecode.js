function encode(word) {
    let array = [];

    for (let index = 0; index < word.length; index += 1) {
        array.push(word[index]);
    }

    for (let ind = 0; ind < array.length; ind += 1) {
        if (array[ind] === 'a'){
          array[ind] = '1';
        }

        else if (array[ind] === 'e') {
          array[ind] = '2';
        }

        else if (array[ind] === 'i') {
          array[ind] = '3';
        }

        else if (array[ind] === 'o') {
          array[ind] = '4';
        }

        else if (array[ind] === 'u') {
          array[ind] = '5';
        }
    }

    return array.join('');
};

function decode(word) {
    let array = [];
  
    for (let index = 0; index < word.length; index += 1) {
      array.push(word[index]);
    }
    
    for (let ind = 0; ind < array.length; ind += 1) {
      if (array[ind] == '1'){
        array[ind] = 'a';
      }
  
      else if (array[ind] === '2') {
        array[ind] = 'e';
      }
  
      else if (array[ind] === '3') {
        array[ind] = 'i';
      }
  
      else if (array[ind] === '4') {
        array[ind] = 'o';
      }
  
      else if (array[ind] === '5') {
        array[ind] = 'u';
      }
    }
  
    return array.join('');
};

module.exports = {encode, decode};