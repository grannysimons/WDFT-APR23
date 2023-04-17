class Animal {
    constructor(name, mainColor, sound) {
        this.name = name;
        this.mainColor = mainColor;
        this.sound = sound;
    }
    scream(intensity) {
        console.log(`${this.sound} ${"!".repeat(intensity)}`);
    }
}

let unix = new Animal("Unix", "black", "Meu");
console.log("unix: ", unix);
unix.scream(4);
unix.scream(50);

let gustavo = new Animal("Gustavo", "green", "croac");
console.log("gustavo: ", gustavo);
gustavo.scream(0);

class Cat extends Animal {
    constructor(name, mainColor) {
        // this.name = name;
        // this.mainColor = mainColor;
        // this.sound = "Meu";
        super(name, mainColor, "Meu");
        this.numberOfRats = 0;
    }
    eatRat() {
        this.numberOfRats ++;
        console.log(`${this.name} ate ${this.numberOfRats} rats`);
    }
}

class Dog extends Animal {
    constructor(name, mainColor) {
        super(name, mainColor, "Boof");
    }
}

let garfield = new Cat("Garfield", "orange", "Meu");
console.log("Garfield: ", garfield);
garfield.scream(4);
garfield.eatRat();
garfield.eatRat();
garfield.eatRat();
garfield.eatRat();