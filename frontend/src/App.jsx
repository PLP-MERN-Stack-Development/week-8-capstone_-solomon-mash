import './index.css'
import HomePage from './dashboard/HomePage';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import RentorDashboard from './pages/Rentor/RentorDashboard';
function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/become-rentor' element={<RentorDashboard />} />
   </Routes>
  )
}

export default App
