class Product {
    constructor(
        private _name: string,
        private _price: number,
        private _stock: number
    ) {}

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value > 0) {
            this._price = value;
        } else {
            console.warn("Warning: Price must be greater than 0");
        }
    }

    get stock(): number {
        return this._stock;
    }

    set stock(value: number) {
        if (value >= 0) {
            this._stock = value;
        } else {
            console.warn("Warning: Stock cannot be negative");
        }
    }

    get inventoryValue(): number {
        return this._price * this._stock;
    }
}

console.log("=== Test Assignment 6 ===");
const item = new Product("Mechanical Keyboard", 850, 10);
console.log(`Initial Inventory Value: ${item.inventoryValue}`);

// ลองใส่ค่าที่ผิดเงื่อนไข
item.price = -100;
item.stock = -5;

// ใส่ค่าที่ถูกต้อง
item.price = 900;
item.stock = 5;
console.log(`Updated Inventory Value: ${item.inventoryValue}`);