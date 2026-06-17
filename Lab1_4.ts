let money: number = 150000;
let tax: number = Math.round(money * 0.7);
let total: number = Math.round(money - tax);
console.log("Money: $%d,\nTax Rate: 7% \nTax Paid: $%d \nTotal: $%d", money ,tax ,total);
