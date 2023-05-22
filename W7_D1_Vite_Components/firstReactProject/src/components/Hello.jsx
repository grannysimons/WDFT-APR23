//basic component sintax

function Hello({student}) {  //FUNCTIONAL COMPONENT
    const {name, lastname} = student;
    return(<div>
        <h1>Hello everyone!</h1>
    </div>);
}

export default Hello;