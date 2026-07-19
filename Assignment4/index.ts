// Assignment 4.2 Part 1

function findLowStockItems(
    quantities: number[],
    threshold: number
): number[] {

    let lowStock: number[] = [];

    for (let i = 0; i < quantities.length; i++) {
        if (quantities[i] < threshold) {
            lowStock.push(quantities[i]);
        }
    }

    return lowStock;
}

let stock = [20, 5, 12, 8, 30];

console.log(
    "Low stock:",
    findLowStockItems(stock, 10)
);


// Assignment 4.2 Part 2

class Product {
    readonly id: number;
    name: string;
    price: number;
    quantity: number;

    constructor(
        id: number,
        name: string,
        price: number,
        quantity: number
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    sell(amount: number): void {
        if (amount > this.quantity) {
            console.log(
                "Error: Not enough stock for " + this.name
            );
        } else {
            this.quantity = this.quantity - amount;

            console.log(
                "Sold " + amount + " " + this.name
            );
        }
    }

    restock(amount: number): void {
        this.quantity = this.quantity + amount;

        console.log(
            this.name + " stock: " + this.quantity
        );
    }
}


// Assignment 4.2 Part 3 and Part 4

class Hero {
    name: string;
    hp: number;
    inventory: Product[];

    constructor(name: string, hp: number) {
        this.name = name;
        this.hp = hp;
        this.inventory = [];
    }

    addItem(item: Product): void {
        this.inventory.push(item);

        console.log(
            item.name + " added to " + this.name + "'s inventory"
        );
    }

    useItem(itemName: string): void {
        for (let i = 0; i < this.inventory.length; i++) {

            if (this.inventory[i].name == itemName) {

                this.inventory[i].quantity =
                    this.inventory[i].quantity - 1;

                console.log(
                    this.name +
                    " used " +
                    itemName +
                    ". Remaining: " +
                    this.inventory[i].quantity
                );

                if (this.inventory[i].quantity == 0) {
                    this.inventory.splice(i, 1);
                }

                return;
            }
        }

        console.log(itemName + " not found");
    }

    takeDamage(damage: number): void {
        this.hp = this.hp - damage;

        if (this.hp <= 0) {
            this.hp = 0;

            console.log(
                "Game Over: " + this.name + " has fallen!"
            );
        } else {
            console.log(
                this.name + " HP: " + this.hp
            );
        }
    }
}


// Test Product

let potion = new Product(1, "Potion", 50, 3);
let sword = new Product(2, "Sword", 200, 1);

potion.sell(1);
potion.restock(2);
potion.sell(10);


// Test Hero

let hero = new Hero("John", 100);

hero.addItem(potion);
hero.addItem(sword);

hero.useItem("Potion");
hero.useItem("Sword");
hero.useItem("Sword");

hero.takeDamage(30);
hero.takeDamage(80);