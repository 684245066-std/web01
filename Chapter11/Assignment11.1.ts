export {};

abstract class TravelPackage {
    constructor(
        private _packageId: string,
        private _packageName: string,
        protected _basePrice: number,
        public destination: string
    ) {}

    get packageId(): string { return this._packageId; }
    get packageName(): string { return this._packageName; }
    get basePrice(): number { return this._basePrice; }

    abstract calculatePrice(people: number): number;
}

class OneDayTrip extends TravelPackage {
    calculatePrice(people: number): number {
        const total = this._basePrice * people;
        if (people >= 5) return total * 0.90; // ลด 10%
        return total;
    }
}

class OvernightTrip extends TravelPackage {
    constructor(id: string, name: string, price: number, dest: string, private _numberOfNights: number) {
        super(id, name, price, dest);
    }

    calculatePrice(people: number): number {
        const total = this._basePrice * people * this._numberOfNights;
        if (this._numberOfNights >= 3) return total * 0.85; // ลด 15%
        return total;
    }
}

class Customer {
    constructor(private _customerId: string, private _name: string, private _phone: string) {}
    get customerId(): string { return this._customerId; }
    get name(): string { return this._name; }
    get phone(): string { return this._phone; }
}

class BookingDetail {
    constructor(public travelerName: string, public age: number) {}
}

class Booking {
    public travelers: BookingDetail[] = [];

    constructor(public bookingId: string, public customer: Customer, public tripPackage: TravelPackage) {}

    addTraveler(name: string, age: number): void {
        this.travelers.push(new BookingDetail(name, age));
    }

    showBookingDetail(): void {
        console.log(`===== Booking Detail =====`);
        console.log(`Booking ID: ${this.bookingId}`);
        console.log(`Customer: ${this.customer.name}`);
        console.log(`Package: ${this.tripPackage.packageName}`);
        
        const names = this.travelers.map(t => t.travelerName).join(", ");
        console.log(`Travelers: ${this.travelers.length} (${names})`);
        
        const totalPrice = this.tripPackage.calculatePrice(this.travelers.length);
        console.log(`Total Price: ${totalPrice.toFixed(2)} Baht\n`);
    }
}

class TravelAgency {
    constructor(public name: string, public packages: TravelPackage[]) {}

    showOfferedPackages(): void {
        console.log(`===== Travel Packages =====`);
        this.packages.forEach((pkg, index) => {
            console.log(`${index + 1}. Package ID: ${pkg.packageId}, Name: ${pkg.packageName}, Destination: ${pkg.destination}, Base Price: $${pkg.basePrice.toFixed(2)}`);
        });
        console.log("");
    }
}

console.log("=== Assignment 11.1 ===");
const p1 = new OneDayTrip("P001", "City Tour", 100, "Bangkok");
const p2 = new OvernightTrip("P002", "Beach Getaway", 200, "Phuket", 3);

const agency = new TravelAgency("Sunset Travel", [p1, p2]);
agency.showOfferedPackages();

const alice = new Customer("C001", "Alice", "0812345678");
const booking1 = new Booking("B001", alice, p1); 
booking1.addTraveler("Alice", 30);
booking1.addTraveler("Bob", 28);
booking1.addTraveler("Carol", 35);
booking1.addTraveler("David", 32);
booking1.addTraveler("Eve", 29);

booking1.showBookingDetail();