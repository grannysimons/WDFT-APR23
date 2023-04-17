/*                                            *
 *                                            *
 *    VERSIÓN 3: CLASSES AND OOP              *
 *                                            *
 *                                            */

//OOP = Object Oriented Programming
//Objects are created by using a "template" called CLASS

let board = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];
let dice = 0;

class Player {  //classes ALWAYS start with uppercase
    constructor(name, color) { //first method that is being called
        this.position = 0;
        this.color = color;
        this.cash = 1000;
        this.name = name;
    }
    move() {
        dice = Math.floor(Math.random() * 6) + 1;
        this.position = (this.position + dice) % board.length;
        this.cash = this.cash + board[this.position];
        this.displayInfo();
        this.checkLost();
    }
    displayInfo() {
        console.log(`${this.name} in position ${this.position} with cash ${this.cash}`);
    }
    checkLost() {
        if(this.cash < 0) console.log(`player 1 ${this.name} lost!`);
    }
}

let player1 = new Player("Joaquim", "red");
let player2 = new Player("Maxence", "blue");
let player3 = new Player("Mostafa", "black");
console.log("player1: ", player1);
console.log("player2: ", player2);
console.log("player3: ", player3);
player1.position = 34;
// player1.move = function(){
//     console.log("move");
// }

player1.move();
player2.move();
player3.move();
player1.move();
//...