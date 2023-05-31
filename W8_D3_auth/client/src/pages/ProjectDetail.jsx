import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import CreateTask from '../components/CreateTask';
import { projectsContext } from '../contexts/projects.context';
import { authContext } from '../contexts/auth.context';

let baseURL = 'http://localhost:5005/api/projects/';

export default function ProjectDetail() {

    let { projectId } = useParams();

    const [project, setProject] = useState({});

    const { projects, getProjects } = useContext(projectsContext);
    const { isLoggedIn, loading, getHeaders } = useContext(authContext);

    useEffect(() => {
        getProjects();
    }, []);

    useEffect(() => {
        setProject(projects.find(project => project._id == projectId))
        console.log("projects: ",projects)
    }, [projects]);

    const createTask = (newTask) => {
        axios.post(baseURL + projectId + '/addTask', { task: newTask }, getHeaders())
            .then(resp => {
                //we create a newProject object with the tasks updated with the newTask, and then we update the state so that the component rerenders with the new task:
                let newProject = { ...project };
                newProject.tasks.push(newTask);
                setProject(newProject);
                console.log("project ", newProject)
            })
            .catch(err => console.log(err))
    }

    if(!loading && !isLoggedIn) return <Navigate to="/login" />

    return (
        <div>
            <h1 className="text-center">ProjectDetail</h1>

            <div className="w-75 mx-auto mt-5">
                <div className="card-body">
                    <h5 className="card-title text-center">{project?.title}</h5>
                    <p className="card-text text-center mb-5">{project?.description}</p>
                    <CreateTask createTaskFunc={createTask} />
                    <div className="mt-5">
                    {project && project.tasks && project.tasks.map((task, k) => <div className="card mb-1" key={task._id ? task._id : k}>
                        <div className="card-body">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                        </div>
                    </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
