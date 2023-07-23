// script.js
const books = [
    {
      title: "Book 1",
      author: "john doe",
      year: 2005
    },
    {
      title: "Book 2",
      author: "jane smith",
      year: 2015
    },
    {
      title: "Book 3",
      author: "sam brown",
      year: 2009
    },
    {
      title: "Book 4",
      author: "emma williams",
      year: 2012
    }
  ];
  
  function capitalizeAuthorName(author) {
    return author.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  
  function filterAndCapitalizeBooks(books) {
    const filteredBooks = books.filter(book => book.year >= 2010);
    const capitalizedBooks = filteredBooks.map(book => {
      return {
        title: book.title,
        author: capitalizeAuthorName(book.author),
        year: book.year
      };
    });
  
    return capitalizedBooks;
  }
  
  const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
  const table = document.querySelector('table');
  
  filteredAndCapitalizedBooks.forEach((book) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
    `;
    table.appendChild(row);
  });
  