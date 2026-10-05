import { borrowRecord } from "./borrowRecord";
import { BaseDAO } from "./BaseDAO.ts";
import { BookDAO } from "./BookDAO.ts";

export class BorrowRecordDAO extends BaseDAO {
  private bookDao: BookDAO;

  constructor() {
    super();
    this.bookDao = new BookDAO();
  }

  protected iniTable(): void {
    this.db.exec(`
            CREATE TABLE IF NOT EXISTS borrow_records (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                borrowerName TEXT NOT NULL,
                bookIsbn TEXT NOT NULL,
                borrowDate TEXT NOT NULL
            )
        `);
  }

  // ใช้คำว่า insert ตามสไตล์ของคุณ แต่ใส่ Business Logic ของการยืมหนังสือไว้ภายใน
  public insert(borrowerName: string, isbn: string): boolean {
    const b = this.bookDao.findBookByIsbn(isbn);

    if (!b) {
      return false;
    }
    if (!b.getIsAvailable()) {
      return false;
    }

    const dateNow = new Date().toISOString().split("T")[0];
    const stmt = this.db.prepare(
      "INSERT INTO borrow_records (borrowerName, bookIsbn, borrowDate) VALUES (?, ?, ?)",
    );
    const result = stmt.run(borrowerName, isbn, dateNow);

    if (result.changes > 0) {
      this.bookDao.updateAvailability(isbn, false);
      return true;
    }
    return false;
  }
}
