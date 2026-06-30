let library = ["JavaScript Basic", "TypeScript Easy", "HTML CSS"];
let targetBook = "TypeScript Easy";
let isFound = false;

for (let i = 0; i < 3; i++) {
    if (library[i] == targetBook) {
        isFound = true;
    }
}

console.log("Library Books");
for (let i = 0; i < 3; i++) {
    console.log(library[i]);
}

if (isFound == true) {
    console.log("Found: " + targetBook);
} else {
    console.log("Book not found");
}