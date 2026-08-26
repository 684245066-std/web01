class Monster {
    constructor(public name: string, public health: number) {}
    
    attack(): void {
        console.log(`${this.name} uses a basic attack!`);
    }
}

class FireMonster extends Monster {
    attack(): void {
        console.log(`${this.name} uses Flamethrower! (Fire Effect 🔥)`);
    }
}

class WaterMonster extends Monster {
    attack(): void {
        console.log(`${this.name} uses Hydro Pump! (Water Effect 💧)`);
    }
}

class GrassMonster extends Monster {
    attack(): void {
        console.log(`${this.name} uses Solar Beam! (Grass Effect 🌿)`);
    }
}

function battleArena(monsters: Monster[]): void {
    console.log("--- Battle Begins! ---");
    monsters.forEach(monster => monster.attack());
}

// ทดสอบเทส 1 2 3
console.log("=== Assignment 8 ===");
const arenaMonsters: Monster[] = [
    new FireMonster("Charizard", 100),
    new WaterMonster("Blastoise", 120),
    new GrassMonster("Venusaur", 110)
];

battleArena(arenaMonsters);