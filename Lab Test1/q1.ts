let age: number = 66;
let disc: boolean = true;
let Price: number = 0;
let discountPercent: number = 0;

if (age < 12) {
    Price = 60;
} else if (age >= 12 && age <= 59) {
    Price = 120;
} else {
    Price = 100;
}

if (disc) {
    discountPercent = 10;
} else {
    discountPercent = 0;
}

let discountAmount: number = (Price * discountPercent) / 100;
let netPrice: number = Price - discountAmount;

console.log(`คุณอายุ ${age} ปี ตั๋วราคาปกติ ${Price} บาท ได้รับส่วนลด ${discountPercent}% ราคาสุทธิ ${netPrice} บาท`);