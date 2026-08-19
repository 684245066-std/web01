class Character {
    constructor(public name: string, public health: number, public level: number) {}

    takeDamage(damage: number): void {
        this.health -= damage;
        
        if (this.health < 0) {
            this.health = 0;
        }
        console.log(`${this.name} took ${damage} damage! Remaining HP: ${this.health}`);
    }

    attack(): void {
        console.log(`${this.name} performs a basic attack.`);
    }
}

class Mage extends Character {
    constructor(name: string, health: number, level: number, public mana: number) {
        super(name, health, level);
    }

    attack(): void {
        console.log(`${this.name} uses Spell!`);
    }
}

class Warrior extends Character {
    constructor(name: string, health: number, level: number, public stamina: number) {
        super(name, health, level);
    }

    attack(): void {
        console.log(`${this.name} uses Sword!`);
    }
}

console.log("=== Test Assignment 7 ===");
const gandalf = new Mage("Gandalf", 100, 10, 50);
const aragorn = new Warrior("Aragorn", 150, 12, 100);

gandalf.attack();
aragorn.attack();

gandalf.takeDamage(30);
aragorn.takeDamage(45);