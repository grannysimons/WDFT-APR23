const moviesArray = [
    {
        "_id": "1ae23ef1",
        "title": "The Godfather",
        "director": "Francis Coppola",
        "hasOscars": true,
        "IMDBRating": 9.2
    },
    {
        "_id": "1ae23ef2",
        "title": "Star Wars",
        "director": "George Lucas",
        "hasOscars": true,
        "IMDBRating": 1
    },
    {
        "_id": "1ae23ef3",
        "title": "The Shawshank Redemption",
        "director": "Frank Darabont",
        "hasOscars": false,
        "IMDBRating": 9.3
    },
    {
        "_id": "1ae23ef4",
        "title": "Jurassic Park",
        "director": "Steven Spielberg",
        "hasOscars": false,
        "IMDBRating": 8.0
    },
    {
        "_id": "1ae23ef5",
        "title": "Sharknado",
        "director": "Anthony C. Ferrante",
        "hasOscars": false,
        "IMDBRating": 5.2
    },
    {
        "_id": "1ae23ef6",
        "title": "Titanic",
        "director": "James Cameron",
        "hasOscars": true,
        "IMDBRating": 8.9
    }
];
import { useState } from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';
import CreateMovieForm from './CreateMovieForm';
import FilterForm from './FilterForm';

function MovieList() {

    const [movies, setMovies] = useState(moviesArray);
    const [showMovies, setShowMovies] = useState(false);
    const [filterText, setFilterText] = useState("");
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [hasOscars, setHasOscars] = useState(false);
    const [IMDBRating, setIMDBRating] = useState("");

    // let elements = [1,2,3,4];
    let elements = [1, 2, "HOLA", 4, ","];
    // let students = [<li>Lisa</li>, <li>Pedro</li>, <li>Toni</li>];
    let students = ["Lisa", "Pedro", "Toni"];

    const deleteMovie = (id) => {
        setMovies(movies.filter(movie => movie._id != id));
    }
    const resetMovies = () => {
        setMovies(moviesArray);
    }
    const hideMovies = () => {
        setShowMovies(!showMovies);
    }
    const filterMovies = (e) => {
        e.preventDefault();
        setMovies(movies.filter((movie) => movie.title.includes(filterText)))
    }

    //inputChanges is a function that handles the event of changing the input WHEN THE FORM IS INSIDE THIS MOVIELIST COMPONENT:
    const inputChanges = (e) => {
        console.log("input changes!!");
        setFilterText(e.target.value)
        setMovies(movies.filter((movie) => movie.title.includes(e.target.value))) 
    }

    //inputChangesFromComponent is a function that handles the event of changing the input WHEN THE FORM IS IN A CHILD COMPONENT (FILTERFORM):
    const inputChangesFromComponent = (text) => {
        setMovies(movies.filter((movie) => movie.title.includes(text))) 
    }

    //createMovie is a function that handles the event of clicking on the button WHEN THE FORM IS INSIDE THIS MOVIELIST COMPONENT:
    const createMovie = (e) => {
        e.preventDefault();

        let newMovie = {
            "_id": Math.round(Math.random()*10000000000000000000),
            "title": title,
            "director": director,
            "hasOscars": hasOscars,
            "IMDBRating": IMDBRating
        }
        setMovies([...movies, newMovie]);
    }

    //createMovieFromComponent is a function that handles the event of clicking on the button WHEN THE FORM IS IN A CHILD COMPONENT:
    const createMovieFromComponent = (newMovie) => {
        setMovies([...movies, newMovie]);
    }

    return (<div>
        {/* <form>
            <input type="text" value={filterText} onChange={inputChanges} /> */}
            {/* <button onClick={filterMovies}>Filter</button> */}
        {/* </form> */}
        <FilterForm filterMovies={inputChangesFromComponent}/>
        {/* <form>
            <label htmlFor="title">title</label>
            <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <label htmlFor="director">director</label>
            <input type="text" id="director"  value={director} onChange={(e) => setDirector(e.target.value)}/>
            <label htmlFor="hasOscars">hasOscars</label>
            <input type="checkbox" id="hasOscars" checked={hasOscars} onChange={(e)=>setHasOscars(e.target.checked)}/>
            <label htmlFor="IMDBRating">IMDBRating</label>
            <input type="number" id="IMDBRating" value={IMDBRating} onChange={(e)=>setIMDBRating(e.target.value)}/>
            <button onClick={createMovie}>Create movie</button>
        </form> */}
        <CreateMovieForm createMovie={createMovieFromComponent}/>
        {showMovies && <ol>
            {/* {students.map(student => <li>{student}</li>)} */}
            {movies.map((movie, k) => <MovieCard movie={movie} key={movie._id} deleteHandler={() => deleteMovie(movie._id)} />)}
        </ol>}
        {movies.length == 0 && <p>No movies to show</p>}
        <button onClick={resetMovies}>Reset movie list</button>
        <button onClick={hideMovies}>{showMovies ? "Hide" : "Show"} movies</button>
    </div>);
}

export default MovieList;