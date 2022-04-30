// declare empty array for library
let myLibrary = [];

// object constructor 
// pinpoints each every trait of the book, such as title, author, pages and read or not read.
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // this.info = function () {
    //     return (title + " by " +  author + ", " + pages + " pages, " + read);
    // }
}

// function for adding a new book to the array
// what basically happens here is that, the user gives an input for the book, the addBookToLibrary function creates a new 
// instance of the Book function that separates the variables of the book from each other. This book(card) gets pushed into
// the array of myLibrary. This array of books, is now looped through in the displayBooksOnPage function. Here the for loop,
// loops through each and every book input given. The new div card is create that holds the information on the books, such as,
// title, author etc, now this card is added to the classList of cards, which is later in the next step added to the parent div,
// books. An other for loop, loops through every key and value of the objects present in the constructor to print the details,
// of the book on the screen in the card. 
function addBookToLibrary (title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooksOnPage () {
    const books = document.querySelector (".books");

    myLibrary.forEach (
        myLibrary => {
            const card = document.createElement ("div");
            card.classList.add ("card");
            books.appendChild(card);
            for (let key in myLibrary) {
                console.log (`${key}: ${myLibrary[key]}`);
                const para = document.createElement ("p");
                para.textContent = (`${key}: ${myLibrary[key]}`);
                card.appendChild (para);
                
            }
        }
    )   
}

// start event listener to add book to library.
const addBookButton = document.querySelector (".add-book-button");


// addBookToLibrary("the psychology of money", "morgan housel", "300", "read");
// addBookToLibrary("discrete mathematics", "v.k. balakrishnan", "361", "not read yet");
// addBookToLibrary("mathematical programming", "steven vajda", "290", "read");
// addBookToLibrary("methods of operations research", "philip m morse and george", "380", "not read yet");
// addBookToLibrary("the psychology of money", "morgan housel", "300", "read");
// addBookToLibrary("the psychology of money", "morgan housel", "300", "read");
// addBookToLibrary("the psychology of money", "morgan housel", "300", "read");

// console.log("End of array content", myLibrary);

// displayBooksOnPage();

// const book1 = new Book("life of turing", "alan turing", 245, "not read yet");
// console.log(book1.info());