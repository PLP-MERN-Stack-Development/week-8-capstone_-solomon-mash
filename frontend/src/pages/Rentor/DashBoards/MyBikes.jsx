import { Grid, Container,Typography } from '@mui/material';
import BikeCard from './BikeCard';


const MyBikes = ({bikesData}) => {

  
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
