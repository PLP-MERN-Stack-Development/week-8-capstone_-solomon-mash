import './index.css'
import HomePage from './dashboard/HomePage';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import RentorDashboard from './pages/Rentor/RentorDashboard';
import BrowseBikes from './pages/Rentee/BrowseBikesNearYou';
import BookNow from './pages/Rentee/BookNow';
function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/become-rentor' element={<RentorDashboard />} />
      <Route path='/browse-bikes' element={<BrowseBikes />} />
      <Route path='/book-now' element={<BookNow />} />
   </Routes>
  )
}

export default App
