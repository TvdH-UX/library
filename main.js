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
const it = new Book('It', 'Stephen King', '600', false);
const mythos = new Book('Mythos', 'Stephen Fry', '350', true);
const harryPotter = new Book('Harry Potter', 'J.K. Rowling', '300', true);

myLibrary.push(it);
myLibrary.push(mythos);
myLibrary.push(harryPotter);

function addBookToLibrary(title, author, pages, read){
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  printBooks(myLibrary);
}

// Function which prints the books in the libary to the screen
function printBooks(array){
  let books = document.querySelector(".books");
  books.replaceChildren();
  array.forEach((book, index) => {
    // Generate card and add class
    let card = document.createElement('div');
    card.setAttribute("entry", index)
    card.classList.add('book-card');

    // Generate title 
    let bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;

    // Generate author
    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;

    // Generate pages
    let bookPages = document.createElement('p');
    bookPages.textContent = book.pages + " pages";

    // Generate read
    let bookRead = document.createElement('p');
    if (book.read === true){
      bookRead.textContent = "Read";
    } else {
      bookRead.textContent = "Not read";
    }

    // Generate read button
    let bookReadBtn = document.createElement('button');
    bookReadBtn.classList.add('read-book');
    bookReadBtn.textContent = "Read";

    // Generate delete button
    let bookDelete = document.createElement('button');
    bookDelete.classList.add('delete-book');
    bookDelete.textContent = "Delete"

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
  getReadBtns();
};

// Functions to add books with
const form = document.getElementById("book-form");
let title = document.getElementById("book-title").value;
let author = document.getElementById("book-author").value;
let pages = document.getElementById("book-pages").value;
let read;

let titleBook = document.getElementById("book-title");
let authorBook = document.getElementById("book-author");
let pagesBook = document.getElementById("book-pages");

const saveBookBtn = document.getElementById("form-add-book-btn");
saveBookBtn.addEventListener("click", handleBookSave);

function validateInput(){
  title = document.getElementById("book-title").value;
  author = document.getElementById("book-author").value;
  pages = document.getElementById("book-pages").value;
  if (title && author && pages){
    saveBookBtn.disabled = false;
  } else {
    saveBookBtn.disabled = true;
  }
}

titleBook.addEventListener('blur', validateInput);
authorBook.addEventListener('blur', validateInput);
pagesBook.addEventListener('blur', validateInput);

const addBookBtn = document.getElementById("btn-add-book");
addBookBtn.addEventListener("click", function() {
  document.querySelector(".form-popup-bg").style.display = 'flex';
});

function handleBookSave() {
  title = document.getElementById("book-title").value;
  author = document.getElementById("book-author").value;
  pages = document.getElementById("book-pages").value;
  read = document.getElementById("read-checkbox").checked;
  document.querySelector(".form-popup-bg").style.display = 'none';
  addBookToLibrary(title, author, pages, read);
  form.reset();
  saveBookBtn.disabled = true;
};

// Function to get delete buttons
function getDeleteBtns() {
  const deleteBookBtns = document.querySelectorAll(".delete-book");
  deleteBookBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const bookEntry = button.parentElement.getAttribute('entry');
      myLibrary.splice(bookEntry, 1);
      printBooks(myLibrary);
    })
  });
}

// Function to change read status
Book.prototype.changeReadStatus = function() {
  this.read = this.read ? false : true;
  printBooks(myLibrary);
}

// Function to get read buttons
function getReadBtns() {
  const readBookBtns = document.querySelectorAll(".read-book");
  readBookBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const bookEntry = button.parentElement.getAttribute('entry');
      myLibrary[bookEntry].changeReadStatus();
    })
  })
}

printBooks(myLibrary);