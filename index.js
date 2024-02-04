const renderBooks = (books) => {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

const fetchBooks = () => {
  const gotApi = 'https://anapioficeandfire.com/api/books'
  return fetch(`${gotApi}`)
    .then(resp => resp.json())
    .then(books => renderBooks(books))
    .catch(err => console.error(err))

}
  document.addEventListener('DOMContentLoaded', function () {
    fetchBooks()
  });
