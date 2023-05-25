import { useState } from "react";

function FilterForm({filterMovies}) {
    const [filterText, setFilterText] = useState("");

    const changeHandler = (e) => {
        // e.preventDefault();  //it only makes sense if the function is executed in a button that tries to submit information to the server

        setFilterText(e.target.value);
        filterMovies(e.target.value);
    }

    return(
    <form>
        <input type="text" value={filterText} onChange={changeHandler} />
    </form>);
}

export default FilterForm;