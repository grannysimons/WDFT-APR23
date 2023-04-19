//THIS: context -> LITERAL OBJECTS

//FUNCTION DECLARATION
// -> THIS is what we have at the left side of the dot -> THIS DEPENDS ON THE MOMENT OF EXECUTING
//ARROW FUNCTION
// -> THIS inherits of the function where the arrow function is declared -> THIS DEPENDS ON THE DEFINITION

//RULE 90% CASES: BY DEFAULT, WHEN DEFINING LITERAL OBJECT METHODS: USE FUNCTION DECLARATION

// let soldier = {
//     strength: 10,
//     health: 20,
//     attack: () => {
//         console.log(this);
//         return this.strength;
//     },
//     receiveDamage: function(damage) {
//         this.health -= damage;
//         console.log(this);  //soldier
//     },
//     ownWar: {
//         name: "intern war",
//         struggleWithOwnProblems: function() {
//             console.log(this.name);  //ownWar

//             const calculateOwnProblems = () => {
//                 console.log("calculateOwnProblems ", this);     //
//             }
//             calculateOwnProblems();

//             const calculateOthersProblems = function () {
//                 console.log("calculateOthersProblems ", this);  
//                 //1 - soldier -> 0
//                 //2 - ownWar -> 2
//                 //3 - {} -> 3
//                 //4 - Global object -> 9
//             }
//             calculateOthersProblems();

//             const mainProblem = {
//                 title: "understanding javascript",
//                 solveTheProblem: function(){
//                     console.log("solveTheProblem ", this);  //mainProblema
//                 },
//                 makingProblemWorse: () => {
//                     console.log("makinProblemWorse: ", this);   //onWar
//                 }
//             }
//             mainProblem.solveTheProblem();
//             mainProblem.makingProblemWorse();
//         }
//     }
// }

// // soldier.attack();
// // soldier.receiveDamage(5);
// soldier.ownWar.struggleWithOwnProblems();

//SCOPE: the "space of the code" where a variable is valid.
    //global -> let, var
    //funcion -> let, var
    //block -> only available for LET. VAR has not block scope

// let userName = "Pedro"; //global scope

// const registerUser = () => {
//     var userCountry = "Puerto Rico";    //function scope
//     // console.log("userName inside function ", userName);
//     // console.log("userCountry inside function ", userCountry);   //Puerto Rico
// }
// if(true) {
//     var userGrade = 8;
//     // console.log("userName inside block ", userName);
//     // console.log("userCountry inside block ", userCountry);  //NOT AVAILABLE
//     console.log("userGrade inside block ", userGrade);
// }
// console.log("userGrade outside block ", userGrade); //NOT AVAILABLE IF IT IS DEFINED AS LET
// registerUser();
// console.log("userName outside function ", userName);
// console.log("userCountry outside function ", userCountry);  //NOT AVAILABLE


//SHADOWING

// let userAge = 23;   //global scope
// const sendUserAge = () => {
//     let userAge = 10;   //SHADOWING
//     console.log(userAge);   //10
// }
// sendUserAge();
// console.log(userAge);   //23


// //HOISTING: Mechanism DECLARATION OF variables are brought at the top of the js file before executing the rest of the code

// //VAR OPERATOR
// x = 10; //ASSIGNATION
// console.log("x: ", x);  
// //1 - 10 -> 2
// //2 - undefined -> 3
// //3 - reference error -> 4
// var x;  //DECLARATION

// //LET OPERATOR
// y = 2;  //ASSIGNATION
// console.log("y ", y);
// // let y;  //DECLARATION -> LET variables are hoisted BUT HAVE NO UNDEFINED VALUE so it will throw an ERROR!!!

// const usName = "Mariona";
// // usName = "Michelle";



//BASIC DATA TYPES: IMMUTABLE / PRIMITIVES -> number, string, boolean
//compare values
//assignation values
let price1 = 20.99;
let price2 = 20.99;
console.log(price1 === price2); //true

let name1 = "Pepe";
let name2 = "Pepe";
console.log(name1 === name2);   //true

//NON BASIC DATA TYPES: MUTABLE / NON PRIMITIVES-> arrays, objects
//compare references    (direction in memory)
//assign references
let book1 = {
    author: "Charlotte Bronte",
    editions: ["ed1", "ed2", "ed3", "ed4"]
}
let book2 = {
    author: "William Shakespeare",
    editions: ["ed1", "ed2", "ed3", "ed4"]
}

console.log(book1.author == book2.author);    //false
console.log(book1.editions[0] == book2.editions[0]);    //false

book2 = book1;  //copies references
book1.author = "Stephen King";
book2.author = "Whatever";
console.log("book1: ", book1);
console.log("book2: ", book2);
console.log(book1 == book2); //true

let book3 = {
    author: "Charlotte Bronte",
    editions: ["ed1", "ed2"]
}
let book4 = {
    author: "William Shakespeare",
    editions: ["ed1", "ed2", "ed3", "ed4"]
}

book4 = Object.assign({}, book3)    //SHALLOW COPY
book4.editions[0] = "hola";
console.log("book4 ", book4);
console.log("book3 ", book3);

//JSON = "JS OBJECT NOTATION"
console.log(JSON.stringify(book4));
const book5 = JSON.parse(JSON.stringify(book4));    //DEEP COPY
book4.editions[1] = "anything";
console.log(book4);
console.log(book5);

const students = [{name: "Ana"}, 'John', 'Fabio'];

const newStudents = students.slice();   //SHALLOW COPY
const newStudents2 = [... students];    //SHALLOW COPY
const newStudents3 = JSON.parse(JSON.stringify(students));  //DEEP COPY
const nesStudents4 = students.map((student) => {    //SHALLOW COPY
    return student;
})
