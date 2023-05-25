import { useState, useEffect } from 'react';
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
        // console.log("light-dark change");

        let newColor = "";
        if(color == "light") newColor = "dark";
        else newColor = "light";

        setColor(newColor);
    }

    // this executes every time an update happens
    // setInterval(()=>{
    //     setTicks(ticks + 1); //this causes an update to the component
    // }, 1000);

    //USEEFFECT:
    useEffect(()=>{
        // console.log("hi from useEffect when ticks creates and changes");
    }, [ticks]);

    // console.log("hi from ANY PHASE OF THE LIFECYCLE OF THE COMPONENT: MOUNTING, UPDATING OF ANY STATE AND UNMOUNTING");

    useEffect(()=>{
        // console.log("hi from useEffect when color creates and changes");
    }, [color]);

    useEffect(()=>{
        console.log("hi from useEffect when it first renders");
        setInterval(()=>{
            setTicks(ticks => ticks + 1); //this causes an update to the component
        }, 1000);

        return ()=>{
            console.log("unmounting phase!!!!!");
        }
    }, []);

    // console.log("Hello from the body of the component (function)");

    /*
        LIFECYCLE PHASES:
        1. "Rendering" -> MOUNTING (MONTAJE)
        2. "Re-renders" -> UPDATING (state changes and it "reprints")
        3. "Unrendering" -> UNMOUNTING (DESMONTAJE)
    */

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