import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectsDetailPage from './pages/ProjectsDetailPage';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage student="asdadssad"/>}/>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage />}/>
        <Route path='/projects/:projectId' element={<ProjectsDetailPage />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </>
  )
}

export default App
