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

function MovieList() {

    const [movies, setMovies] = useState(moviesArray);
    const [showMovies, setShowMovies] = useState(false);
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

    return (<div>
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