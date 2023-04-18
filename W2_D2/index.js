//FUNCTIONS ADVANCED

//FUNCTION DECLARATION:
function calcSum(x, y){
    return x + y;
}

//ANNONIMOUS FUNCTION / FUNCTION EXPRESSION
const calcSub = function(number) {
    console.log("number is: ", number);
}
calcSub(5);
console.log(typeof calcSub);

[3,56,72,1,2].forEach(calcSub)

//ARROW FUNCTION (ES6) (ANNONIMOUS FUNCTION AS WELL)
const calcSum2 = (x, y) => {
    return x + y;
} 

console.log("--------------");

[23,56,7,3,4,5,1].forEach((number)=>{
    console.log("number is ", number);
})
//a function which is set as a parameter of other functions (forEach) are called CALLBACKS

// setTimeout(()=>{
//     console.log("setTimeout functionc triggered after 2 seconds");
// }, 2000);   //programs the execution of a function a certain amount of time  

// let i = 0;
// let intervalId = setInterval(()=>{
//     i++;
//     console.log(`${i} second has passed`);
//     if(i > 5) {
//         clearInterval(intervalId);
//     }
// }, 1000);


// function eatDinner(fnAfterDinner) {
//     setTimeout(()=>{
//         console.log('Eating the dinner!');
//         fnAfterDinner();
//     }, 4000);
//   }

  //20 minutes = 20 * 60 * 1000
   
//   function eatDessert() {
//     console.log('Eating the dessert!');
//   }
  

//   eatDinner(eatDessert);
//   eatDessert();


let ages = [23,56,10,12,3,5,96,8];
//MAP, REDUCE, FILTER

// ages.forEach(); //iterates over the array

//FILTER
let filteredArray = ages.filter((age)=>{
    return age > 18;
});  //filters the array

let filteredArray2 = [];
ages.forEach((age)=>{
    if(age > 18) filteredArray2.push(age);
});

let students = ["Lisa", "Pedro", "Toni", "Xavi", "Camila", "Toni"];
let filteredStudents = students.filter((student)=>{
    return student.length > 4;
});
console.log("filteredStudents ", filteredStudents);

let students2 = [{
    name: "Lisa",
    country: "Germany",
    campus: "Barcelona",
    grades: [6,7,4,8,9]
}, {
    name: "Pedro",
    country: "Puerto Rico",
    campus: "Barcelona",
    grades: [6,7,4,8,9]
}, {
    name: "Toni",
    country: "Catalunya",
    campus: "Barcelona",
    grades: [6,7]
}, {
    name: "Xavi",
    country: "Catalunya",
    campus: "Barcelona",
    grades: [6,7,4,8,9]
}];
let students2Filtered = students2.filter((student)=>{
    return student.grades.length < 5;
});
console.log(students2Filtered);

// console.log("filteredArray ", filteredArray);

//MAP: transform each of the elements of an array
let students3 = ["Lisa", "Pedro", "Toni", "Xavi", "Camila", "Toni"];
let students3List = students3.map((student)=>{
    // return "<li>" + student + "</li>";
    return student.length;
});
console.log(students3List);

let students4List = students2.map((student) => {
    return `${student.name} is from ${student.country} and is studying in ${student.campus} with a results of ${student.grades}`;
});
console.log(students4List);

/*
<ul>
<li>Lisa</li>
<li>Pedro</li>
...
</ul>
*/

//REDUCE:
let students4 = ["Lisa", "Pedro", "Toni", "Xavi", "Camila", "Toni"];

let singleText = students4.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue + " - ";
}, "");

console.log(singleText);

let grades = [7,8,3,7,8];
let totalGrades = grades.reduce((acc, currValu)=>{
    return acc + currValu;
}, 0);
let average = totalGrades/grades.length;
console.log(average);



//SORT, REVERSE
let grades2 = [7,8,3,10,8];
grades2.sort((a, b)=>{
    return a-b;
});

let students4Ordered = students2.sort((a,b) => {
    return b.name.length - a.name.length;
});

console.log(students4Ordered);

console.log("grades2 ", grades2);
console.log("grades2 reversed", grades2.reverse());