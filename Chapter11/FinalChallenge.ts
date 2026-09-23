export {};

abstract class Book {
    constructor(public title: string, public author: string, public isbn: string) {}
    abstract getBookType(): string;
}

class PrintedBook extends Book {
    constructor(title: string, author: string, isbn: string, public weightGrams: number) {
        super(title, author, isbn);
    }
    getBookType(): string {
        return `Printed Book (${this.weightGrams}g)`;
    }
}

class EBook extends Book {
    constructor(title: string, author: string, isbn: string, public fileSizeMB: number) {
        super(title, author, isbn);
    }
    getBookType(): string {
        return `E-Book (${this.fileSizeMB}MB)`;
    }
}

class Member {
    public borrowedBooks: Book[] = [];

    constructor(public memberId: string, public name: string) {}

    borrowBook(book: Book): void {
        this.borrowedBooks.push(book);
        console.log(`${this.name} borrowed: ${book.title} [${book.getBookType()}]`);
    }

    returnBook(isbn: string): void {
        const index = this.borrowedBooks.findIndex(b => b.isbn === isbn);
        if (index !== -1) {
            const returnedBook = this.borrowedBooks.splice(index, 1)[0];
            console.log(`${this.name} returned: ${returnedBook.title}`);
        } else {
            console.log(`Book with ISBN ${isbn} not found in borrowed list.`);
        }
    }
}

console.log("=== Final Challenge ===");
const book1 = new PrintedBook("Clean Code", "Robert C. Martin", "111-222", 800);
const book2 = new EBook("Mastering TypeScript", "Nathan Entis", "333-444", 15);

const member = new Member("M001", "Bob");
member.borrowBook(book1);
member.borrowBook(book2);
member.returnBook("111-222");