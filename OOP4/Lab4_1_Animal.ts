class Animal {
    species: string;
    sound: string;
    constructor(species: string, sound: string) {
        this.species = species;
        this.sound = sound;
    }
    makeSound(): void {
        console.log(`The ${this.species} says "${this.sound}"`);
    }
}
const dog = new Animal("Dog", "Woof");
const cat = new Animal("Cat", "Meow");
dog.makeSound();
cat.makeSound();