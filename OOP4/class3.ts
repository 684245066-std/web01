class house {
    constructor(public rooms: number, public bathrooms: number, public area: number, public price: number) {
    }

    show():void{
        console.log(`House - : ${this.rooms}, bedrooms: ${this.bathrooms}, bathroom, ${this.area} sqm, ${this.price} Bath`);
    }
}
const house1 = new house(4, 3, 150, 1200000);
house1.show();