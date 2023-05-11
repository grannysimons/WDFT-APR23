const axios = require("axios");

const baseUrl = "https://ih-crud-api.herokuapp.com/characters";

module.exports = {
    getCharacters: () => {
        return axios.get(baseUrl);
    },
    createCharacter: (character) => {
        return axios.post(baseUrl, character);
    },
    updateCharacter: () => {
        
    }
}