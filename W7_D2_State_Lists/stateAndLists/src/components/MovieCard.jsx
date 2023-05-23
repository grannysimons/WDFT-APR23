import Stars from "./Stars";

function MovieCard({movie, deleteHandler}) {

    //CONDITIONAL RENDERING

    //METHOD 1
    // let oscars = "";
    // if(movie.hasOscars) oscars = <p>Got the Oscar Award!</p>;
    // else oscars = <p>It was a good movie but got no Oscars...</p>;

    //METHOD 2
    //Ternary operator:
    let oscars = movie.hasOscars ? <p>Got the Oscar Award!</p> : <p>It was a good movie but got no Oscars...</p>;

/*
<i class="fa-solid fa-star"></i>
<i class="fa-regular fa-star"></i>
*/

    return (
        <div className="movie">
            <p>{movie.title}</p>
            <p>{movie.director}</p>
            <p>{movie.IMDBRating}</p>
            <Stars rating={movie.IMDBRating} />

            {/* METHOD 3 */}
            {movie.hasOscars && <p>Got the Oscar Award!</p>}
            {!movie.hasOscars && <p>It was a good movie but got no Oscars...</p>}
            
            <button onClick={deleteHandler}>Delete movie</button>
        </div>);
}

export default MovieCard;