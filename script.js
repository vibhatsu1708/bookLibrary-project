function Book (title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
    }
}

const theHobbit = new Book ("The hobbit", "some writer", "295", "read");

console.log(theHobbit.info());