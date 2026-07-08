class Laptop{
    brand: string;
    price: number;

    constructor(b: string, p: number, c: string){
        this.brand = b;
        this.price = p;
        this.cpu = c;
    }

    show():void{
        console.log(`Laptop Brand: ${this.brand}, Price: ${this.price}, CPU: ${this.cpu}`);
    }
}
const Laptop1 = new Laptop("Dell",25000, "Intel i7");
Laptop1.show();
const Laptop2 = new Laptop("HP",30000, "AMD Ryzen 7");
Laptop2.show();