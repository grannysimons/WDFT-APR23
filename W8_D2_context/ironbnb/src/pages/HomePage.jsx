import Navbar from "../components/Navbar";
import { useContext } from "react";
import {variableContext} from '../contexts/Variable.context';


export default function HomePage() {

  let {numbers, userName, userEmail} = useContext(variableContext);

  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>
      <p>Hello {userName}!</p>
      {userEmail != '' && <p>email: {userEmail}</p>}
    </div>
  )
}
