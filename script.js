let bookTitle = document.getElementById('bookTitle');
let bookAuthor = document.getElementById('bookAuthor');
let bookPages = document.getElementById('bookPages');
let bookRead = document.getElementById('bookRead');
let library = document.getElementById('library');
let container = document.getElementById('container');

// Array to store the objects 
let myLibrary = [];

// variable to reference the form
let bookForm = document.getElementById('bookForm');

// function to take user input
function addBook (e) {
    // prevents the form submitting itself and resetting all the stored data.
    e.preventDefault();

    let book = {
        bookTitle: bookTitle.value,
        bookAuthor: bookAuthor.value,
        bookPages: bookPages.value,
        bookRead: document.querySelector('input[name="bookRead"]:checked').value
    }
    myLibrary.push(book);
    bookForm.reset();
    console.log({myLibrary});
    displayBook({myLibrary});
}

function displayBook ({myLibrary}) {
    for (let i=0; i<myLibrary.length; i++) {
        let para = document.createElement('p');
        para.textContent = JSON.stringify((myLibrary, '\t', 2) + '\n');
        para.classList.add('para');
        library.appendChild(para);
        container.appendChild(library);
    }
}

document.addEventListener (
    "DOMContentLoaded", function () {
        document.getElementById('addbookButton').addEventListener("click", addBook);
    }
)
