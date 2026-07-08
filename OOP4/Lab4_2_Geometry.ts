class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
    area(): number {
        return (this.width * this.height) / 2;
    }
}
const myRectangle = new Rectangle(5, 10);
console.log(`Rectangle Area: ${myRectangle.getArea()}`);
console.log(`Rectangle Perimeter: ${myRectangle.getPerimeter()}`);
const myTriangle = new Rectangle(5, 10);
console.log(`Triangle Area: ${myTriangle.area()}`);