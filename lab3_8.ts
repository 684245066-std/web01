export {};

enum BookGenre {
    Action,
    Comedy,
    Drama,
    SciFi
}

interface Book {
    title: string;
    author: string;
    genre: BookGenre;
}

let b1: Book = {
    title: "Dune",
    author: "Frank Herbert",
    genre: BookGenre.SciFi
};

let b2: Book = {
    title: "The Hobbit",
    author: "Tolkien",
    genre: BookGenre.Drama
};

function printBook(book: Book): void {
    if (book.genre == BookGenre.SciFi) {
        console.log(`Sci-Fi Book: ${book.title}`);
        console.log(`Written by: ${book.author}`);
    }
}

printBook(b1);
printBook(b2);
