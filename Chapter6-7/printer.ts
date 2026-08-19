class Printer {
    print() {
        console.log("Printing...");
    }
}

class ColorPrinter extends Printer {
    print() {
        console.log("Printing in color...");
    }
}

const printer1 = new Printer();
printer1.print();

const colorPrinter1 = new ColorPrinter();
colorPrinter1.print();