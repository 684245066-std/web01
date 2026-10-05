import { BookDAO } from "./BookDAO.ts";
import { BorrowRecordDAO } from "./BorrowRecordDAO.ts";

const bookDAO = new BookDAO();
const borrowRecordDAO = new BorrowRecordDAO();

bookDAO.insert("101", "Clean Code", "Robert C. Martin");
bookDAO.insert("102", "TypeScript Master", "John Doe");
bookDAO.insert("103", "Design Patterns", "Gang of Four");

// ทำรายการยืมหนังสือ (เรียกใช้ผ่าน insert แทน borrowBook ตามสไตล์ของคุณ)
borrowRecordDAO.insert("Alice", "101");
borrowRecordDAO.insert("Bob", "101"); // ธุรกรรมนี้จะถูก Reject อัตโนมัติ เพราะ Alice ยืมไปแล้ว

const books = bookDAO.findAll();

books.forEach((b) => {
  console.log(b.getInfo());
});
