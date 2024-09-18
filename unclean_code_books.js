// Verwende beschreibende Namen für Variablen
let books = [
  { id: 1, title: "Der alte Mann und das Meer", price: 10.5 },
  { id: 2, title: "Moby Dick", price: 12.3 },
  { id: 3, title: "1984", price: 8.5 },
];

// Benenne Funktionen nach ihrer Aufgabe
function getBookById(id) {
  return books.find(book => book.id === id) || null;
}

function addBook(title, price) {
  const maxId = Math.max(...books.map(book => book.id));
  books.push({ id: maxId + 1, title, price });
}

function listBooks() {
  books.forEach(book => console.log(`${book.title} - ${book.price}€`));
}

// Beispiel Funktionsaufrufe
const myBook = getBookById(2);
console.log(myBook);
addBook("Fahrenheit 451", 9.2);
listBooks();
