import { useState } from "react";

function CreateMovieForm({createMovie}){
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [hasOscars, setHasOscars] = useState(false);
    const [IMDBRating, setIMDBRating] = useState("");

    const clickHandler = (e) => {
        e.preventDefault();
        let newMovie = {
            _id: Math.round(Math.random()*100000000000000000),
            title,
            director,
            hasOscars,
            IMDBRating
        };
        createMovie(newMovie);
    }

    return(<form>
        <label htmlFor="title">title</label>
        <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor="director">director</label>
        <input type="text" id="director"  value={director} onChange={(e) => setDirector(e.target.value)}/>
        <label htmlFor="hasOscars">hasOscars</label>
        <input type="checkbox" id="hasOscars" checked={hasOscars} onChange={(e)=>setHasOscars(e.target.checked)}/>
        <label htmlFor="IMDBRating">IMDBRating</label>
        <input type="number" id="IMDBRating" value={IMDBRating} onChange={(e)=>setIMDBRating(e.target.value)}/>
        <button onClick={clickHandler}>Create movie</button>
    </form>);
}

export default CreateMovieForm;