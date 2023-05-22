import Hello from './components/Hello.jsx';
import Hello2 from './components/Hello2.jsx';
import Greeting from './components/Greeting.jsx';
import GreetingToLisa from './components/GreetingToLisa.jsx';
import GreetingToPedro from './components/GreetingToPedro.jsx';
import GreetingToToni from './components/GreetingToToni.jsx';
import GreetingToSomeone from './components/GreetingToSomeone.jsx';
import Navbar from './components/Navbar.jsx';
import ReactPlayer from 'react-player';

function App() {
  return (
    <>
      <Navbar />
      <Hello student={{name:"Pepe", lastname: "Lopez"}}/>
      <Hello2 name="pepe" lastname="Lopez"/>
      <Greeting />
      <GreetingToLisa />
      <GreetingToPedro />
      <GreetingToToni />
      <GreetingToSomeone name="Mich" campus="Barcelona"/>
      <GreetingToSomeone name="Camila" campus="Barcelona"/>
      <GreetingToSomeone name="Erika" campus="asdasddas"/>
      <ReactPlayer url='https://youtu.be/EMk6nom1aS4' controls="true"/>
    </>
  )
}

export default App  //module.exports = App
