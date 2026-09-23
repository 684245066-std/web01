class University {
    students: Student[] = [];
    teachers: Teacher[] = [];
    
    constructor(students: Student[], teachers: Teacher[]) {
        this.students = students;
        this.teachers = teachers;
    }
    showUniversityInfo(): void {
        console.log("University Students Information:");
        console.log("Student: ");
        this.students.forEach(student => {
            console.log(` - ${student.getStudentInfo()}`);
        });
        console.log("University Teachers Information:");
        console.log("Teacher: ");
        this.teachers.forEach(teacher => {
            console.log(` - ${teacher.getTeacherInfo()}`);
        });
    }
}

class Student {
    constructor(private id: string, private name: string, private faculty: string) {}
    getStudentInfo(): string {
        return `Student ID: ${this.id}, Name: ${this.name}, Faculty: ${this.faculty}`;
    }
}

class Teacher {
    constructor(private name: string, private major: string) {}
    getTeacherInfo(): string {
        return `Teacher Name: ${this.name}, Major: ${this.major}`;
    }
    teach(student: Student): void {
        console.log(`${this.getTeacherInfo()} is teaching ${student.getStudentInfo()}`);
    }
}

const student1 = new Student("684245066", "Simon", "Science");
const student2 = new Student("684245067", "Alice", "Engineering");
const student3 = new Student("684245068", "Bob", "Business");
const teacher1 = new Teacher("Dr. Smith", "Mathematics");
const teacher2 = new Teacher("Dr. Johnson", "Physics");

const npru = new University([student1, student2, student3], [teacher1, teacher2]);
npru.showUniversityInfo();
console.log("--------------------------------");
teacher1.teach(student1);
teacher2.teach(student2);