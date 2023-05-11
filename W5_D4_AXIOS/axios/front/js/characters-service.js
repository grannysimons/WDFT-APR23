const charactersService = {
    getCharacters: () => {
        return axios.get("https://ih-crud-api.herokuapp.com/characters");
    },
    createCharacter: (character) => {
        return axios.post("https://ih-crud-api.herokuapp.com/characters", character);
    },
    deleteCharacter: (id) => {
        return axios.delete("https://ih-crud-api.herokuapp.com/characters/" + id);
    }
}

//OPTION 2
/*
class CharactersServiceAPI {
    constructor() {
        this.api = axios.create({
            baseURL: "https://ih-crud-api.herokuapp.com/characters/"
        })
    }
    getCharacters() {
        return this.api.get("/");
    }
}
const charactersServiceAPI = new CharactersServiceAPI();
*/

//OPTION 3
/*
class APIService {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL
        })
    }
    getItems() {
        return this.api.get("/");
    }
}
const charactersServiceAPI2 = new APIService("https://ih-crud-api.herokuapp.com/characters/")
*/