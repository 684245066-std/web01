class PaymentGateway {
    process(amount: number): void {
        console.log(`Processing standard payment of $${amount}`);
    }
}

class CreditCardPayment extends PaymentGateway {
    process(amount: number): void {
        console.log(`Processing CC... (Amount: $${amount})`);
    }
}

class PayPalPayment extends PaymentGateway {
    process(amount: number): void {
        console.log(`Redirecting to PayPal... (Amount: $${amount})`);
    }
}

function executePayment(p: PaymentGateway, amt: number): void {
    p.process(amt);
}
//ทดสอบเทส 1 2 3
console.log("=== Workshop 8.1 ===");
const ccPayment = new CreditCardPayment();
const ppPayment = new PayPalPayment();

executePayment(ccPayment, 1500);
executePayment(ppPayment, 850);