import { useContext, useState } from "react";
import { projectsContext } from "../contexts/projects.context";

export default function CreateProject() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const {createProject} = useContext(projectsContext); 

    const submitHandler = (e) => {
        e.preventDefault();
        let newProject = {title, description};
        // createProjectFunc(newProject);
        createProject(newProject)

    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
            <button>Create project</button>
        </form>
    )
}
