export{};

abstract class PaymentGateway {
    protected tid: string;
    constructor(protected amount: number) {
        this.tid = "TXN-" + Math.floor(1000 + Math.random() * 9000);
    }
    abstract processPayment(): boolean;
    printReceipt(success: boolean): void {
        if (success) {
            console.log(`[Receipt] ใบเสร็จรับเงิน: ${this.tid} | จำนวนเงิน: $${this.amount} | สถานะ: ชำระเงินสำเร็จ`);
        } else {
            console.log(`[Receipt] ใบเสร็จรับเงิน: ${this.tid} | สถานะ: ชำระเงินไม่สำเร็จ | จำนวนเงิน: $${this.amount}`);
        }
    }
}

class CreditCardPayment extends PaymentGateway {
    constructor(amount: number, private cardNumber: string) {
        super(amount);
    }
    processPayment(): boolean {
        if (this.cardNumber.length === 16) {
            const last4 = this.cardNumber.slice(-4);
            console.log(`[CreditCard] ชาร์จ $${this.amount} จากบัตรเครดิตเรียบร้อยแล้ว ${last4}...`);
            return true;
        } else {
            console.log(`[CreditCard] หมายเลขบัตรไม่ถูกต้อง!`);
            return false;
        }
    }
}

class PromptPayPayment extends PaymentGateway {
    constructor(amount: number, private phoneNumber: string) {
        super(amount);
    }
    processPayment(): boolean {
        if (this.phoneNumber.length === 10) {
            console.log(`[PromptPay] กำลังสร้าง QR Code สำหรับ $${this.amount} (Phone: ${this.phoneNumber})...`);
            return true;
        } else {
            console.log(`[PromptPay] หมายเลขโทรศัพท์ไม่ถูกต้อง!`);
            return false;
        }
    }
}

// ทดสอบการทำงาน
console.log("=== Workshop 9.3 ===");
const gateways: PaymentGateway[] = [
    new CreditCardPayment(1500, "1234567890123456"),
    new CreditCardPayment(500, "1234"),
    new PromptPayPayment(350, "0812345678"),
    new PromptPayPayment(10000, "034109300")
];

gateways.forEach(gw => {
    const isSuccess = gw.processPayment();
    gw.printReceipt(isSuccess);
});