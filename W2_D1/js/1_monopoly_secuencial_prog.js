/*                                            *
 *                                            *
 *    VERSIÓN 1: SECUENCIAL PROGRAMMING       *
 *                                            *
 *                                            */

let board = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

let player1_name = "Joaquim";
let player1_color = "red";
let player1_pos = 0;
let player1_cash = 1000;

let player2_name = "Maxence";
let player2_color = "blue";
let player2_pos = 0;
let player2_cash = 1000;

let player3_name = "Mostafa";
let player3_color = "black";
let player3_pos = 0;
let player3_cash = 1000;

let dice = 0;

//first turn:
dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);
player1_pos = (player1_pos + dice) % board.length;
player1_cash = player1_cash + board[player1_pos]
if(player1_cash < 0) console.log(`player 1 ${player1_name} lost`);
//second turn:
dice = Math.floor(Math.random() * 6) + 1;
player2_pos = (player2_pos + dice) % board.length;
player2_cash = player2_cash + board[player2_pos];
if(player2_cash < 0) console.log(`player 2 ${player2_name} lost`);