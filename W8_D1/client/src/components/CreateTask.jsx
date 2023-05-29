import React, { useState } from 'react'

export default function CreateTask({createTaskFunc}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    const submitHandler = (e) => {
        e.preventDefault();

        let newTask = { title, description };
        createTaskFunc(newTask);
    }
    return (
    <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <button>Create task</button>
    </form>
  )
}
