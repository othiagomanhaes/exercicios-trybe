const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


const expected = [
    { name: 'Pedro Henrique', average: 7.8 },
    { name: 'Miguel', average: 9.2 },
    { name: 'Maria Clara', average: 8.8 },
];

function studentAverage(estudantes, notas) {
   return estudantes.map((estudante, index) => {
    return {
        name: estudante,
        average: notas[index].reduce( (acc, curr) => {
            return acc + curr
        }) / notas[index].length
    }
   });
};

console.log(studentAverage(students, grades));
