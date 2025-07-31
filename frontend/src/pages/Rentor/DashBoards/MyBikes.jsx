import React,{useState, useEffect} from 'react';
import { Grid, Container,Typography } from '@mui/material';
import BikeCard from './BikeCard';
import API from '../../../api';


const MyBikes = () => {
  const [bikesData, setBikeData]=useState([]);
  const [loading, setLoading]=useState(true);

  const fetchStatsData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await API.get('/bikes/users/rentor', {
        headers: {
        "Authorization": `Bearer ${token}`,
        }
      });
      setBikeData(res.data);
      console.log(res.data);

    } catch (err) {
      console.error('Failed to fetch bike data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatsData();
  }, []);
  if (loading) {
        return (
          <Container sx={{ py: 6 }}>
            <Typography variant="h6">Loading please wait...</Typography>
          </Container>
        );
      }
  
  return(
  <Grid container spacing={3}>
    {bikesData.map(bike => (
      <Grid item xs={12} sm={6} md={4} key={bike.id}>
        <BikeCard bike={bike} />
      </Grid>
    ))}
  </Grid>
)};

export default MyBikes;
