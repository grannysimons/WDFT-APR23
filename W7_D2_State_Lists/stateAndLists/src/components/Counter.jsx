import { useState } from 'react';
import './Counter.css';

function Counter(){

    const [ticks, setTicks] = useState(0);
        //ticks: first position of the array -> the value of the state (READ ONLY)
        //setTicks: secon position of the array -> a function that sets a new value for the state
        //every time state updates -> component RE-RENDERS!!!!
        //useState -> HOOKS
    const [color, setColor] = useState("light");

    const increaseTicks = () => {
        setTicks(ticks + 1);
    }
    const decreaseTicks = () => {
        setTicks(ticks - 1);
    }
    const changeDark = () => {
        console.log("light-dark change");

        let newColor = "";
        if(color == "light") newColor = "dark";
        else newColor = "light";

        setColor(newColor);
    }

    return(<div className={"counter "+color}>
        <h1>Counter</h1>
        <p>You clicked {ticks} times</p>
        <button onClick={increaseTicks}>+</button>
        <button onClick={decreaseTicks}>-</button>
        <div>
            <select onChange={changeDark}>
                <option value="light">light</option>
                <option value="dark">dark</option>
            </select>
        </div>
    </div>);
}

export default Counter;