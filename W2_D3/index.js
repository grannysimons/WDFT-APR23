//THIS: context -> LITERAL OBJECTS

//FUNCTION DECLARATION
// -> THIS is what we have at the left side of the dot -> THIS DEPENDS ON THE MOMENT OF EXECUTING
//ARROW FUNCTION
// -> THIS inherits of the function where the arrow function is declared -> THIS DEPENDS ON THE DEFINITION

//RULE 90% CASES: BY DEFAULT, WHEN DEFINING LITERAL OBJECT METHODS: USE FUNCTION DECLARATION

let soldier = {
    strength: 10,
    health: 20,
    attack: () => { //ARROW FUNCTION -> THIS: the context inherits from the context of the FUNCTION where it is declared
        console.log(this);  //{}
        return this.strength;
    },
    receiveDamage: function(damage) {   //FUNCTION DECLARATION -> THIS: the object at the left side of the dot
        this.health -= damage;
        console.log(this); //soldier
    },
    ownWar: {
        name: "intern war",
        struggleWithOwnProblems: function() {   //FUNCTION DECLARATION: soldier.ownWar.struggleWithOwnProblems()
            console.log(this); //ownWar

            const calculateOwnProblems = () => {    //ARROW
                console.log("calculateOwnProblems ", this);  //ownWar   
            }
            calculateOwnProblems();

            const calculateOthersProblems = function () {   //FUNCTION DECLARAION
                console.log("calculateOthersProblems ", this); //Global Object
            }
            calculateOthersProblems();

            const mainProblem = {
                title: "understanding javascript",
                solveTheProblem: function(){    //FUNCTION DECLARATION
                    console.log("solveTheProblem ", this); //mainProblema
                },
                makingProblemWorse: () => { //ARROW FUNCTION
                    console.log("makinProblemWorse: ", this); //ownWar
                }
            }
            mainProblem.solveTheProblem();
            mainProblem.makingProblemWorse();
        }
    }
}
soldier.ownWar.struggleWithOwnProblems();

const getGrade = (student) => {
    return student.grade;
}

const getGrade2 = student => student.grade;

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
let price2 = 30;

price2 = price1; 

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
let book6 = {
    author: "Charlotte Bronte",
    editions: ["ed1", "ed2", "ed3", "ed4"]
}
console.log(book1.author == book6.author) ; //true
console.log(book1 == book6) ; //false

book6 = book1;

console.log(book1 == book6) ;   //true


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

let userName1 = "Pedro";
let userName2 = "Michelle";

userName2 = userName1;
/*
let userName1 = "Pedro";
let userName2 = "Pedro";
*/
userName1 = "Xavi";
/*
let userName1 = "Xavi";
let userName2 = "Pedro";
*/

let bookCopy1 = book3;  //NOT A GOOD WAY OF COPYING BECAUSE THEY POINT TO THE SAME OBJECT

/*
let book3 = {
    author: "Charlotte Bronte",
    editions: ["ed1", "ed2"] -> D5 editions[0], editions[1]
}
 */
let bookCopy = Object.assign({}, book3)    //SHALLOW COPY
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



let student1 = {
    name: "Toni",
    campus: "Barcelona",
    grades: [{
        lab: "recipes",
        grade: 8
    }, {
        lab: "basic-algorithms",
        grade: 7
    }, {
        lab: "array-methods",
        grade: 6
    }]
}

let studentCopy = Object.assign({}, student1);
console.log("student1: ", student1);
console.log("studentCopy: ", studentCopy);

student1.name = "Antoni";
studentCopy.grades[0].grade = 7;

console.log("student1: ", student1);
console.log("studentCopy: ", studentCopy);