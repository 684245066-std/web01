class WeatherStation {
    constructor(private _celsius: number) {}

    get fahrenheit(): number {
        return (this._celsius * 9 / 5) + 32;
    }

    set fahrenheit(value: number) {
        const convertedCelsius = (value - 32) * 5 / 9;

        if (convertedCelsius < -273.15) {
            console.error("Error: Temperature cannot be below Absolute Zero!");
        } else {
            this._celsius = convertedCelsius;
        }
    }
}

console.log("=== Test Workshop 6.2 ===");
const station = new WeatherStation(0);
console.log(`Initial Fahrenheit: ${station.fahrenheit}`);

station.fahrenheit = 104; 
console.log(`Updated Fahrenheit: ${station.fahrenheit}`);

station.fahrenheit = -500;
console.log("");