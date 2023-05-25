import { useState } from "react";

function CreateTaskForm({createTask}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const clickHandler = () => {
        let newTask = {
            _id: Math.round(Math.random()*10000000000000000000000),
            name: title,
            description: description,
            done: false
          }
        createTask(newTask);
    }

    return (
        <form>
            <h1>Create task</h1>
            <label htmlFor="title">title</label>
            <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <label htmlFor="description">description</label>
            <input type="text" id="description" value={description} onChange={(e)=>setDescription(e.target.value)} />
            <button onClick={clickHandler}>create task</button>
        </form>
    );
}

export default CreateTaskForm;