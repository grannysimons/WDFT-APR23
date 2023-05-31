import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreateProject from '../components/createProject';
import { projectsContext } from '../contexts/projects.context';
import { authContext } from '../contexts/auth.context';

let baseURL = 'http://localhost:5005/api/projects/';

export default function ProjectsList() {

    const { projects, loading } = useContext(projectsContext);
    const {loading: loadingAuth, isLoggedIn} = useContext(authContext);

    useEffect(() => {

    }, [])

    return (
        <div className="p-5">
            <h1 className="text-center">PROJECTS</h1>

            {!loadingAuth && isLoggedIn && <CreateProject />}

            {loading && <div className="w-100 text-center mt-5 mb-5"><div className="spinner-border text-warning" role="status"><span className="visually-hidden">Loading...</span></div></div>}

            {!loading && projects.length == 0 && <p>No projects created yet</p>}

            <div className="row w-75 mx-auto mt-5">
                {!loading && projects.map((project) =>
                    <div className="col-4 p-1" key={project._id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <Link to={`/projects/${project._id}`} className='btn btn-primary'>More details</Link>
                            </div>
                        </div>
                    </div>
                    // <div key={project._id}>
                    //     <h2>{project.title}</h2>
                    //     <p>{project.description}</p>
                    //     <Link to={`/projects/${project._id}`}>More details</Link>
                    // </div>
                )}
            </div>
        </div>
    )
}
