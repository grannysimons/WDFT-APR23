/*                                            *
 *                                            *
 *    VERSIÓN 1: LITERAL OBJECTS              *
 *                                            *
 *                                            */

//OOP: Objects are created literally

let board = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

let dice = 0;

let name = "asdadsdas";
let player1 = {
    name: "Joaquim",
    color: "red",
    position: 0,
    cash: 1000,
    move() {    //METHOD!!!
        dice = Math.floor(Math.random() * 6) + 1;
        this.position = (this.position + dice) % board.length;
        this.cash = this.cash + board[this.position];
        this.displayInfo();
        this.checkLost();
    },
    checkLost() {
        if(this.cash < 0) console.log(`player 1 ${this.name} lost!`);
    },
    displayInfo() {
        console.log(`${this.name} in position ${this.position} with cash ${this.cash}`);
    }
}
let player2 = {
    name: "Maxence",
    color: "blue",
    position: 0,
    cash: 1000,
    move() {    //METHOD!!!
        dice = Math.floor(Math.random() * 6) + 1;
        this.position = (this.position + dice) % board.length;
        this.cash = this.cash + board[this.position];
        this.displayInfo();
        this.checkLost();
    },
    checkLost() {
        if(this.cash < 0) console.log(`player 2 ${this.name} lost!`);
    },
    displayInfo() {
        console.log(`${this.name} in position ${this.position} with cash ${this.cash}`);
    }
}
let player3 = {
    name: "Mostafa",
    color: "black",
    position: 0,
    cash: 1000,
    move() {    //METHOD!!!
        dice = Math.floor(Math.random() * 6) + 1;
        this.position = (this.position + dice) % board.length;
        this.cash = this.cash + board[this.position];
        this.displayInfo();
        this.checkLost();
    },
    checkLost() {
        if(this.cash < 0) console.log(`player 3 ${this.name} lost!`);
    },
    displayInfo() {
        console.log(`${this.name} in position ${this.position} with cash ${this.cash}`);
    }
}

player1.move();
player2.move();
player3.move();
player1.move();
player2.move();
player3.move();
player1.move();
player2.move();
player3.move();
player1.move();
player2.move();
player3.move();
player1.move();
player2.move();
player3.move();
player1.move();
player2.move();
player3.move();
player1.move();
player2.move();
player3.move();