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

    // Generate read
    let bookDelete = document.createElement('button');
    bookDelete.classList.add('delete-book');

    // Append card and content
    books.appendChild(card);
    // Set data attribute to title?
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookRead);
    card.appendChild(bookDelete);
    getDeleteBtns();
  });
};

// Button to add book with
const addBookBtn = document.getElementById("btn-add-book");
addBookBtn.addEventListener("click", addBookToLibrary);

// Function to get delete buttons
function getDeleteBtns() {
  const deleteBookBtns = document.querySelectorAll(".delete-book");
  deleteBookBtns.forEach((button) => {
    button.addEventListener("click", () => {
      // console.log(button.parentElement.getAttribute('title'))
      const bookTitle = button.parentElement.getAttribute('title');
      console.log(bookTitle);

      const index = myLibrary.findIndex(e => e.title === bookTitle);
      console.log(index);

      myLibrary.splice(index, 1);

      printBooks(myLibrary);
    })
  });
}

printBooks(myLibrary);