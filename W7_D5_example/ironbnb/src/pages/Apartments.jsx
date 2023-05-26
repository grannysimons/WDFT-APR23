import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import FilterForm from '../components/FilterForm';

export default function Apartments() {

    const [apartments, setApartments] = useState([]);
    const [filteredApartments, setFilteredApartments] = useState([]);

    useEffect(()=>{
        axios.get('https://ironbnb-m3.herokuapp.com/apartments')
        .then(({data})=>{
            console.log("results: ", data);
            setApartments(data);
            setFilteredApartments(data);
        })
        .catch(err => console.log(err));
    }, [])

    const filterApartments = (text) => {
        setFilteredApartments(apartments.filter(apartment => apartment.title.toLowerCase().includes(text.toLowerCase())))
    }

    return (
        <div>
            <FilterForm filterFunction={filterApartments} />
            <h1>Apartments</h1>
            {filteredApartments.map(apartment => {
                return (<div key={apartment._id} className="card">
                <img src={apartment.img} className="card-img-top" alt={apartment.title} />
                <div className="card-body">
                  <h5 className="card-title">{apartment.title}</h5>
                  <Link to={`/apartments/${apartment._id}`}>More details</Link>
                </div>
              </div>)
            })}
        </div>
    )
}

/*
     {
        "img": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlnJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        "pricePerDay": 1200,
        "_id": "647064c8fb95d400149b3374",
        "title": "Big house in Barcelona city center",
        "createdAt": "2023-05-26T07:50:32.269Z",
        "updatedAt": "2023-05-26T07:50:32.269Z",
        "__v": 0
    },
    */
