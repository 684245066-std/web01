export {};

class Product {
    constructor(public name: string, public price: number, public quantity: number) {}
    getSubtotal(): number {
        return this.price * this.quantity;
    }
}

class Order {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    calculateTotal(): number {
        let total = 0;
        this.products.forEach(p => {
            total += p.getSubtotal();
        });
        return total;
    }

    calculateDiscount(percent: number): number {
        const total = this.calculateTotal();
        return (total * percent) / 100;
    }

    calculateNetTotal(percent: number): number {
        const total = this.calculateTotal();
        const discount = this.calculateDiscount(percent);
        return total - discount;
    }
}

console.log("=== Workshop 10.3 ===");
const myOrder = new Order();
myOrder.addProduct(new Product("Notebook", 50, 3));
myOrder.addProduct(new Product("Pen", 10, 5));

const total = myOrder.calculateTotal();
const discount = myOrder.calculateDiscount(10);
const net = myOrder.calculateNetTotal(10);

console.log(`Total: ${total} Baht`);
console.log(`Discount (10%): ${discount} Baht`);
console.log(`Net Total: ${net} Baht`);