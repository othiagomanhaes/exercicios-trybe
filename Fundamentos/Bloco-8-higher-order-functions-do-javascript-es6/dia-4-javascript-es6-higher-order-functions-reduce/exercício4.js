const books = [
    {
      id: 1,
      book: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        book: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      book: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        book: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      book: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        book: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      book: 'Duna',
      genre: 'Ficção Científica',
      author: {
        book: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      book: 'A Coisa',
      genre: 'Terror',
      author: {
        book: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      book: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        book: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
];

  
// 4- Encontre o livro com o maior nome.


function longestNamedBook(livros) {
  const LivroMaiorNome = livros.reduce((acc, elemento) => {
    if (acc['book'].length > elemento['book'].length) {
      return acc
    } else {
      return elemento
    }
  })

  return LivroMaiorNome;
};

console.log(longestNamedBook(books));

