//ECMA => "Standarizing organization"
//ECMA SCRIPT => the standard language (Javascript is a version of EcmaScript)
//ES5 -> ES6 (2015)

//OBJECT DESTRUCTURING

let person = {
    name: 'Ironhacker',
    age: 25,
    favoriteMusic: 'Metal',
  };
   
//ES5
// let name = person.name;
// let age = person.age;
// let favMusic = person.favoriteMusic;
//ES6
// let { name, age, favoriteMusic, city = "Barcelona" } = person;
// console.log(`Hello, my name is ${name}, I'm ${age} years old, and my fav mysuc is ${favoriteMusic}. I'm from ${city}`);

//ARRAY DESTRUCTURING
const campuses = ['madrid', 'barcelona', 'miami'];

//ES5
// const firstCampus = campuses[0];
// const secondCampus = campuses[1];

//ES6
const [firstCampus, thirdCampus, secondCampus, defaultCampus = "Lisbon"] = campuses;
console.log(firstCampus);
console.log(secondCampus);
console.log(thirdCampus);
console.log(defaultCampus);

//COMPLEX ARRAY DESTRUCTURING
const europeanCampuses = [
    ['madrid', 'es'],
    ['barcelona', 'es'],
    ['berlin', 'de'],
    ['paris', 'fr'],
    ['amsterdam', 'nl'],
    ['lisbon', 'pt'],
  ];

  const [[firstCampCity, firstCampLang], [secondCampCity, secondCampLang], thirdCamp, fourthCamp] = europeanCampuses;

  console.log(firstCampCity);
  console.log(firstCampLang);
  console.log(secondCampCity);
  console.log(secondCampLang);

  //COMPLEX OBJECT DESTRUCTURING
  const customer = {
    name: {
      firstName: 'ivan',
      lastName: 'zoro',
    },
    age: 32,
    preferences: [
      {
        tech: ['cameras', 'smartwatches'],
        books: ['science fiction', 'coding'],
      },
    ],
  };
  
// const {name: {firstName, lastName}, age, preferences: [{tech: [tech1, tech2], books: [books1, books2]}]} = customer;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(tech1);
// console.log(tech2);
// console.log(books1);
// console.log(books2);



function getFullName({firstName, lastName}) {
    return `getFullName -----> ${firstName} ${lastName}`;
}

// let userInformation = {
//     firstName: "Ivan",
//     lastName: "Zoro"
// }


//"REVERSE DESTRUCTURING"
let firstName = "Ivan";
let lastName = "Zoro";

//let fullName = getFullName({firstName: firstName, lastName: lastName});
//an other way of writing the same, but cleaner:
let fullName = getFullName({firstName, lastName});
console.log(fullName);

//SPREAD OPERATOR (...): 
const reptiles = ['snake', 'lizard', 'alligator'];
const mammals = ['puppy', 'kitten', 'bunny'];

//ES5
let animals = [];
reptiles.forEach(reptile => animals.push(reptile));
mammals.forEach(mammal => animals.push(mammal));
console.log(animals);
//ES6
let animals2 = [...reptiles, ...mammals];
console.log(animals2);

//REST OPERATOR
function add(...numbers) {
    return numbers.reduce((acc, curr)=>{
        return acc + curr;
    }, 0);
}

let result = add(3,6,1,1,1,1,1,1);
console.log(result);

function showMovie(title, year, ...actors) {
    console.log("showMovie: ", title);
    console.log("showMovie: ", year);
    console.log("showMovie: ", actors);
}
showMovie("Titanic", "1997", "Leonardo di Caprio", "Kate Winslet");