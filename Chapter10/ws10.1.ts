export {};

class Engine {
    constructor(public type: string) {}
    start(): void { console.log(`Engine ${this.type} started.`); }
    stop(): void { console.log(`Engine ${this.type} stopped.`); }
}

class Battery {
    constructor(public capacity: number) {}
    charge(): void { console.log(`Battery ${this.capacity} mAh charging.`); }
    showStatus(): void { console.log(`Battery status: Capacity is ${this.capacity} mAh.`); }
}

class Car {
    private engine: Engine;
    private battery: Battery;

    constructor(engineType: string, batteryCapacity: number) {
        this.engine = new Engine(engineType);
        this.battery = new Battery(batteryCapacity);
    }

    startCar(): void { this.engine.start(); }
    stopCar(): void { this.engine.stop(); }
    chargeBattery(): void { this.battery.charge(); }
    
    showCarInfo(): void {
        console.log(`Car information: Engine type: Engine { type: '${this.engine.type}' }`);
        this.battery.showStatus();
    }
}

console.log("=== Workshop 10.1 ===");
const myCar = new Car("V6", 20);
myCar.startCar();
myCar.showCarInfo();
myCar.chargeBattery();
console.log("Battery 100 mAh fully charged.");
myCar.stopCar();