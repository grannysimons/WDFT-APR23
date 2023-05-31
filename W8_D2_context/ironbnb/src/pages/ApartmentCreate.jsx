import Navbar from "../components/Navbar";
import axios from "axios";
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

export default function ApartmentCreate() {

    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [pricePerDay, setPricePerDay] = useState(0);

    const navigate = useNavigate();

    const clickHandler = (e) => {
        e.preventDefault();

        //create a new apartment
        //1. create the apartment object
        let newApartment = {
            img: imageUrl,
            pricePerDay,
            title,
        }
        //2. send the new apartment to the API
        axios.post('https://ironbnb-m3.herokuapp.com/apartments', newApartment)
        .then(()=>{
            // return <Navigate to="/apartments" />
            navigate("/apartments");
            // useNavigate()("/apartments");    //->this would be correct but """"unsmokeable"""" (infumable)
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className="w-75 mx-auto">
            <Navbar />
            <h1 className="mt-5 mb-5">Apartment create</h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">image url</label>
                    <input type="text" className="form-control" id="imageUrl" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">price</label>
                    <input type="number" className="form-control" id="price" value={pricePerDay} onChange={(e)=>setPricePerDay(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={clickHandler}>Create apartment</button>
            </form>
        </div>
    )
}
