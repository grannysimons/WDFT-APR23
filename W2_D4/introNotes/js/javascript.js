// let titulo = document.getElementById('titol');
// console.log(titulo);
// titulo.style.backgroundColor = "red";   //background-color
// // titulo.innerHTML = titulo.innerHTML + "Título desde <strong>JS</strong>";
// titulo.innerHTML = `
//     Título desde el JS
//     <img src="https://picsum.photos/200/200" alt="imagen de prueba" />
//     `;

// let tabla = document.getElementById('tablaNotas'); //-> elemento html
// console.log("tabla: ", tabla);
// tabla.style.color = "blue";
// // tabla.innerHTML = '<tr><td>Dato desde JS</td></tr>'

// console.log(document.getElementsByTagName("input"));
// let elementosInput = document.getElementsByTagName("input");    //HTMLCollection -> Lista de elementos html
// elementosInput[1].style.color = "red";
// let elementosAlert = document.getElementsByClassName("alert")//HTMLCollection
// let elementosBoton = document.querySelectorAll(".boto input");//HTMLCollection
// console.log("elementos boton: ", elementosBoton);

// for(let i=0; i<elementosInput.length; i++) {
//     console.log(`elemento ${i}: ${elementosInput[i]}`);
//     elementosInput[i].style.border = "3px solid black";
// }

// let elementoActividad = document.querySelector("th");   //elemento

// console.log(elementoActividad);

// //puedo acceder a los atributos de un elemento:
// //elemento.atributo
// console.log(tabla.id);
// console.log(tabla.className);
// //imagen.src
// console.log(elementoActividad.getAttribute("src")); //elementoActividad.src
// elementoActividad.setAttribute("src", "https://picsum.photos/300/100"); //elementoActividad.src = "https://picsum.photos/300/100"


// //acceder a las clases:
// tabla.classList.add("patata");
// tabla.classList.remove("table-striped");
// tabla.classList.replace("w-75", "w-50");

// let inputNom = document.getElementById("nom");
// console.log(inputNom.value);

// //crear elementos en el DOM:
// let elementTr = document.createElement("tr");
// let elementTd = document.createElement("td");
// // elementTd.innerHTML = elementTd.innerHTML + "Soy un valor desde JS";
// // elementTd.innerHTML += "Soy un valor desde JS"; //AÑADO CONTENIDO  
// elementTd.innerHTML = inputNom.value;

// elementTr.appendChild(elementTd);   //tambien tenemos otra funcion que es el insertBefore, insertAfter
let tbody = document.getElementById("taula-body");
// tbody.appendChild(elementTr);

function enviarnota(e){
    let valorActividad = document.getElementById("activitat").getAttribute("value");
    let valorNota = document.getElementById("nota").value;
    console.log(valorActividad);
    console.log(valorNota);

    
    let elementTr = document.createElement("tr");
    let elementTdActividad = document.createElement("td");
    let elementTdNota = document.createElement("td");
    elementTdActividad.innerHTML = valorActividad;
    elementTdNota.innerHTML = valorNota;
    elementTr.appendChild(elementTdActividad);
    elementTr.appendChild(elementTdNota);
    

    /*
    let elementTr = document.createElement("tr");
    elementTr.innerHTML = `
        <td class="dato">${valorActividad}</td>
        <td>${valorNota}</td>
    `;
    */


    tbody.appendChild(elementTr);

    console.log(e.target);
}

// titulo.addEventListener("click", enviarnota);
let boton = document.getElementById("boto1");

boton.addEventListener("click", (event)=> {enviarnota(event)}); //opcion 2
// boton.onclick = enviarnota; //opcion 3

let bigImg = (elem) => {
    console.log("bigImg: ", elem.src);
}

//evento "click"
//atributo de html que asigna una función al evento "click" es "onclick"
document.body.addEventListener("keydown", (e)=>{
    console.log("soy un evento keydown: ", e);
    if(e.key === "ArrowUp") {
        //movimiento
        console.log("FLECHA ARRIBA!!!!");
    }
});

let tBody2 = tabla.getElementById("taula-body")


window.addEventListener("load", ()=>{
    //codigo de la aplicacion
})

