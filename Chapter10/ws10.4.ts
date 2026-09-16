export {};

class Patient {
    constructor(public patientId: string, public name: string, public age: number) {}
    
    showInfo(): void {
        console.log(`Patient ID: ${this.patientId}, Name: ${this.name}, Age: ${this.age}`);
    }
}

class Doctor {
    constructor(public doctorId: string, public name: string, public specialty: string) {}

    showInfo(): void {
        console.log(`Doctor: ${this.name}`);
        console.log(`Specialty: ${this.specialty}`);
    }

    examine(patient: Patient): void {
        console.log(`Doctor: ${this.name} Speciality: ${this.specialty} is examining`);
        console.log(`Patient ID: ${patient.patientId}, Name: ${patient.name}, Age: ${patient.age}`);
    }
}

console.log("=== Workshop 10.4 ===");
const drSomchai = new Doctor("D01", "Dr. Somchai", "Orthopedics");
const anan = new Patient("65001", "Anan", 25);

drSomchai.showInfo();
console.log(`Patient: ${anan.patientId} ${anan.name} (Age: ${anan.age})`);
console.log(`${drSomchai.name} is examining ${anan.name}.\n`);

const drJohn = new Doctor("D02", "Dr. John", "Cardiology");
const drSmith = new Doctor("D03", "Dr. Smith", "Neurology");
const alice = new Patient("101", "Alice", 30);
const bob = new Patient("102", "Bob", 25);

drJohn.examine(alice);
drJohn.examine(bob);
drSmith.examine(alice);