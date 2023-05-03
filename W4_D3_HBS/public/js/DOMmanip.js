let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", ()=>{
    let divElem = document.getElementById("main-container");
    divElem.classList.toggle("changes");
});