class Animal{
    constructor(public name: string) {}
    MakeSound():void{
        console.log(`${this.name} make a sound`);
    }
}
class Cat extends Animal{
    MakeSound():void{
        console.log(`${this.name} Moew`);
    }
}
class Dog extends Animal{
    MakeSound(): void {
        console.log(`${this.name} Hong`);
    }
}
const cat = new Cat("Rex")
cat.MakeSound();
const dog = new Dog("Whisker")
dog.MakeSound();
const zoo: Animal[] = [new Cat("Bee"), new Dog("Dang")];
zoo.forEach(animal => animal.MakeSound());