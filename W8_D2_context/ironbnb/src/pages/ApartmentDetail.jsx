import Navbar from "../components/Navbar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { apartmentContext } from "../contexts/Apartment.context";

// import Wrapper from '../contexts/Variable.context';
// import { variableContext, VariableProviderWrapper } from '../context/Variable.context';

export default function ApartmentDetail() {
    let {apartmentId} = useParams();
    const [apartment, setApartment] = useState({});
    const [loading, setLoading] = useState(true);
    const [available, setAvailable] = useState(true);

    // let timeoutId = 0;
    // console.log("timeoutId ", timeoutId);

    const { apartments } = useContext(apartmentContext);

    // useEffect(()=>{
    //     timeoutId = setTimeout(()=>{
    //         console.log("5 seconds passed ", timeoutId);
    //         setAvailable(false);
    //     }, 5000);

        
    // }, [])

    useEffect(()=>{
        // axios.get(`https://ironbnb-m3.herokuapp.com/apartments/${apartmentId}`)
        // .then(({data})=>{
        //     setApartment(data);
        //     setTimeout(()=>{
        //         setLoading(false);
        //     }, 1000);
        // })
        // .catch(err => console.log(err))

        setApartment(apartments.find(apartment => apartment._id == apartmentId));
        if(apartments.find(apartment => apartment._id == apartmentId)) {
            setTimeout(()=>{
                setLoading(false);
            }, 1000);
        }
    }, [apartments]);

    return (
        <div>
            <Navbar />
            <h1>ApartmentDetail</h1>

            {loading && <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>}

            {!loading && apartment._id && <div className="card">
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
