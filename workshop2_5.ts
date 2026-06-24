let inventory: [string, number, number][] = [
    ["Laptop", 999.99, 10],
    ["Smartphone", 599.99, 25],
    ["Tablet", 299.99, 15],
    ["Monitor", 199.99, 20],
    ["Keyboard", 499.99, 30]
];

for (let product of inventory) {
    let name: string = product[0];
    let price: number = product[1];
    let qty: number = product[2];
    console.log(`Product: ${name}, Price: $${price}, Quantity: ${qty}`);
}