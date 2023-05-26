import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ApartmentDetail() {
    let {apartmentId} = useParams();
    const [apartment, setApartment] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get(`https://ironbnb-m3.herokuapp.com/apartments/${apartmentId}`)
        .then(({data})=>{
            setApartment(data);
            setTimeout(()=>{
                setLoading(false);
            }, 1000);
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <Navbar />
            <h1>ApartmentDetail</h1>

            {loading && <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>}

            {!loading && <div className="card">
                <img src={apartment.img} className="card-img-top" alt={apartment.title} />
                <div className="card-body">
                    <h5 className="card-title">{apartment.title}</h5>
                    <p className="card-text">Price: {apartment.pricePerDay}</p>
                    <p>Created at: {apartment.createdAt}</p>
                </div>
            </div>}
            <div><Link to="/apartments">Go back</Link></div>
        </div>
    )
}
