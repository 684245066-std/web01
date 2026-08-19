class Shape {
    constructor(public color: string) {}
}

class Circle extends Shape {
    constructor(color: string, public radius: number) {
        super(color);
    }

    getArea(): number {
        return Math.PI * (this.radius ** 2);
    }
}

class Square extends Shape {
    constructor(color: string, public side: number) {
        super(color);
    }

    getArea(): number {
        return this.side ** 2;
    }
}

console.log("=== Test Workshop 7.2 ===");
const myCircle = new Circle("Red", 7);
console.log(`Circle Color: ${myCircle.color}`);
console.log(`Circle Area: ${myCircle.getArea()}`);

const mySquare = new Square("Blue", 10);
console.log(`Square Color: ${mySquare.color}`);
console.log(`Square Area: ${mySquare.getArea()}`);
console.log("");