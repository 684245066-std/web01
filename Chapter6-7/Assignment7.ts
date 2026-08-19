export {};
class Book {
    constructor(
        public title: string,
        public author: string,
        public price: number,
        public stock: number
    ) {}

    sellBook(quantity: number): void {
        if (quantity > this.stock) {
            console.log(`สินค้า ${this.title} มีจำนวนไม่พอ (คงเหลือ: ${this.stock} เล่ม)`);
            return;
        }
        
        this.stock -= quantity;
        const totalPrice = this.price * quantity;
        
        console.log(`รายการขาย: ${this.title} จำนวน ${quantity} เล่ม`);
        console.log(`ยอดเงินที่ต้องชำระ: ${totalPrice} บาท (สต็อกคงเหลือ: ${this.stock} เล่ม)\n`);
    }
}

class EBook extends Book {
    constructor(
        title: string,
        author: string,
        price: number,
        public fileSize: number,
        public downloadLink: string
    ) {
        super(title, author, price, 0);
    }

    sellBook(quantity: number): void {
        const totalPrice = this.price * quantity;
        
        console.log(`รายการขาย E-Book: ${this.title} จำนวน ${quantity} ไฟล์`);
        console.log(`ยอดเงินที่ต้องชำระ: ${totalPrice} บาท`);
        console.log(`ดาวน์โหลดได้ที่: ${this.downloadLink}\n`);
    }
}

class PrintedBook extends Book {
    constructor(
        title: string,
        author: string,
        price: number,
        stock: number,
        public weight: number,
        public shippingCost: number
    ) {
        super(title, author, price, stock);
    }

    sellBook(quantity: number): void {
        if (quantity > this.stock) {
            console.log(`สินค้า ${this.title} มีจำนวนไม่พอ (คงเหลือ: ${this.stock} เล่ม)`);
            return;
        }

        this.stock -= quantity;
        const totalPrice = (this.price * quantity) + this.shippingCost;
        
        console.log(`รายการขายหนังสือเล่ม: ${this.title} จำนวน ${quantity} เล่ม`);
        console.log(`ยอดเงินที่ต้องชำระ (รวมค่าจัดส่ง ${this.shippingCost} บาท): ${totalPrice} บาท (สต็อกคงเหลือ: ${this.stock} เล่ม)\n`);
    }
}

console.log("=== BookStore Inventory System ===");

// 1. ทดสอบหนังสือปกติ
const basicBook = new Book("TypeScript Basic", "Guide Doe", 300, 10);
basicBook.sellBook(2);

// 2. ทดสอบหนังสือ E-Book
const myEBook = new EBook("Mastering OOP", "Ice Smith", 250, 15.5, "https://bookstore.com/download/oop");
myEBook.sellBook(1);

// 3. ทดสอบหนังสือรูปเล่ม
const physicalBook = new PrintedBook("Clean Code", "Uncle Virun", 500, 5, 1.2, 40);
physicalBook.sellBook(2);