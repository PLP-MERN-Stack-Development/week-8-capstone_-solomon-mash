import './index.css'
import HomePage from './dashboard/HomePage';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import RentorDashboard from './pages/Rentor/RentorDashboard';
import BrowseBikes from './pages/Rentee/BrowseBikesNearYou';
import BookNow from './pages/Rentee/BookNow';
import UploadBikePhotos from './pages/Rentor/uploadBikePhotos';
import Receipt from './components/Receipt';
import MainRentorDashboard from './pages/Rentor/DashBoards/MainRentorDashboard';
import MainRenterDashboard from './pages/Rentee/Dashboards/MainRenterDashboard';
function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/become-rentor' element={<RentorDashboard />} />
      <Route path='/browse-bikes' element={<BrowseBikes />} />
      <Route path='/book-now/:id' element={<BookNow />} />
      <Route path='/upload-bike' element={<UploadBikePhotos />} />
      <Route path="/booking/receipt/:id" element={<Receipt />} />
      <Route path="/dashboard" element={<MainRentorDashboard />} />
      <Route path='/client-dashboard' element={<MainRenterDashboard />} />

   
   </Routes>
  )
}

export default App
