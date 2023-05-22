function GreetingToSomeone({name, campus}) {
    //props are properties (input values)
    return(<div>
        <h1>Hi {name}</h1>
        <h2>Welcome to campus {campus}</h2>
    </div>);
}

export default GreetingToSomeone;