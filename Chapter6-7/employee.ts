export {};

class Employee {
    constructor(public name: string) {}
}

class Programmer extends Employee {
    constructor(name: string, public lang: string) {
        super(name);
    }
}

class Manager extends Employee {
    constructor(name: string, public dept: string) {
        super(name);
    }
}

console.log("=== ผลลัพธ์การทำงาน ===");

const emp1 = new Employee("ก้อย");
console.log(emp1.name);

const programmer1 = new Programmer("ป๊อป", "TypeScript");
console.log(programmer1.name);
console.log(programmer1.lang);

const manager1 = new Manager("ชานนท์", "IT");
console.log(`${manager1.name} ผู้จัดการแผนก ${manager1.dept}`);