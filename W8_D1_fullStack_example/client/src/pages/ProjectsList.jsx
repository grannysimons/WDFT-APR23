import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreateProject from '../components/createProject';
import { projectsContext } from '../contexts/projects.context';

let baseURL = 'http://localhost:5005/api/projects/';

export default function ProjectsList() {

    const { projects, loading } = useContext(projectsContext);

    useEffect(()=>{
        
    }, [])

    return (
    <div>
        <h1>PROJECTS</h1>

        <CreateProject />

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
