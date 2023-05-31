import axios from "axios";
import { createContext, useEffect, useState } from "react";

let baseURL = 'http://localhost:5005/api/projects/';

const projectsContext = createContext();

function ProjectProviderWrapper({children}) {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
       getProjects();
    }, []);

    let getProjects = () => {
        let token = localStorage.getItem('authToken');
        axios.get(baseURL, {headers: {authorization: `Bearer ${token}`}})
        .then(({data}) => {
            setProjects(data);
            setTimeout(()=>{
                setLoading(false);
            }, 2000)
        })
        .catch(err => console.log(err))
    }

    let createProject = (newProj) => {
        //to create a project we need to call the back end root: /api/projects/create so that it can insert the new project in the database:
        let token = localStorage.getItem('authToken');
        axios.post(baseURL + 'create', {project: newProj}, {headers: {authorization: `Bearer ${token}`}})
        .then(resp => {
            console.log("correctly created project");
            setProjects([...projects, newProj]);
        })
        .catch(err => console.log(err))
    }

    return(<projectsContext.Provider value={{projects, loading, createProject, getProjects}}>
        {children}
    </projectsContext.Provider>);
}

export { projectsContext, ProjectProviderWrapper }