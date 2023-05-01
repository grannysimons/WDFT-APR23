const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
];

function getDirection(step, callback, errorCallback) {
    let randomTime = Math.round(Math.random()*4 + 1)*1000;
    setTimeout(()=>{
        console.log(randomTime + " -> " + directions[step]);
        
        if(!directions[step]) errorCallback();
        else callback();
    }, randomTime);
}

// setTimeout(()=>{
//     console.log(directions[0]);
// }, 1000);

// setTimeout(()=>{
//     console.log(directions[1]);
// }, 4000);

// setTimeout(()=>{
//     console.log(directions[2]);
// }, 2000);

// setTimeout(()=>{
//     console.log(directions[3]);
// }, 4000);

//CALLBACK HELL -> PROMISES ARE THE ALTERNATIVE!!!!!
// getDirection(0, ()=>{
//     getDirection(1, ()=>{
//         getDirection(2, ()=>{
//             getDirection(3, ()=>{
//                 console.log("You reached the destination!!");
//             }, ()=>console.log("error accessing to direction"))
//         }, ()=>console.log("error accessing to direction"))
//     }, ()=>console.log("error accessing to direction"))
// }, ()=>console.log("error accessing to direction"))

//class Promise already built in javascript
function getDirectionProm(step) {
    return new Promise((resolve, reject)=>{
        //all the code of getDirectionProm
        let randomTime = Math.round(Math.random()*4 + 1)*1000;
        setTimeout(()=>{
            console.log(directions[step]);
            reject();
            // if(!directions[step]) reject();
            // else resolve();
        }, randomTime);
        //correct result -> resolve()
        //incorrect result -> reject()
    })
}
// console.log(getDirectionProm(0)) //returns a promise

// getDirectionProm(0) //fetch -> returns a promise
// .then(()=>{
//     console.log("promise resolved!!!!!");
//     getDirectionProm(1);
// })
// .then(()=>{
//     getDirectionProm(2);
// })
// .then(()=>{
//     getDirectionProm(4);
// })
// .catch(()=>{
//     console.log("some error happened");
// })

//STATES OF A PROMISE: Pending, resolved, rejected
//Promise resolve and reject ONLY ONCE!!!!!

// const p2 = new Promise((resolve, reject)=>{
//     //our code
//     setTimeout(()=>{
//         resolve("promise OK!!!");
//         // reject("promise KO!!!");
//     }, 1000);
// });

// p2
// .then((res)=>{
//     console.log("resolved!!! ", res);
//     return 23;  //return value is encapsulated as a resolved promise!
// })
// .then((res)=>{
//     console.log("second then reached ", res);
//     throw new Error("error happened in the 2nd then block");
//     return new Promise((resolve, reject)=>{
//         resolve("new promise resolved");
//     })
// })
// .catch((err)=>{
//     console.log("ERROR! ", err);
//     return 40;
// })
// .then((res) => {
//     console.log("3rd then block: ", res);
//     // throw new Error("2nd error happened in the 2nd then block");
// })
// .catch((err)=>{
//     console.log("ERROR! ", err);
// })
// .finally(()=>{
//     console.log("FINALLY!!!!");
// })

// const p1_credentialsCheck = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("credentials ok");
//     }, 2000);
// })
// const p2_loginAttempt = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("login attempt registered");
//     }, 5000);
// })

// p1_credentialsCheck //2000
// .then((res)=>{
//     console.log(res);
//     return p2_loginAttempt; //5000
// })
// .then((res)=>{
//     console.log(res);   //after 7000 ms
// })
// .catch((err)=>{
//     console.log(err);
// })

// //parallel execution of promises
// Promise.all([p1_credentialsCheck, p2_loginAttempt])
// .then(res => {
//     console.log(res);   //5000ms
// })
// .catch(err => {
//     console.log(err);
// })

//ASYNC / AWAIT -> ES6

async function sayHello() {
    return "hello everyone!";
}

const sayHello2 = async () => {
    return "hello from arrow";
}

// console.log(sayHello());
// sayHello()
// .then((res)=>{
//     console.log("res in then block ", res);
// })

const obtainDirection = (step) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!directions[step]) reject("direction doesn't exist");
            else resolve(directions[step]);
        }, 1000);
    })
}

const getCaffe = async () => {
    // obtainDirection(0)
    // .then((res)=>{
    //     console.log(res);
    //     return obtainDirection(1);
    // })
    // .then((res) => {
    //     console.log(res);
    //     return obtainDirection(2);
    // })
    try {
        console.log("Let's go to get some coffee");
        console.log(await obtainDirection(0));
        console.log(await obtainDirection(1));
        throw new Error("An error happened!!!!!!");

        let direction3 = await obtainDirection(2);
        console.log(direction3);
        let direction4 = await obtainDirection(3);
        console.log(direction4);
        console.log("bon profit");
    } catch(err) {
        console.log("CATCH BLOCK", err);
    }

    try{
        console.log("NEXT TRY BLOCK");
    }catch(err) {
        console.log("ERROR IN SECOND BLOCK");
    }
}

// throw new Error("An error happened in global scope!!!!!!");

console.log("BEFORE GETCAFFE");
getCaffe(); //async
console.log("AFTER GETCAFFE");

//FETCH FUNCTION: only available in the browser!!!! (At the moment)
fetch("https://pokeapi.co/api/v2/pokemon?limit=100")    //API URL!!!!
// .then((res) => {
//     return res.json();  //recognises the response of the API and send it as a new promise (when using FETCH)
// })
.then(res => res.json())
.then((pokemons) => {
    console.log("POKEMONS! ", pokemons);
    let pokemonsList = document.querySelector("#pokemons-list");

    // document.querySelector(".info")
    document.getElementsByClassName("info")[0].innerHTML = `You have ${pokemons.count} pokemons available`;

    pokemons.results.forEach((pokemon)=>{
        let li = document.createElement("li");
        li.innerHTML = pokemon.name;

        li.addEventListener("click", ()=>{
            getPokemonImage(pokemon.name);
        });

        pokemonsList.appendChild(li);
    });

})
.catch(err => console.log(err))

const getPokemonImage = async (name) => {
    //THEN VERSION
    // fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    // .then(res => res.json())
    // .then(pokemon => {

    // })

    //ASYNC/AWAIT VERSION
    try{
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        let pokemon = await res.json();
        console.log(pokemon.sprites.front_default);
    
        let image = new Image();
        image.src = pokemon.sprites.front_default;
        image.alt = name;
    
        document.querySelector("div.image").innerHTML = "";
    
        document.querySelector("div.image").appendChild(image);
    } catch(err) {
        console.log(err);
    }
}
