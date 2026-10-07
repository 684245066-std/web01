abstract class ShippingCalculator {
    constructor(public price: number, public weight: number) {}
}

class StandardShippingCalculator extends ShippingCalculator {
    constructor(price: number, weight: number, public shippingRate: number) {
        super(price, weight);
    }
    
    calculateShippingCost(): number {
        return this.price + this.weight * this.shippingRate;
    }
}

class ExpressShipping extends ShippingCalculator {
    constructor(price: number, weight: number, public shippingRate: number,public expressfee: number) {
        super(price, weight);
    }
    calculateTotal(): number {
        let total = this.price + this.weight * 20 * this.expressfee;
        return total;
    }
}
