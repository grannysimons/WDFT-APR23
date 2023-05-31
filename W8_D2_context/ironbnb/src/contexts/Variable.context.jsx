import { createContext, useEffect, useState } from "react"; 

const variableContext = createContext();    //creates a context

function VariableProviderWrapper({children}){

    const [userEmail, setUserEmail] = useState('');

    let numbers = [1,2,5,6, 7,43,2,"hello"];
    let userName = "Pepe";

    useEffect(()=>{
        setTimeout(()=>{
            setUserEmail("hi@hi.com");
        }, 2000)
    }, [])


    return(
        <variableContext.Provider value={{numbers, userName, userEmail}}>
            {children}
        </variableContext.Provider>
    );
}

export {variableContext, VariableProviderWrapper};