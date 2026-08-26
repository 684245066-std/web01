export{};

interface Taxable {
    applyTax(amount: number): number;
}

abstract class Worker {
    constructor(public name: string, public id: number) {}

    abstract calculatePay(): number;

    getDetails(): string {
        return `Name: ${this.name}`;
    }
}

class HourlyWorker extends Worker {
    constructor(name: string, id: number, private hourlyRate: number, private hoursWorked: number) {
        super(name, id);
    }

    calculatePay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}

class SalariedWorker extends Worker implements Taxable {
    constructor(name: string, id: number, private monthlySalary: number) {
        super(name, id);
    }

    calculatePay(): number {
        return this.monthlySalary;
    }

    applyTax(amount: number): number {
        return amount * 0.90;
    }
}

// ทดสอบการทำงาน
console.log("=== Assignment 9 ===");
const hourly = new HourlyWorker("Alice", 101, 300, 40);
console.log(hourly.getDetails());
console.log(`Hourly Gross Pay: $${hourly.calculatePay()}`);

const salaried = new SalariedWorker("Bob", 102, 50000);
console.log(salaried.getDetails());
const grossPay = salaried.calculatePay();
const netPay = salaried.applyTax(grossPay);
console.log(`Salaried Gross Pay: $${grossPay} | Net Pay: $${netPay}`);