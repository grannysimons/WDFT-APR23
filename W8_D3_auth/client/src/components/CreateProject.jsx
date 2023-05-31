import { useContext, useState } from "react";
import { projectsContext } from "../contexts/projects.context";

export default function CreateProject() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { createProject } = useContext(projectsContext);

    const submitHandler = (e) => {
        e.preventDefault();
        let newProject = { title, description };
        // createProjectFunc(newProject);
        createProject(newProject)

    }
    return (
        <form onSubmit={submitHandler} className="w-75 mx-auto">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Create project</button>
        </form>
    )
}
