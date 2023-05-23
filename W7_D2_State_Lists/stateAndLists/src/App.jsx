import './App.css'
import Counter from './components/Counter'
import MovieList from './components/MovieList'

function App() {
  console.log("hi from the body of app component");

  return (
    <>
        <MovieList />
        <Counter />
        <Counter />
    </>
  )
}

export default App
