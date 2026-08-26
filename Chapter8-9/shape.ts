class Shape {
    draw(): void {}
}

class Circle extends Shape {
    draw(): void {
        console.log("Draw a Circle");
    }
}

class Square extends Shape {
    constructor(public radius: number) {
        super();
    }

    draw(): void {
        console.log("Draw a Square");
    }

    area(): void {
        const area = Math.PI * Math.pow(this.radius, 2);
        console.log(`Area of Circle: ${this.radius} is ${area}`);
    }
}

const shapes: Shape[] = [new Circle(), new Square(7)];

shapes.forEach(shape => {
    shape.draw();
    if (shape instanceof Square) {
        shape.area();
    }
});