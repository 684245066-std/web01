export {};

class Patient {
    constructor(public patientId: string, public name: string, public age: number) {}
}

class Doctor {
    constructor(public doctorId: string, public name: string, public specialty: string) {}
    diagnose(pt: Patient, dis: string): void {
        console.log(`Doctor: ${this.name} has diagnosed Patient ID: ${pt.patientId}, Name: ${pt.name}, Age: ${pt.age} with ${dis}.`);
    }

    prescribeMedicine(pt: Patient, med: string): void {
        console.log(`Doctor: ${this.name} has prescribed ${med} to Patient ID: ${pt.patientId}, Name: ${pt.name}, Age: ${pt.age}.`);
    }

    calculateTreatmentCost(pt: Patient, fee: number, medFee: number): void {
        const total = fee + medFee;
        console.log(`Doctor: ${this.name} has calculated the treatment cost for Patient ID: ${pt.patientId}, Name: ${pt.name}, Age: ${pt.age}. Total cost: ${total}`);
    }
}

console.log("=== Workshop 10.4+ (Extension) ===");
const drJohn = new Doctor("D02", "Dr. John", "Cardiology");
const drSmith = new Doctor("D03", "Dr. Smith", "Neurology");
const alice = new Patient("101", "Alice", 30);
const bob = new Patient("102", "Bob", 25);

drJohn.diagnose(alice, "หัวใจ");
drSmith.diagnose(bob, "ซึมเศร้า");
console.log("");

drJohn.prescribeMedicine(alice, "ยาลดความดัน");
drSmith.prescribeMedicine(bob, "ยาคลายเครียด");
console.log("");

drJohn.calculateTreatmentCost(alice, 1000, 500);
drSmith.calculateTreatmentCost(bob, 300, 150);