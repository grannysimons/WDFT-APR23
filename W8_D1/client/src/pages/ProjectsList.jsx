import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreateProject from '../components/createProject';

let baseURL = 'http://localhost:5005/api/projects/';

export default function ProjectsList() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get(baseURL)
        .then(({data}) => {
            console.log(data)
            setProjects(data);
            setTimeout(()=>{
                setLoading(false);
            }, 500)
        })
        .catch(err => console.log(err))
    }, [])

    let createProject = (newProj) => {
        //to create a project we need to call the back end root: /api/projects/create so that it can insert the new project in the database:
        axios.post(baseURL + 'create', {project: newProj})
        .then(resp => {
            console.log("correctly created project");
            setProjects([...projects, newProj]);
        })
        .catch(err => console.log(err))
    }

    return (
    <div>
        <h1>PROJECTS</h1>

        <CreateProject createProjectFunc={createProject} />

        {loading && <p>Loading...</p>}

        {!loading && projects.length == 0 && <p>No projects created yet</p>}

        {!loading && projects.map(project => <div key={project._id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link to={`/projects/${project._id}`}>More details</Link>
        </div>)}
    </div>
  )
}
