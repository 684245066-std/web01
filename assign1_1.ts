let productName: string = "Mechanical Keyboard";
let pricePerUnit: number = 850;
let quantity: number = 2;
let isMember: boolean = false; 

let totalPrice: number = pricePerUnit * quantity;

let hasDiscount: boolean = totalPrice > 1000 || isMember;

let finalPrice: number = totalPrice;
if (hasDiscount) {
    finalPrice = totalPrice - (totalPrice * 0.10); 
}

console.log(`=== สรุปการสั่งซื้อ ===`);
console.log(`สินค้า: ${productName}`);
console.log(`จำนวนที่ซื้อ: ${quantity} ชิ้น`);
console.log(`ราคารวมทั้งหมด: ${totalPrice} บาท`);
console.log(`ได้รับส่วนลดหรือไม่: ${hasDiscount}`);
console.log(`ราคาที่ต้องจ่ายจริง: ${finalPrice} บาท`);
console.log(`======================`);