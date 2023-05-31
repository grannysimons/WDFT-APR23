import React, { useContext, useState } from 'react'
import axios from 'axios';
import Alert from '../components/Alert';
import { authContext } from '../contexts/auth.context';
import { Navigate } from 'react-router-dom';

let baseUrl = 'http://localhost:5005/auth';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {isAuthenticated, isLoggedIn, loading} = useContext(authContext);

  const submitHandler = (e) => {
    e.preventDefault();

    //do submit things:

    if(username == '' || password == '') {
      console.log("error: fields missing");
      setError("error: fields missing")
      return;
    } 
    axios.post(baseUrl + '/login', {username, password})
    .then(({data}) => {
        let jwt = data.authToken;
        localStorage.setItem('authToken', jwt);
        isAuthenticated();
    })
    .catch(err => setError('Could not finish the process, try again'))
  }

  if(!loading && isLoggedIn) return <Navigate to="/" />

  return (
    <div>
      <h1 className="text-center">Login</h1>
      <form onSubmit={submitHandler} className="w-75 mx-auto">
        {error != '' && <Alert message={error} />}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}
