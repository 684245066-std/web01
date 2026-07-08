class BankAccountLevel2 {
    ownerName: string;
    balance: number;

    constructor(ownerName: string, initialBalance: number) {
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }

    displayBalance(): void {
        console.log(`Account: ${this.ownerName}, Balance: $${this.balance}`);
    }
    deposit(amount: number): void {
        this.balance += amount;
    }
    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
        }
    }
}
const accountL2 = new BankAccountLevel2("Bob", 500);

accountL2.deposit(200);
accountL2.displayBalance();

accountL2.withdraw(1000);
accountL2.displayBalance();