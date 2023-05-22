import './Greeting.css';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

function Greeting() {

    let student = {
        firstName: "Ana",
        lastName: "Martínez"
    }

    const {firstName, lastName} = student;

    // let heading = <h1>Hi {student.firstName} {student.lastName} from heading variable</h1>
    // let heading = <h1>Hi {firstName} {lastName} from heading variable with object destructuring</h1>
    let heading = <h1>Hi {firstName.toUpperCase()} {lastName.toUpperCase()} from heading variable with object destructuring</h1>

    // let heading2 = document.createElement("h1");
    // heading2.innerHTML = "Hi students from heading variable";
    // body.appendChild(heading2);

    let idName = "greeting";

    return (<div id={idName}>
        {heading}
        <img src={reactLogo} alt="" />
        <br />
        <img src={viteLogo} alt="" />
        <img src="http://picsum.photos/300/200" alt="" />
    </div>);
}

export default Greeting;