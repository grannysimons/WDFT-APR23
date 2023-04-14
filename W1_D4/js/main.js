//FUNCTIONS

//DRY = Don't repeat yourself
//KISS = Keep it simple, stupid!

//FUNCTION DECLARATION
function sayHello() {
    console.log("hello!");
}

//FUNCTION CALL, FUNCTION EXECUTION, FUNCTION INVOCATION
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();

function sayHelloToMichelle() {
    console.log("hello Michelle!");
}
function sayHelloErika() {
    console.log("hello Erika!");
}
function sayHelloYabel() {
    console.log("hello Yabel!");
}
function sayHelloGeneric(studentName) { //studentName is a parameter
    console.log(`hello ${studentName}!`);
}

sayHelloToMichelle();
sayHelloErika();
sayHelloYabel();

sayHelloGeneric("Michelle");    //"Michelle" is an argument
sayHelloGeneric("Erika");
sayHelloGeneric("Yabel");

function sendEmailTo(name) {
    //send email to name

}
function userExists(name) {
    //call a database with name
    return true;
}

function genericFunc(func) {
    console.log("---- start of generic function");

    if(func) {
        func();
    }
    else {
        console.log("func does not exist");
    }

    // if(func) func();
    // else console.log("func does not exist");

    console.log("---- end of generic function");
}

genericFunc();
genericFunc(sayHelloErika);
genericFunc(sayHelloToMichelle);

//procedure
//obtaining results

function getHelloToMichelle() {
    return "hello michelle!";
}

let helloSentence = getHelloToMichelle();


function checkValidAge(age) {
    if(age >= 18) {
        // console.log("user prepared for registering");
        return true;
    } else {
        // console.log("user cannot register");
        return false;
    }
}

//obtaining form data
let age = 12;
let validUser = checkValidAge(age);
if(validUser) {
    //send user to facebook database
    //send email to user
    //show message in browser
} else {
    //show an error message in the browser
}

checkValidAge(25);

sayHelloYabel();
function getHelloYabel() {
    return "Hello Yabel!";
}
let helloText = getHelloYabel();
console.log(helloText);
// sendEmailTo(helloText);
// sendToDatabase(helloText);

// document.getElementById("header").innerHTML = helloText;    //DOM Manipulation

//ARRAYS: list ("MATRIX", ARREGLOS)
let students = ["Michelle", "Lisa", "Xavi", "Toni", "Erika"];
let grades = [7,9,5,2,7];
let randomValues = [54, "hola", {}, undefined, [], students];

//0-based: first position is position 0
console.log(students[1]);
console.log(grades[4]);
console.log(grades.length);
console.log(grades[23]);
grades.push(10);
console.log(grades);
grades.unshift(3);
console.log(grades);
let removedElement = grades.shift();
console.log(grades);
console.log("removed element was ", removedElement);
let newRemovedElement = grades.pop();
console.log(grades);
console.log("removed element was ", newRemovedElement);
grades.splice(1, 2, "hello", 234);
console.log(grades);

for(let i=0; i<grades.length; i++) {
    console.log(grades[i]);
}
//inside a for loop we can redeclare let i (next tuesday we'll see why!!!!!!) -> SCOPE
for(let i=grades.length-1; i>=0; i--) {
    console.log(grades[i]);
}

console.log("----- using a forEach loop:");
grades.push(5);
grades.push(19);
grades.push(20);
grades.push(23);
grades.forEach(function(grade) {
    console.log(grade);
    //grade ---> grades[i]
});

// console.log("before first setTimeout");
// setTimeout(function(){
//     console.log("hello from setTimeout after 1 second");
// }, 1000);
// console.log("after first setTimeout");

// setTimeout(function(){
//     console.log("hello from setTimeout after 3 seconds");
// }, 3000);

// let times = [100, 200, 500, 3000];
// times.forEach(function(time) {
//     setTimeout(function(){
//         console.log("time is ",time);
//     }, time);
// })

//OBJECTS: data structure
let student = {
    "name": "Pepe",   //key, properties: value
    surname: "Gomez",
    age: 29,
    city: "Barcelona",
    school: {
        name: "Ironhack",
        campus: "Barcelona",
        bootcamp: "Web dev"
    }
};
let student2 = "Maria Dolores Gomez 29 Barcelona";

