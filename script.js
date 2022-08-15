let myLibrary = [];

addBookToLibrary = () => {
    let bookTitle = "The Hobbit";
    let bookAuthor = "J.R.R. Tolkien";
    let bookPages = 295;
    let bookIsRead = "not read yet";

    let newBook = Book(bookTitle, bookAuthor, bookPages, bookIsRead);

    myLibrary.push(newBook);
}

function displayBooks (myLibrary) {
    
}

function Book (title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead,
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
    }
}

console.log();