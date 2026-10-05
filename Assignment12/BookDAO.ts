import { book } from "./Book";
import { BaseDAO } from "./BaseDAO.ts";

export class BookDAO extends BaseDAO {
  protected iniTable(): void {
    this.db.exec(`
            CREATE TABLE IF NOT EXISTS books (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                isbn TEXT NOT NULL UNIQUE,
                title TEXT NOT NULL,
                author TEXT NOT NULL,
                isAvailable INTEGER NOT NULL
            )
        `);
  }

  public insert(isbn: string, title: string, author: string): boolean {
    const stmt = this.db.prepare(
      "INSERT INTO books (isbn, title, author, isAvailable) VALUES (?, ?, ?, ?)",
    );
    const result = stmt.run(isbn, title, author, 1);
    return result.changes > 0;
  }

  public findBookByIsbn(isbn: string): book | null {
    const stmt = this.db.prepare("SELECT * FROM books WHERE isbn = ?");
    const row = stmt.get(isbn) as
      | {
          id: number;
          isbn: string;
          title: string;
          author: string;
          isAvailable: number;
        }
      | undefined;

    if (!row) {
      return null;
    }

    let isAvail = false;
    if (row.isAvailable === 1) {
      isAvail = true;
    }
    return new book(row.id, row.isbn, row.title, row.author, isAvail);
  }

  public updateAvailability(isbn: string, isAvailable: boolean): boolean {
    let availNum = 0;
    if (isAvailable) {
      availNum = 1;
    }
    const stmt = this.db.prepare(
      "UPDATE books SET isAvailable = ? WHERE isbn = ?",
    );
    const result = stmt.run(availNum, isbn);
    return result.changes > 0;
  }

  public findAll(): book[] {
    const stmt = this.db.prepare("SELECT * FROM books");
    const rows = stmt.all() as {
      id: number;
      isbn: string;
      title: string;
      author: string;
      isAvailable: number;
    }[];

    return rows.map((row) => {
      let isAvail = false;
      if (row.isAvailable === 1) {
        isAvail = true;
      }
      return new book(row.id, row.isbn, row.title, row.author, isAvail);
    });
  }
}
