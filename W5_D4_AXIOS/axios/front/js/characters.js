window.onload = () => {
    //BEFORE AXIOS:
    // fetch("https://ih-crud-api.herokuapp.com/characters")
    // .then(results => results.json())
    // .then(results => {
    //     console.log("results from FETC: ", results);
    // })

    //AXIOS:
    // axios.get("https://ih-crud-api.herokuapp.com/characters")
    // .then(({data}) => {
    //     console.log("results from AXIOS: ", data);
    // })

    document.getElementById("show").addEventListener("click", ()=>{
        // axios.get("https://ih-crud-api.herokuapp.com/characters")
        charactersService.getCharacters()
        .then(({data}) => {
            console.log("results from AXIOS: ", data);
            let ul = document.querySelector("ul.characters-list");

            data.forEach(character => {
                let li = document.createElement("li");
                li.innerHTML = character.name + " (" + character.occupation + ")";
                ul.appendChild(li);
            })
        })
    })
}