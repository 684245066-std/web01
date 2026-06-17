let fname: string = "Thanmongkhol"
let lname: string = "Singsatit"
let age: string = "Age 18"
let dreamjob: string = "Programer"
let course: string = "Object-oriented Progamming";
let mark: number = 18;
let pass: boolean = true;


console.log("Name: %s \nLastname: %s, \nAge: %s, \nDreamjob: %s \nCourse:, %s \nMark: %d",fname,lname,age,dreamjob,course,mark);
console.log("Pass: ",pass);
let courses: string[] = ["Database", "Programming", "Web"]
let marks: number[] = [75, 72, 81]; 
console.log(marks);
console.log("\n")
console.log(courses[0], marks[0]);
console.log(courses[1], marks[1]);
console.log(courses[2], marks[2]);

let total1: number = marks[0] + marks[1] + marks[2];
console.log("\nTotal Marks:" ,total1)

let total2: number = marks[0] + marks[1] + marks[2];
console.log("\nTotal Average:" ,total2/3);
