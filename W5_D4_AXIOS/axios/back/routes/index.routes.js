const express = require('express');
const router = express.Router();
const axios = require('axios');

const {getCharacters, createCharacter, updateCharacter} = require("../services/characters.service");

/* GET home page */
router.get("/list", (req, res, next) => {
  //localhost:3002/movie-characters/list
  // axios.get("https://ih-crud-api.herokuapp.com/characters")
  getCharacters()
  .then(results => {
    console.log(results.data);
    let data = {
      characters: results.data
    }
    res.render("index", data);
  })
  .catch(err => next(err))

});
router.get("/create", (req, res, next)=>{
  res.render("create");
})
router.post("/create", (req, res, next)=>{
  let {charname, charoccupation, chardebt, charweapon} = req.body;
  let newCharacter = {
    name: charname,
    occupation: charoccupation,
    debt: chardebt,
    weapon: charweapon
  }
  axios.post("https://ih-crud-api.herokuapp.com/characters", newCharacter)
  .then(({data}) => {
    console.log(data);
    res.redirect("/movie-characters/list");
  })
  .catch(err => next(err))

})
module.exports = router;
