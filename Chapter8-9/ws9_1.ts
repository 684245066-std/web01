abstract class Appliance {
    constructor(public brand: string) {}
    
    abstract turnOn(): void;
}

class WashingMachine extends Appliance {
    turnOn(): void {
        console.log(`${this.brand} Washing Machine: Filling water and spinning...`);
    }
}

class Refrigerator extends Appliance {
    turnOn(): void {
        console.log(`${this.brand} Refrigerator: Cooling system activated...`);
    }
}

// ทดสอบเทส 1 2 3
console.log("=== Workshop 9.1 ===");
const washer = new WashingMachine("Samsung");
const fridge = new Refrigerator("LG");
washer.turnOn();
fridge.turnOn();