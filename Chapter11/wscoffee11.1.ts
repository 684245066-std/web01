export {};

class Drink {
    constructor(public name: string, public price: number) {}
}

abstract class Payment {
    constructor(protected amount: number) {}
    abstract processPayment(): void;
}

class CashPayment extends Payment {
    processPayment(): void {
        console.log(`Processing Cash Payment of $${this.amount}`);
    }
}

class QRPayment extends Payment {
    processPayment(): void {
        console.log(`Processing QR Code Payment of $${this.amount}`);
    }
}

class Order {
    public drinks: Drink[] = [];
    constructor(public orderNumber: string, public date: string) {}

    addDrink(drink: Drink): void {
        this.drinks.push(drink);
    }

    calculateTotal(): number {
        let total = 0;
        this.drinks.forEach(d => total += d.price);
        return total;
    }
}

class Customer {
    constructor(public name: string) {}

    payForOrder(order: Order, paymentMethod: string): void {
        const total = order.calculateTotal();
        console.log(`${this.name} is paying for Order #${order.orderNumber} (Date: ${order.date})`);
        
        let payment: Payment;
        if (paymentMethod === "Cash") {
            payment = new CashPayment(total);
        } else {
            payment = new QRPayment(total);
        }
        payment.processPayment();
    }
}

console.log("=== Workshop 1 (Coffee Shop Design) ===");
const mocha = new Drink("Mocha", 80);
const latte = new Drink("Latte", 75);

const order1 = new Order("ORD-001", "2026-09-23");
order1.addDrink(mocha);
order1.addDrink(latte);

const john = new Customer("John");
john.payForOrder(order1, "QR");
console.log("");