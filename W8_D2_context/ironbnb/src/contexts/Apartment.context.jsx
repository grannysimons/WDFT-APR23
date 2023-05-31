import axios from "axios";
import { createContext, useEffect, useState } from "react";

const apartmentContext = createContext();

function ApartmentProviderWrapper({children}) {

    const [apartments, setApartments] = useState(["apartment 1", "apartment 2"])

    useEffect(()=>{
        getApartments();
    }, [])

    const getApartments = () => {
        axios.get('https://ironbnb-m3.herokuapp.com/apartments')
        .then(({data})=>{
            console.log("results: ", data);
            setApartments(data);
        })
        .catch(err => console.log(err));
    }

    return(<apartmentContext.Provider value={{apartments, getApartments}}>
        {children}
    </apartmentContext.Provider>);
}

export { apartmentContext, ApartmentProviderWrapper }