import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import projectsJSON from '../projects-data.json';

//STYLED COMPONENTS:
const styles = {width: "18rem", color: "blue"}

function ProjectsPage() {

    const [loggedIn, setLoggedIn] = useState(false);

    //redirects!
    // if(!loggedIn) return <Navigate to="/about"/>

    return (
        <div>
            {projectsJSON.map(project => {
                return (
                <div className="card" style={styles} key={project._id}>
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <p className="card-text">{project.year}</p>
                        <Link to={"/projects/" + project._id} >More info</Link>
                    </div>
                </div>) })}
        </div>
    );
}


export default ProjectsPage;