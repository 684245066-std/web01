export {};

enum CourseStatus {
    Open,
    Closed,
    Full
}

interface Student {
    id: number;
    name: string;
}

interface Course {
    title: string;
    code: string;
    status: CourseStatus;
}

function enroll(student: Student, course: Course): void {
    if (course.status == CourseStatus.Open) {
        console.log(`Enrollment success: ${student.name} joined ${course.code}`);
    } else {
        console.log(`Enrollment failed: ${course.code} is not open`);
    }
}

let s1: Student = {
    id: 1,
    name: "Somchai"
};

let c1: Course = {
    title: "TypeScript",
    code: "TS101",
    status: CourseStatus.Open
};

enroll(s1, c1);
