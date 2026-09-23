export {};

class BonusCalculator {
    calculateBonus(salary: number): number {
        if (salary < 20000) return salary * 0.05;
        if (salary <= 39999) return salary * 0.08;
        return salary * 0.10;
    }
}

class TaxCalculator {
    calculateTax(income: number): number {
        if (income <= 20000) return 0;
        if (income <= 40000) return income * 0.05;
        return income * 0.10;
    }
}

class Employee {
    private bonusCalculator: BonusCalculator;
    private taxCalculator: TaxCalculator;

    constructor(public name: string, public basicSalary: number) {
        this.bonusCalculator = new BonusCalculator();
        this.taxCalculator = new TaxCalculator();
    }

    calculateGrossSalary(): number {
        const bonus = this.bonusCalculator.calculateBonus(this.basicSalary);
        return this.basicSalary + bonus;
    }

    calculateNetSalary(): number {
        const gross = this.calculateGrossSalary();
        const tax = this.taxCalculator.calculateTax(gross);
        return gross - tax;
    }

    showPayslip(): void {
        const bonus = this.bonusCalculator.calculateBonus(this.basicSalary);
        const gross = this.calculateGrossSalary();
        const tax = this.taxCalculator.calculateTax(gross);
        const net = this.calculateNetSalary();

        console.log(`Basic Salary of ${this.name}: $ ${this.basicSalary}`);
        console.log(`Bonus: $ ${bonus}`);
        console.log(`Gross Salary: $ ${gross}`);
        console.log(`Tax: $ ${tax}`);
        console.log(`Net Salary: $ ${net}\n`);
    }
}

console.log("=== Assignment 1 (10.1) ===");
const apinya = new Employee("Apinya", 30000);
apinya.showPayslip();

const john = new Employee("John", 45000);
john.showPayslip();