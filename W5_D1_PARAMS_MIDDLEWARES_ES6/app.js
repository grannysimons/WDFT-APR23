const express = require("express");
const app = express();
const hbs = require("hbs");
const mongoose = require("mongoose");
const Movie = require("./model/Movie.model");

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

mongoose.connect("mongodb://localhost:27017/wdftapr23")
.then(resp => console.log("already connected to database!"))
.catch(err => console.log(err))

app.get('/', (req, res, next)=>{

    Movie.find()
    .then(movies => {

        let data = {
            movies
        }
        res.render("index", data);
    })
    .catch(err => res.send(err))
});

app.listen(3000, ()=>console.log("listening to port 3000"));