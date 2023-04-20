//SELECT HTML ELEMENTS:
console.log(document.getElementById("titol"));  //element
console.log(document.getElementsByClassName("alert")); //[]
console.log(document.getElementsByTagName("div")[0]);  //[]
console.log(document.querySelectorAll("div.alert"));  //[]
console.log(document.querySelector("div.alert"));   //element

//CHANGE STYLES:
document.getElementsByTagName("h1")[0].style.color = "blue";
document.getElementsByTagName("h1")[0].style.fontSize = "60px";
document.querySelector("body h1#titol").style.backgroundColor = "black";
// document.getElementById("titol")

// document.getElementsByTagName("input")[0]
document.querySelector("input").style.borderColor = "red";

let inputList = document.querySelectorAll("input")
for(let i = 0; i<inputList.length; i++) {
    inputList[i].style.borderColor = "red";
}

document.getElementById("activitat").value = "Hi from the javascript file!!!"
console.log(document.getElementById("activitat").id);

console.log(document.getElementById("titol").innerHTML);
console.log(document.querySelector("form").innerHTML);

// document.querySelector("form").innerHTML = "Hi I'm a hacker and your form is not here any more!!!!"

document.getElementById("titol").innerHTML = `My <strong>grades</strong> in my <a href="http://ironhack.com">Ironhack</a> course`;

//ADD EVENT:
const buttonClick = () => {
    console.log("buttonClick!!!");
    let inputList = document.querySelectorAll("#nom, #activitat, #nota");
    console.log(inputList);
    for(let i=0; i<inputList.length; i++) {
        console.log(inputList[i].value);
    }

    console.log("hello?????");

    document.getElementById("alerta-activitat").classList.add("amagat");
    document.getElementById("alerta-nota").classList.add("amagat");

    if(inputList[1].value == "") {
        //remove class "amagat"
        /*
        document.getElementById("alerta-activitat").classList.add("newclass");
        document.getElementById("alerta-activitat").classList.remove("class_to_remove");
        document.getElementById("alerta-activitat").classList.replace("oldClass", "newClass");
        document.getElementById("alerta-activitat").classList.contains("classToCheck")
        document.getElementById("alerta-activitat").classList.toggle("switch")
        */
        document.getElementById("alerta-activitat").classList.remove("amagat");
        return;
    }
    if(inputList[2].value == "") {
        //remove class "amagat"
        document.getElementById("alerta-nota").classList.remove("amagat");
        return;
    }

    //create element:
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${inputList[1].value}</td>
        <td>${inputList[2].value}</td>
    `;
    document.getElementById("taula-body").appendChild(row);
}
//RECOMENDED:
document.getElementById("boto1").addEventListener("click", buttonClick);

//NOT RECOMENDED AT ALL:
const mouseEvent = () => {
    // document.querySelector("body").style.backgroundColor = "#333";
}
const mouseEventOut = () => {
    // document.body.style.backgroundColor = "white";
}

document.body.addEventListener("keydown", (e)=>{
    // console.log(e.key);
    if(e.key == "p") {
        console.log("YOU PRESSED THE P KEY!!!!!");
    }
    // console.log(e.target);
})

