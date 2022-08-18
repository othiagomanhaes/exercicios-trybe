function techList(array, nome) {
  if (array.length <= 0) return 'Vazio!';
  const arrayOrdenado = array.sort();
  const listaTech = [];
  for (let ind = 0; ind < array.length; ind += 1) {
    listaTech.push({tech: array[ind], name: nome});
  }
  return listaTech;
};

console.log(techList(['HTML', 'CSS', 'JavaScript', 'BootStrap', 'Jest'], 'Thiago'));
module.exports = techList;
