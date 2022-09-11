const addBookButton = document.getElementById('addbookButton');
const libraryDiv = document.getElementById('libraryDiv');
const libraryDivBooks = document.getElementById('libraryDivBooks');
const form = document.getElementById('bookForm');
const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookPages = document.getElementById('bookPages');

window.addEventListener (
    'load', function () {
        addBookButton.addEventListener (
            'click', function (e) {
                e.preventDefault();

                const title = bookTitle.value;
                const author = bookAuthor.value;
                const pages = bookPages.value;
            
                if (title == "" || author == "" || pages == "") {
                    window.alert("Enter valid data!");
                }
                else {
                    const bookCardDiv = document.createElement('div');
                    const deleteDivButton = document.createElement('button');
            
                    bookCardDiv.classList.add('bookCard');
                    deleteDivButton.classList.add('deleteDivButton');
            
                    const bookTitleDiv = document.createElement('div');
                    const bookAuthorDiv = document.createElement('div');
                    const bookPagesDiv = document.createElement('div');
            
                    bookTitleDiv.classList.add('bookInput');
                    bookAuthorDiv.classList.add('bookInput');
                    bookPagesDiv.classList.add('bookInput');
            
                    bookTitleDiv.textContent = title;
                    bookAuthorDiv.textContent = author;
                    bookPagesDiv.textContent = pages;
                    deleteDivButton.textContent = "delete book";
            
                    bookCardDiv.appendChild(bookTitleDiv);
                    bookCardDiv.appendChild(bookAuthorDiv);
                    bookCardDiv.appendChild(bookPagesDiv);
                    bookCardDiv.appendChild(deleteDivButton);

                    libraryDivBooks.appendChild(bookCardDiv);
            
                    form.reset();

                    deleteDivButton.addEventListener (
                        'click', function () {
                            libraryDiv.removeChild(bookCardDiv);
                        }
                    );
                }
            }
        );
    }
);

