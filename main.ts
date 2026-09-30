import { StudentDAO } from "./StudentDAO.ts";
const studentDAO = new StudentDAO();

studentDAO.insert("STD-001", "Somchai Jaidee", 3.85);
studentDAO.insert("STD-002", "Somsri Deeja", 3.20);
studentDAO.insert("STD-003", "Somnuek Jaidee", 3.50);
studentDAO.insert("STD-004", "Somying Deeja", 3.10);

const students = studentDAO.findAll();

students.forEach(s => {
    console.log(s.getInfo());
});