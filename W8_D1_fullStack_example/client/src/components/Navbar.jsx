import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <ul>
            <li><Link to="/">Home page</Link></li>
            <li><Link to="/projects">Projects</Link></li>
        </ul>
    </div>
  )
}
