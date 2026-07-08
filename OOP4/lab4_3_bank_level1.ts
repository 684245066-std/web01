class BankAccount {
    ownerName: string;
    balance: number;
    constructor(ownerName: string, initialBalance: number) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }
    displayBalance(): void {
        console.log(`Account: ${this.ownerName}, Balance: $${this.balance}`);
    }
}
const accountL1 = new BankAccount("Alice", 500);
accountL1.displayBalance(); 