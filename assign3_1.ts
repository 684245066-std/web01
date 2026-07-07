export {};

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

let p1: Product = {
    id: 101,
    name: "Laptop",
    price: 25000,
    quantity: 10
};

function updateStock(product: Product, sold: number): void {
    if (sold > product.quantity) {
        console.log(`Order rejected: requested ${sold}, available ${product.quantity}`);
    } else {
        product.quantity = product.quantity - sold;
        console.log(`Order completed for ${product.name}`);
        console.log(`Remaining stock: ${product.quantity}`);
    }
}

updateStock(p1, 2);
updateStock(p1, 20);
