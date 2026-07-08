class student {
    studentID: string;
    studentName: string;
    studentroom: string;
    studentGrop: string;

    constructor(studentID: string, studentName: string, studentroom: string, studentGrop: string) {
        this.studentID = studentID;
        this.studentName = studentName;
        this.studentroom = studentroom;
        this.studentGrop = studentGrop;
    }
    show(): void {
        console.log(`Student ID: ${this.studentID}, Student Name: ${this.studentName}, Student Room: ${this.studentroom}, Student Grop: ${this.studentGrop}`);
    }
    chgStudentRoom(newRoom: string): void {
        this.studentroom = newRoom;
    }
  }
const student1 = new student("684245066", "Ton", "Room 68/44", "Grop CS");
student1.show();
student1.chgStudentRoom("Room 68/45");
student1.show();