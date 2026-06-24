let scores: number[] = [75, 85, 95, 64, 35];
let student: [number, string] = [1, "John Doe"];
console.log(`Score: ${scores.join(",")}`);
console.log(`Student ID: ${student[0]}, Name: ${student[1]}`);

let totalScore: number = 0;
for (let i: number = 0; i < scores.length; i++) {
    console.log(`Test ${i + 1} Score: ${scores[i]}`);
    totalScore += scores[i];
}

let averageScore: number = totalScore / scores.length;
console.log(`Total Score: ${totalScore}`);
console.log(`Average Score: ${averageScore}`);