import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../contexts/auth.context'

export default function Navbar() {

  const { isLoggedIn, user, loading } = useContext(authContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <span className="navbar-brand">Hi {!loading && isLoggedIn ? user.username : 'annon user'}!!</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <span className="nav-link"><Link to="/">Home page</Link></span>
            </li>
            <li className="nav-item">
              <span className="nav-link"><Link to="/projects">Projects</Link></span>
            </li>
            {/* added */}
            {!loading && isLoggedIn && <>
              <li className="nav-item">
                <span className="nav-link"><Link to="/logout">Logout</Link></span>
              </li>
            </>}
            {!loading && !isLoggedIn && <>
              <li className="nav-item">
                <span className="nav-link"><Link to="/signup">Sign up</Link></span>
              </li>
              <li className="nav-item">
                <span className="nav-link"><Link to="/login">Login</Link></span>
              </li>
            </>}
          </ul>
        </div>
      </div>
    </nav>
  )
}
