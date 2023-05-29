import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CreateTask from '../components/CreateTask';

let baseURL = 'http://localhost:5005/api/projects/';

export default function ProjectDetail() {

    let { projectId } = useParams();

    const [project, setProject] = useState({});

    useEffect(()=>{
        axios.get(baseURL + projectId)
        .then(({data}) => {
            console.log(data);
            setProject(data);
        })
        .catch(err => console.log(err))
    }, []);
    
    const createTask = (newTask) => {
        axios.post(baseURL + projectId + '/addTask', {task: newTask})
        .then(resp => {
            //we create a newProject object with the tasks updated with the newTask, and then we update the state so that the component rerenders with the new task:
            let newProject = {...project};
            newProject.tasks.push(newTask);
            setProject(newProject);
            console.log("project ", newProject)
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <h1>ProjectDetail</h1>
        <p>Title: {project.title}</p>
        <p>Description: {project.description}</p>
        <CreateTask createTaskFunc={createTask}/>
        {project.tasks && project.tasks.map((task, k) => <div key={task._id ? task._id : k}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>)}
    </div>
  )
}
