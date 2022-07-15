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
const harryPotter = new Book(`Harry Potter and the Philosopher's Stone`, 'J.K. Rowling', '300', 'Yes');

myLibrary.push(it);
myLibrary.push(mythos);
myLibrary.push(harryPotter);
console.log(myLibrary)
if (myLibrary.some(book => book.title === 'Mythos')){
  console.log("Mythos is in library")
}

// Function which takes a user's input
// 
// Store the new book into the myLibrary array

function addBookToLibrary(){
  const title = prompt('What is the book called?');
  const author = prompt('Who is the author?');
  const pages = prompt('How many pages does it have?');
  const read = prompt('Have you read it already?');
  const book = new Book(title, author, pages, read);
  // Set data attribute to title?
  myLibrary.push(book);
  printBooks(myLibrary);
}

// Function which prints the books in the libary to the screen
function printBooks(array){
  let books = document.querySelector(".books");
  books.replaceChildren();
  array.forEach(book => {
    // Generate card and add class
    let card = document.createElement('div');
    card.setAttribute("title", book.title)
    card.classList.add('book-card');

    // Generate title 
    let bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;

    // Generate author
    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;

    // Generate pages
    let bookPages = document.createElement('p');
    bookPages.textContent = book.pages;

    // Generate read
    let bookRead = document.createElement('p');
    bookRead.textContent = book.read;

    // Generate read button
    let bookReadBtn = document.createElement('button');
    bookReadBtn.classList.add('read-book');
    bookReadBtn.textContent = "Read?";

    // Generate delete button
    let bookDelete = document.createElement('button');
    bookDelete.classList.add('delete-book');

    // Append card and content
    books.appendChild(card);
    // Set data attribute to title?
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookRead);
    card.appendChild(bookReadBtn);
    card.appendChild(bookDelete);
  });
  getDeleteBtns();
};

// Button to add book with
const addBookBtn = document.getElementById("btn-add-book");
addBookBtn.addEventListener("click", addBookToLibrary);

// Function to get delete buttons
function getDeleteBtns() {
  const deleteBookBtns = document.querySelectorAll(".delete-book");
  deleteBookBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const bookTitle = button.parentElement.getAttribute('title');
      const index = myLibrary.findIndex(e => e.title === bookTitle);
      myLibrary.splice(index, 1);
      printBooks(myLibrary);
    })
  });
}

// Book prototype change read status
Book.prototype.changeReadStatus = function() {
  console.log(this.read);
  this.read = "No";
  console.log(this.read);
  printBooks(myLibrary);
}

// Read book button
// function getReadBtns() {
//   const toggleReadBtns = document.querySelectorAll(".read-book");
//   toggleReadBtns.forEach((button) => {
//     button.addEventListener("click", this.changeReadStatus)
//   })
// }

printBooks(myLibrary);