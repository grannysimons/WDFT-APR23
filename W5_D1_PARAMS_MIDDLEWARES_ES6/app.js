const express = require("express");
const app = express();
const hbs = require("hbs");
const mongoose = require("mongoose");
const Movie = require("./model/Movie.model");
const bodyParser = require("body-parser");

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

//parsing body parameters from the http package
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/wdftapr23")
.then(resp => console.log("already connected to database!"))
.catch(err => console.log(err))


const middleware1 = ( req, res, next ) =>{
    req.testParameter = "hello!";
    console.log("hi from middleware 1", req.testParameter);
    next();
}

const middleware2 = ( req, res, next ) => {
    console.log("hi from middleware 2", req.testParameter);
    next();
}
const middlewareAuth = (req, res, next) => {
    //take user information from the req object:
    // User.find({username: req.body.username})
    // .then(results => {
    //     if(results) next();
    //     else res.render("login");
    // })
    // .catch(err => res.render("error"))
    next();
}

app.use(middleware1);
app.use(middleware2);

app.get('/', middlewareAuth, (req, res, next)=>{

    Movie.find()
    .then(movies => {

        let data = {
            movies
        }
        res.render("index", data);
    })
    .catch(err => res.send(err))
});

app.get("/results", async (req, res, next)=>{
    console.log(req.query);
    let movieTitle = req.query.movieTitle;
    try{
        let movies = await Movie.find({title: movieTitle})
        let data = {
            movies
        }
        res.render("index", data);
    } catch(err) {
        res.send(err);
    }
})

app.get("/newFilm", (req, res, next)=>{
    res.render("newFilm");
})
app.post("/newFilmFormProcessing", (req, res, next)=>{
    console.log(req.body);
    let {movieTitle, movieDirector, movieYear, movieDuration, movieRate} = req.body;    //ES6
    let newMovie = {
        title: movieTitle,
        year: movieYear,
        director: movieDirector,
        duration: movieDuration,
        rate: movieRate
    }
    Movie.create(newMovie)
    .then(result => {
        // res.send("Movie created!!");
        res.redirect("/" + result._id);
    })
    .catch(err => res.send(err))

})

app.get("/:movie_id", (req, res, next)=>{
    console.log("Route parameters: ", req.params);
    let movieId = req.params.movie_id;
    Movie.findById(movieId)
    .then(movie => {
        res.render("movie", movie)
    })
    .catch(err => res.send(err))
})

app.get("*", (req, res, next)=>{
    res.send("Hi from the wildcard");
})

app.listen(3000, ()=>console.log("listening to port 3000"));