import { Link, Route, Routes } from "react-router-dom";
import FilterForm from "./FilterForm";

export default function Navbar() {
   
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/">Home page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/apartments">Apartments list</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/apartments/create">Create apartment</Link>
                        </li>
                    </ul>
                    {/* <Routes>
                        <Route path="/apartments" element={} />
                    </Routes> */}
                    
                </div>
            </div>
        </nav>
    )
}
