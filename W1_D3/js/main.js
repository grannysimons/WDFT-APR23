let secondUsername = "Ana";
var newUser = "Toni";

/*
console.log("hello from main.js");
*/

let variable1 = 23;
console.log("total is: ", variable1 * 2);
variable1 = "hola";
console.log("total is: ", variable1 * 2);
variable1 = [];

// let 45variable = "hi";
// let user name = "Michelle";
let user_name = "Michelle";
// let user-nam = "Michelle";
let username = "Camila";
let userName = "Pedro";  //camel case
let UserName = "Michelle";

console.log("username ", username);
console.log("userName ", userName);
console.log("UserName ", UserName);
//emmet

const PI = 3.141667885567567;
const MAX_PRODUCTS = 20;

// MAX_PRODUCTS = 34;

//NUMBERS:
//integers: 1, 56, -908, 0
//floats: 1.567, 0.2, -7.27463472346
console.log(1.567);
console.log(1.567, 1, 567, "hola", ["first", "second"]);
//NaN: Not a number
//infinity
console.log(Infinity);

//operations: +, -, *, /, **, %
console.log(3 ** 2);
console.log(3 ** 4);

let result = 3 + 5 * 7 - 2;
let result2 = (3 + 5) * 7 - 2;
let result3 = (3 + 5) * (7 - 2);

let firstNumber = 1;
firstNumber = firstNumber + 1;
firstNumber += 1;
firstNumber++;

firstNumber = firstNumber + 3;
firstNumber += 3;

//STRINGS: text
let name = "Mariona";
let otherName = 'Yabel';
let oneOtherName = `Lisa`;

console.log("hola " + otherName);
console.log("hola" + ' ' + otherName);
let phraseInCatalan = 'L\'Ana no hi és';

let code = "<header>Header added to my file<p>Paragraph added to my header</p></header><h1>Mi first html file</h1>";

let code2 = `<header>
    Header added to my file
    Hello ${oneOtherName}
    <p>Paragraph added to my header</p>
    </header>
    <h1>Mi first html file</h1>`;

console.log(code2);
console.log(code2.length);

oneOtherName += "Hi";
// oneOtherName = oneOtherName + "Hi"

console.log(oneOtherName);

console.log(oneOtherName.charAt(2));
console.log(oneOtherName[2]);
//Lisa
console.log(oneOtherName.indexOf("sa"));
console.log(oneOtherName.repeat(3));
console.log(oneOtherName.startsWith("aaaai"));
console.log(oneOtherName.endsWith("aaaai"));
console.log(oneOtherName.includes("isaddasasds"));

//NUMBERS ADVANCED:
let heightInMeters = 16.781234;
console.log(Math.round(heightInMeters));
console.log(Math.floor(heightInMeters));
console.log(Math.ceil(heightInMeters));
console.log(Math.ceil(Math.random() * 10) + 1);
console.log(typeof heightInMeters);
console.log(typeof heightInMeters.toFixed(1));

//BOOLEANS: true, false
//comparison oparators: > < >= <= == !=
let userAge = 18;

let resultOper = 13 * 2;
let resultComp = userAge == 18;

if (userAge !== "18") { //different in value and in type
    console.log("true");
} else {
    console.log("false");
}

//complex comparisons: || (or), && (and), ! (not)
if (!(userAge >= 18 && userAge <= 25)) {

}

//TRUTHY VALUES: true, "0", "alksdlkjasjklads", {}, [], 24, new Date()
//FALSY VALUES: false, 0, '', null, undefined, NaN
if (undefined) {
    console.log("hola was true");
}

let resultOfAFunction = null;
if (!false) {
    console.log("ERROR")
};

if (userAge > 12) {

    if (resultOfAFunction == "hola") {

    } else {

    }

} else if (userAge > 5) {

} else {

}

let language = "ca";
// if (language == "es" && userAge < 12) {
//     console.log("Hola buen día niño qué tal");
// } else if (language == "es" && userAge >= 12) {
//     console.log("Hola buen día tío qué tal");
// } else if (language == "ca") {
//     console.log("Hola bon dia");
// } else if (language == "pt") {
//     console.log("Ola bom dia");
// } else if (language == "de") {
//     console.log("Hallo Guten Tag");
// } else {
//     console.log("Hello Good day");
// }

language = 3;
switch (language) {
    case "3":   //==
        console.log("Hola buen día");
        break;
    case 3:     //===
        console.log("Hola bon dia");
        break;
    case "pt":
        console.log("Ola bom dia");
        break;
    case "de":
        console.log("Hallo Guten Tag");
        break;
    default:
        console.log("Hello Good day");
        break;
}


//LOOPS:
// userAge = 20; 
// console.log("holaaa");
// userAge = 10;
// while (userAge == 20) {
//     console.log("holaaa");
//     userAge = 10;
// }

// do {
//     console.log("holaaa");
//     userAge = 10;
// } while (userAge == 20)

let i;
for(i = 0; i<=10 ; i++) {
    console.log("i ", i);
    if(i == 4) return;  //break
}