student.age;
console.log(student.school.campus);


let pelicula = {
    titulo: "Alcarrás",
    year: 2022,
    genero: "drama",
    "equipo Produccion": {
        director: "Carla Simón",
        actores: ["Jordi Pujol Dolcet", "Anna Otín", "Xenia Roset", "Albert Bosch", "Ainet Jounou", "Josep Abad", "Montse Oró", "Carles Cabós", "Berta Pipó"],
        musica: "Andrea Koch",
        fotografia: "Daniela Cajías"
    }   
}

// console.log(pelicula.equipoProduccion.director);
// console.log(pelicula.equipoProduccion.fotografia);
// console.log(pelicula.equipoProduccion.actores[2]);
console.log(pelicula.titulo);
console.log(pelicula["equipo Produccion"]);
console.log("before ", pelicula);

pelicula.hasOscar = [false];
pelicula.hasOscar.push(true);

console.log("after ", pelicula);

console.log("hasOscar" in pelicula);
console.log("city" in pelicula);

delete pelicula.hasOscar;
console.log("after deleting ", pelicula);

console.log(Object.keys(pelicula["equipo Produccion"]));
Object.values(pelicula["equipo Produccion"])[0] = "Mariona Roca";
console.log(Object.values(pelicula["equipo Produccion"]));

// let films = [{
//     titulo: "Alcarrás",
//     year: 2022,
//     genero: "drama",
//     equipoProduccion: {
//         director: "Carla Simón",
//         actores: ["Jordi Pujol Dolcet", "Anna Otín", "Xenia Roset", "Albert Bosch", "Ainet Jounou", "Josep Abad", "Montse Oró", "Carles Cabós", "Berta Pipó"],
//         musica: "Andrea Koch",
//         fotografia: "Daniela Cajías"
//     }       
// }, {
//     titulo: "Liga de supermascotas",
//     year: 2022,
//     genero: "animación",
//     equipoProduccion: {
//         director: "Jared Stern y Sam Levine",
//         actores: [],
//         musica: "Steve Jablonsky",
//         fotografia: "Animación"
//     }       
// }, {
//     titulo: "Cinco lobitos",
//     year: 2022,
//     genero: "drama",
//     equipoProduccion: {
//         director: "Alauda Ruiz de Azúa",
//         actores: ["Laia Costa", "Susi Sánchez", "Ramón Barea", "Mikel Bustamante", "José Ramón Soroiz", "Amber Williams", "Lorena López", "Leire Ucha", "Elena Sáenz", "Asier Valdestilla García", "Nerea Arriola", "Juana Lor Saras", "Justi Larrinaga", "Isidoro Fernández"],
//         musica: "Aránzazu Calleja",
//         fotografia: "Jon D. Domínguez"
//     }       
// } ];

// console.log(films[1].equipoProduccion.director);
// console.log(films[2].equipoProduccion.actores.length);
// console.log(films[0].genero);

// console.log(films[0].titulo);
// console.log(films[1].titulo);
// console.log(films[2].titulo);


// films.forEach(function(film){
//     console.log(film.titulo);
// });

const student3 = {
    "name": "Pepe",   //key, properties: value
    surname: "Gomez",
    age: 29,
    city: "Barcelona",
    school: {
        name: "Ironhack",
        campus: "Barcelona",
        bootcamp: "Web dev"
    }
};

// student3 = {
//     name: "sadsaads"
// }
student3.name = "Terrassa";     //MUTATION
//votes for YES: 3

//votes for NO: 5

//blank: 

console.log(student3);


let paleta1 = ["#11243a", "#0d4e71", "#0989b2", "#03d3f9", "#0ffff8"];
let paleta2 = ["#f6abaf", "#f1c67a", "#15579c", "#1790a1", "#1dccad"];
let paleta3 = ["#00e1ff", "#00edba", "#b4f174", "#ffec9a", "#ffe7e0"];
let paletasColores = [paleta1, paleta2, paleta3];   //bidimensional array

console.log(paletasColores[1][4]);