class Employee {
    constructor(private _firstName: string, private _lastName: string) {}

    get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    set fullName(name: string) {
        const parts = name.split(" ");
        
        if (parts.length > 1) {
            this._firstName = parts[0];
            this._lastName = parts[1];
        } else {
            this._firstName = name;
            this._lastName = "";
        }
    }
}

console.log("=== Test Workshop 6.1 ===");
const emp1 = new Employee("Thanmongkhol", "Student");
console.log(`Initial Full Name: ${emp1.fullName}`);

emp1.fullName = "John Doe";
console.log(`Updated Full Name: ${emp1.fullName}`);
console.log("");