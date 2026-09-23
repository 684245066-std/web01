export {};

class Course {
    constructor(public code: string, public name: string, public credit: number) {}
}

class Student {
    constructor(public studentId: string, public name: string) {}
}

class Teacher {
    constructor(public name: string) {}

    // Association: ครูทำการประเมินนักเรียนในรายวิชาที่สอน
    evaluate(student: Student, course: Course, score: number): void {
        let grade = "F";
        if (score >= 80) grade = "A";
        else if (score >= 70) grade = "B";
        else if (score >= 60) grade = "C";
        else if (score >= 50) grade = "D";

        console.log(`Teacher: ${this.name}`);
        console.log(`Student: ${student.name}`);
        console.log(`Course: ${course.name}`);
        console.log(`Score: ${score}`);
        console.log(`Grade: ${grade}\n`);
    }
}

// === ทดสอบการทำงาน ===
console.log("=== Assignment 2 (10.2) ===");
const introProg = new Course("CS101", "Introduction to Computer Science", 3);
const alice = new Student("651001", "Alice");
const drSmith = new Teacher("Dr. Smith");

drSmith.evaluate(alice, introProg, 85);