import HomePage from '../pages/home';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../index.css';
import { Box } from '@mui/material';

const Home =()=>{
    return (
    <>
      <Navbar />

      <HomePage />

      <Footer />
    </>
    )

}

export default Home 

