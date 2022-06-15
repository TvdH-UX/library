// Array which stores the books
let myLibrary = [];

// Constructor funtion to create new book entries with
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Example of a book being created with Book constructor
const it = new Book('It', 'Stephen King', '600', 'No');
const mythos = new Book('Mythos', 'Stephen Fry', '350', 'Yes');

myLibrary.push(it);
myLibrary.push(mythos);
console.log(myLibrary)

// Function which takes a user's input
// 
// Store the new book into the myLibrary array

function addBookToLibrary(){
  const title = prompt('What is the book called?');
  const author = prompt('Who is the author?');
  const pages = prompt('How many pages does it have?');
  const read = prompt('Have you read it already?');
  // console.log(title, author, pages, read);
  const book = new Book(title, author, pages, read);
  console.log(book);
  myLibrary.push(book);
  console.log(myLibrary);
}

