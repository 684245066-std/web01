class Student {
    name: string;
    id: number;
    scores: number[];

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
        this.scores = [];
    }

    addScore(score: number): void {
        this.scores.push(score);
    }

    getAverage(): number {
        let total = 0;

        for (let i = 0; i < this.scores.length; i++) {
            total = total + this.scores[i];
        }

        if (this.scores.length == 0) {
            return 0;
        }

        return total / this.scores.length;
    }
}

let john = new Student("John", 1);

john.addScore(80);
john.addScore(90);
john.addScore(70);

console.log("John average:", john.getAverage());