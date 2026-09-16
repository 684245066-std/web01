class Student {
    constructor(public studentId: string,public name: string,public major: string) {}
    showInfo(): void {
        console.log(`รหัสนักเรียน: ${this.studentId}, ชื่อ: ${this.name}, สาขา: ${this.major}`);
    }
}
class Teacher {
    constructor(public teacherId: string,public name: string,public subject: string) {}
    showInfo(): void {
        console.log(`ครู: ${this.name}, วิชา: ${this.subject}`);
    }
    teach(student: Student): void {
        console.log(`ครู ${this.name} กำลังสอนวิชา ${this.subject}`);
        console.log(`รหัสนักเรียน: ${student.studentId}, ชื่อ: ${student.name}, สาขา: ${student.major}`);
    }
    giveGrade(student: Student, grade: string): void {
        console.log(`ครู ${this.name} ให้เกรด ${grade} แก่นักเรียนรหัส ${student.studentId} ชื่อ ${student.name}`);
    }
    assignHomework(student: Student, homework: string): void {
        console.log(`ครู ${this.name} มอบหมายการบ้าน "${homework}" ให้กับนักเรียนรหัส ${student.studentId} ชื่อ ${student.name}`);
    }
    calculateScore(student: Student,examScore: number,homeworkScore: number): void {
        const total = examScore + homeworkScore;
        console.log(`ครู ${this.name} คำนวณคะแนนของนักเรียนรหัส ${student.studentId} ชื่อ ${student.name} ได้คะแนนรวม: ${total} คะแนน`);
    }
}
const t1 = new Teacher("T01","ครูสมชาย","วิทยาศาสตร์");
const t2 = new Teacher("T02","ครูสมศรี","วิทยาการคอมพิวเตอร์");
const s1 = new Student("S01","นาคสิท","วิทยาศาสตร์");
const s2 = new Student("S02","นาคสิท","วิทยาการคอมพิวเตอร์");
const s3 = new Student("S03","นาคสิท","กฎหมายในชีวิตประจำวัน");
const s4 = new Student("S04","นาคสิท","วิทยาการจัดการ");
const s5 = new Student("S05","นาคสิท","อุตสาหกรรมเพื่อการบริการ");
t1.teach(s1);
t1.teach(s2);
t2.teach(s1);
t2.teach(s2);