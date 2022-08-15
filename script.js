function Book (title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead,
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
    }
}

const theHobbit = new Book ("The Hobbit", "Peter Parker", 295, "not read yet");

console.log(theHobbit.info());