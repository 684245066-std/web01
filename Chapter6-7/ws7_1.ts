class Staff {
    constructor(public name: string, public salary: number) {}

    getDetails(): void {
        console.log(`Name: ${this.name}, Salary: ${this.salary}`);
    }
}

class Manager extends Staff {
    constructor(name: string, salary: number, public department: string) {
        super(name, salary);
    }

    getDetails(): void {
        console.log(`Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`);
    }
}

console.log("=== Test Workshop 7.1 ===");
const stf = new Staff("Somchai", 15000);
stf.getDetails();

const mgr = new Manager("Somsri", 45000, "IT");
mgr.getDetails();
console.log("");