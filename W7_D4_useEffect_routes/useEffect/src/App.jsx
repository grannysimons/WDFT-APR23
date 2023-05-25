import { useEffect, useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import axios from 'axios';

function App() {

  const [showCounter, setShowCounter] = useState(true);
  const [apartments, setApartments] = useState([]);

  //THIS WILL BE EXECUTED AT EVERY LIFECYCLE PHASE: MOUNTING, UPDATING, UNMOUTING
  //https://ironbnb-m3.herokuapp.com/apartments
  // axios.get('https://ironbnb-m3.herokuapp.com/apartments')
  // .then(resp => {
  //   console.log(resp.data);
  //   setApartments(resp.data); //SETS THE STATE => UPDATING PHASE
  // })
  // .catch(err => console.log(err))

  useEffect(()=>{
    axios.get('https://ironbnb-m3.herokuapp.com/apartments')
    .then(resp => {
      console.log(resp.data);
      setApartments(resp.data); //SETS THE STATE => UPDATING PHASE
    })
    .catch(err => console.log(err))
  }, [])

  useEffect(()=>{
    console.log("showCounter was created or updated");
  }, [showCounter]);

  return (
    <>
      {showCounter && <Counter />}
      <button onClick={()=>setShowCounter(!showCounter)}>show/hide</button>
    </>
  )
}

export default App
