let fname: string = "Thanmongkhol";
let lname: string = "Singsatit";
let course: string = "Object-Oriented Programming";
let mark1: number = 80;
let mark2: number = 90;
let total: number = mark1 + mark2;
let pass: boolean = true;
console.log("Name: %s %s \nCourse: %s | Mark: %d | Pass: %s", fname,lname,course,total,pass);

let marks: number[] = [80, 90, 85];
let courses: string[] = ["Database", "Programming", "Web Development"];
console.log(courses[0], marks[0]);
console.log(courses[1], marks[1]);
console.log(courses[2], marks[2]);

console.log("\n");

let fname2: string = "Thanmongkhol";
let lname2: string = "Singsatit";
let age: number = 18;
let djob: string = "Programmer";
let total2: number = marks[0] + marks[1] + marks[2];
console.log("Name: %s %s\nAge: %d\nJob: %s \nTotal: %d", fname2, lname2, age, djob, total2/3);
