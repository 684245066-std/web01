import { BookDAO } from "./BookDAO.ts";
import { BorrowRecordDAO } from "./BorrowRecordDAO.ts";

const bookDAO = new BookDAO();
const borrowRecordDAO = new BorrowRecordDAO();

bookDAO.insert("101", "Clean Code", "Robert C. Martin");
bookDAO.insert("102", "TypeScript Master", "John Doe");
bookDAO.insert("103", "Design Patterns", "Gang of Four");

borrowRecordDAO.insert("Alice", "101");
borrowRecordDAO.insert("Bob", "101");

const books = bookDAO.findAll();

books.forEach((b) => {
  console.log(b.getInfo());
});
