class Car {
  brand: string;
  model: string;
  type: string;
  doors: number;
  engine: number;

  constructor(brand: string, model: string, type: string, doors: number, engine: number) {
    this.brand = brand;
    this.model = model;
    this.type = type;
    this.doors = doors;
    this.engine = engine;
  }

  show(): void {
    console.log(`Car brand: ${this.brand}, Model: ${this.model}, Type: ${this.type}, Doors: ${this.doors}, Engine   : ${this.engine}`);
  }

  chgEngiene(newEngine: number): void {
    this.engine = newEngine;
    console.log(this.brand,this.model,": Engine changed to: ",this.engine);
  }
}

const car1 = new Car("Toyota", "Camry", "Sedan", 4, 3.5);
const car2 = new Car("Isuzu", "D-Max", "Truck", 5, 5.0);

car1.show();
car2.show();
car1.chgEngiene(4.0);
car1.show();