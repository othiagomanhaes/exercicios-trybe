const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const mudaLesson2 = (objeto, chave, valor) => {
    objeto[chave] = valor;
}
mudaLesson2(lesson2, "turno", "noite");

// const listaKeys = objeto => {
//     return Object.keys(objeto);
// }
// console.log(listaKeys(lesson1));

// const tamanhoObjeto = objeto => {
//     let tamanho = Object.keys(objeto);
//     return tamanho.length;
// }
// console.log(tamanhoObjeto(lesson3));

// const valoresObjeto = objeto => {
//     return Object.values(objeto);
// }
// console.log(valoresObjeto(lesson2));

const allLessons = {
    lesson1: {},
    lesson2: {},
    lesson3: {},
};
Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);
// console.log(allLessons);


const totalEstudantes = objeto => {
   return allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
}

console.log(totalEstudantes(allLessons));

const pegaValor = (objeto, chave) => {
    let arrayObjeto = Object.values(objeto);
    return arrayObjeto[chave];
}

console.log(pegaValor(lesson2, 1));

const verificaChaveValor = (objeto, chave, valor) => {
    const array = Object.entries(objeto);
    let contem = false;
    for(let ind in array) {
        if (array[ind].includes(valor, chave))
            contem = true;        
    }
    return contem;
}
console.log(verificaChaveValor(lesson1, 'materia', 'Matemática'));