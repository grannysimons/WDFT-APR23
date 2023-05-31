import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { authContext } from '../contexts/auth.context';

let baseURL = 'http://localhost:5005/api/projects/';

export default function ProjectEdit() {

  const [project, setProject] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);
  // const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const { projectId } = useParams();  //returns an object with the params of the route

  const {getHeader} = useContext(authContext)

  useEffect(()=>{
    axios.get(baseURL + projectId, getHeader())
    .then(({data}) => {
        setProject(data);
        setTitle(data.title);
        setDescription(data.description);
    })
    .catch(err => console.log(err))
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();

    if(title == "" || description == "") setError(true);
    else setError(false);

    let projectUpdate = { title, description }

    axios.post(baseURL + projectId + '/update', {project: projectUpdate})
    .then(resp => {
      // setSubmitted(true);
      navigate("/projects/" + projectId);
      // return <Naviagate to=""> //it is sintactically correct but since it is the moment that axios finished his work, and not an update of a state, it is not going to take into account the component inside the return statement.
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      {/* {submitted && <Navigate to="" />} */}
      <h1>ProjectEdit</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <button>Update project</button>
      </form>
    </div>
  )
}
