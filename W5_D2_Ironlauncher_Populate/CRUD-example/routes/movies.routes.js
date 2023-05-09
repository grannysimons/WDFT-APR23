const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model"); //../ is also identified as a file from Node

router.get('/', (req, res, next)=>{

    Movie.find()
    .then(movies => {

        let data = {
            movies
        }
        res.render("index", data);
    })
    .catch(err => res.send(err))
});

router.get("/results", async (req, res, next)=>{
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

router.get("/newFilm", (req, res, next)=>{
    res.render("newFilm");
})
router.post("/newFilmFormProcessing", (req, res, next)=>{
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

router.get("/:movie_id/edit", (req, res, next)=>{

    // let { movie_id } = req.params;
    let movie_id = req.params.movie_id;

    Movie.findById(movie_id)
    .then(movie => {
        res.render("edit", movie);
    })
    .catch(err => next(err))
})

router.post("/:movie_id/edit", (req, res, next)=>{
    let {title, director, year, duration, rate} = req.body;
    let {movie_id} = req.params;

    let updatedValues = {
        title,
        director,
        year,
        duration,
        rate
    }

    Movie.findByIdAndUpdate(movie_id, updatedValues)
    .then(resp => {
        res.redirect(`/${movie_id}`);
    })
    .catch(err => next(err))
})

router.get("/:movie_id", (req, res, next)=>{
    console.log("Route parameters: ", req.params);
    let movieId = req.params.movie_id;
    Movie.findById(movieId)
    .then(movie => {
        console.log("movie:", movie);
        res.render("movie", movie)
    })
    .catch(err => next(err))
})

router.post("/:movie_id/delete", (req, res, next)=>{
    let {movie_id} = req.params;
    Movie.findByIdAndDelete(movie_id)
    .then(resp => {
        res.redirect("/");
    })
    .catch(err => next(err))
})

router.get("*", (req, res, next)=>{
    res.send("Hi from the wildcard");
})

module.exports = router;