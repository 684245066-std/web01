let bookTitle: string = "The TypeScript Handbook";
let isbn: string = "978-0-123456-78-9"; 
let price: number = 600;
let isAvailable: boolean = true;
let bookSummary: [string, number] = [bookTitle, price];
let discountPrice: number = price - (price * 0.15);
let isPremium: boolean = price > 500;
let canShowcase: boolean = isPremium && isAvailable;

console.log(`=== รายงานข้อมูลหนังสือ ===`);
console.log(`ชื่อหนังสือ: ${bookSummary[0]}`); 
console.log(`รหัส ISBN: ${isbn}`);
console.log(`ราคาปกติ: ${bookSummary[1]} บาท`);
console.log(`ราคาโปรโมชัน (ลด 15%): ${discountPrice} บาท`);
console.log(`เป็นหนังสือ Premium หรือไม่: ${isPremium}`);
console.log(`สถานะพร้อมยืม: ${isAvailable}`);
console.log(`สามารถจัดแสดงที่หน้าตู้โชว์ได้: ${canShowcase}`);
console.log(`=========================`);