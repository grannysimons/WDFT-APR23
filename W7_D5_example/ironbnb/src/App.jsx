import { Routes, Route} from 'react-router-dom';
import Apartments from './pages/Apartments';
import ApartmentDetail from './pages/ApartmentDetail';
import ApartmentCreate from './pages/ApartmentCreate';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apartments/create" element={<ApartmentCreate />} />
          <Route path="/apartments/:apartmentId" element={<ApartmentDetail />} />
          <Route path="/apartments" element={<Apartments />}/>
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
