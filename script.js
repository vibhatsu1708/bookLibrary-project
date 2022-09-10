// Array to store the objects 
let myLibrary = [];

// variable to reference the form
let bookForm = document.getElementById('bookForm');

function addBook (e) {
    // prevents the form submitting itself and resetting all the stored data.
    e.preventDefault();

    let book = {
        bookTitle: document.getElementById('bookTitle').value,
        bookAuthor: document.getElementById('bookAuthor').value,
        bookPages: document.getElementById('bookPages').value,
        bookRead: document.getElementById('bookRead').value
    }
    myLibrary.push(book);
    bookForm.reset();
    console.log({myLibrary});
}

document.addEventListener (
    "DOMContentLoaded", function () {
        document.getElementById('addbookButton').addEventListener("click", addBook);
    }
)

// function Book (title, author, pages, read) {
//     this.title = title,
//     this.author = author,
//     this.pages = pages,
//     this.read = read,
//     this.info = function () {
//         return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
//     }
// }

// const theHobbit = new Book ("The hobbit", "some writer", "295", "read");

// console.log(theHobbit.info());