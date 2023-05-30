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
        axios.get(baseURL)
        .then(({data}) => {
            setProjects(data);
            setLoading(false);
        })
        .catch(err => console.log(err))
    }

    let createProject = (newProj) => {
        //to create a project we need to call the back end root: /api/projects/create so that it can insert the new project in the database:
        axios.post(baseURL + 'create', {project: newProj})
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