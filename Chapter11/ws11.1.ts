export {};

class MenuItem {
    constructor(private _name: string, private _price: number, private _category: string) {}
    get name(): string { return this._name; }
    get price(): number { return this._price; }
    get category(): string { return this._category; }
}

class Restaurant {
    constructor(public name: string, public menus: MenuItem[]) {}
}

class Order {
    private items: { item: MenuItem, quantity: number }[] = [];

    addItem(menuItem: MenuItem, quantity: number): void {
        this.items.push({ item: menuItem, quantity });
    }

    calculateTotal(): number {
        let total = 0;
        this.items.forEach(orderItem => {
            total += orderItem.item.price * orderItem.quantity;
        });
        return total;
    }

    showOrderDetails(): void {
        console.log("Order Details:");
        this.items.forEach(orderItem => {
            console.log(`${orderItem.quantity} x ${orderItem.item.name} $${(orderItem.item.price * orderItem.quantity).toFixed(2)}`);
            console.log(`${orderItem.item.category} = $${(orderItem.item.price * orderItem.quantity).toFixed(2)}`);
        });
    }
}

class Customer {
    constructor(public name: string) {}

    placeOrder(restaurant: Restaurant, order: Order): void {
        console.log(`${this.name} placed an order for:`);
        order.showOrderDetails();
        
        const total = order.calculateTotal();
        console.log(`Total: $${total.toFixed(2)}`);

        let netPrice = total;
        if (total > 500) {
            const discount = total * 0.01;
            netPrice = total - discount;
            console.log(`Net Price (1% Disc): $${netPrice.toFixed(2)}`);
        } else {
            console.log(`Net Price: $${netPrice.toFixed(2)}`);
        }
    }
}

console.log("=== Workshop 11.1 ===");
const pizza = new MenuItem("Pizza", 250, "Main Course");
const salad = new MenuItem("Salad", 150, "Appetizer");
const myRes = new Restaurant("Italiano", [pizza, salad]);

const myOrder = new Order();
myOrder.addItem(pizza, 2);
myOrder.addItem(salad, 1);

const alice = new Customer("Alice");
alice.placeOrder(myRes, myOrder);
console.log("");