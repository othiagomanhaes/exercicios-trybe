const novoCadastro = (nome) => {
  let email = nome.toLowerCase().split(' ').join('_');
  return {nome, email: `${email}@trybe.com`};
};

const newEmployees = (action) => {
    const employees = {
      id1: action('Pedro Guerra'),
      id2: action('Luiza Drumond'),
      id3: action('Carla Paiva'),
    }
    return employees;
  };

  console.log(newEmployees(novoCadastro));
