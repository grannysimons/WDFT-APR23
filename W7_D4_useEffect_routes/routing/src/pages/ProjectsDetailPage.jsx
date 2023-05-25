import {useParams, useSearchParams} from 'react-router-dom';
import projectsJSON from '../projects-data.json';

function ProjectsDetailPage() {

    const { projectId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get("user"));
    console.log(searchParams.get("number"));

    const currentProject = projectsJSON.find(project => project._id === projectId)
    console.log(currentProject);

    return(
        <div>
            <h1>{currentProject.name}</h1>
            <p>{currentProject.description}</p>
            <p>Technologies: {currentProject.technologies}</p>
            <p>year: {currentProject.year}</p>
        </div>
    );
}

export default ProjectsDetailPage;