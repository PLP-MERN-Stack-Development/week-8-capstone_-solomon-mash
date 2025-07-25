import React, { useEffect, useState } from 'react';
import {
  Box, Typography, TextField, MenuItem, Slider, Button, Card, CardContent,
  CardActions, Chip, Grid, IconButton, InputAdornment, Badge, Select
} from '@mui/material';
import { Search, Tune, Star } from '@mui/icons-material';
import ContextNavbar from "../../components/contextNavbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const buttonTheme1 = createTheme({
  palette: {
    primary: {
      main: '#1c3b4a', // dark black bgcolor
      contrastText: '#e5ebe5',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#1c3b4a',
          color: '#e5ebe5',
          '&:hover': {
            backgroundColor: lighten('#1c3b4a', 0.1), // lighten by 10%
          },
        },
      },
    },
  },
});

const BrowseBikes = () => {
  const [bikeData, setBikeData]=useState([]);
    const [loading, setLoading] = useState(true);
  


    const fetchBikeData = async () => {
    try {
      const res = await axios.get('https://bikely-render.onrender.com/api/bikes');
      setBikeData(res.data);
    } catch (err) {
      console.error('Failed to fetch bikes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBikeData();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <ContextNavbar />
      <Box px={{ xs: 2, md: 6 }} py={5}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Browse Bikes Near You
        </Typography>
        <Typography textAlign="center" mb={4} color="text.secondary">
          Find the perfect bike for your next adventure. Filter by location, price, and features to discover bikes available in your area.
        </Typography>

        {/* Filter Bar */}
        <Grid container spacing={2} alignItems="center" mb={4}  sx={{borderStyle:'solid', borderWidth:'1px', width:'100%', p:1}}>
          <Grid item xs={12} md={4} sx={{width:'350px'}}>
            <TextField
            size='small'
              fullWidth
              variant="outlined"
              placeholder="Enter location..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={6} md={3} width='250px'>
            <TextField select fullWidth  label="Bike type">
              <MenuItem value="" disabled>Bike type</MenuItem>
              <MenuItem value="city">City</MenuItem>
              <MenuItem value="mountain">Mountain</MenuItem>
              <MenuItem value="electric">Electric</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6} md={3} width='250px'>
            <TextField select fullWidth label="Distance">
              <MenuItem value="" disabled>Distance</MenuItem>
              <MenuItem value="1">Under 1 mile</MenuItem>
              <MenuItem value="5">Under 5 miles</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={2} width='150px'>
            <Button fullWidth variant="outlined" startIcon={<Tune />}>
              More Filters
            </Button>
          </Grid>
        </Grid>

        {/* Price Slider */}
        <Box mb={4} >
          <Typography gutterBottom>Price Range:</Typography>
          <Box display='flex' alignItems='center' gap={2}>
              <Slider
            value={[5, 25]}
            min={5}
            max={25}
            valueLabelDisplay="auto"
            sx={{ maxWidth: 300 }}
          />
          <Typography variant="body2">Kes 5 - Kes 300/day</Typography>
          </Box>
          
        </Box>

        {/* Results Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">Bikes available near you</Typography>
          <TextField select size="small" defaultValue="nearest">
            <MenuItem value="nearest">Nearest First</MenuItem>
            <MenuItem value="cheapest">Lowest Price</MenuItem>
            <MenuItem value="highestRated">Highest Rated</MenuItem>
          </TextField>
        </Box>

        {/* Bike Cards */}
        <Grid container spacing={3}display='flex'sx={{maxWidth: '80%', mx:'auto'}}>
          {bikeData.map((bike, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                variant="outlined"
                sx={{
                  height: '350px',
                  width:'350px',
                  borderRadius: 3,
                  boxShadow: 1,
                  transition: '0.3s',
                  '&:hover': { boxShadow: 4 }
                }}
              >
                <Box position="relative">
                  <Box
                    component="img"
                    src={Object.values(bike.bikeImages)[0]}
                    alt={bike.name}
                    sx={{ width: '100%', height: 120, objectFit: 'contain', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                  />
                  <Box
                    position="absolute"
                    top={10}
                    right={10}
                    bgcolor='#1c3b4a'
                    color="white"
                    px={1.5}
                    py={0.5}
                    borderRadius={1}
                    fontSize={12}
                  >
                    Kes {bike.rentPricePerDay}
                  </Box>
                </Box>

                <CardContent>
                  <Typography variant="subtitle2" color="text.secondary">
                    {bike.name}
                  </Typography>
                  <Typography fontWeight="bold" fontSize="1.1rem">
                    {bike.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={0.5}>
                    {bike.location} • {bike.distance}
                  </Typography>
                  <Typography variant="body2">
                    Owner: <strong>{bike.owner}</strong>
                  </Typography>
                  <Box display="flex" alignItems="center" mt={1}>
                    <Star sx={{ fontSize: 18, color: 'gold' }} />
                    <Typography ml={0.5}>{4.2}</Typography>
                  </Box>
                  <Box mt={1} display="flex" gap={1} flexWrap="wrap">
                    {bike.tags.map((feature, idx) => (
                      <Chip
                        key={idx}
                        label={feature}
                        size="small"
                        variant="outlined"
                        sx={{ borderRadius: 1.5 }}
                      />
                    ))}
                  </Box>
                  <ThemeProvider theme={buttonTheme1}>
<Button variant="contained" fullWidth size="small" color='primary' onClick={()=>navigate(`/book-now/${bike._id}`)} sx={{ textTransform: 'none', mt:1 }}>
                    Book Now
                  </Button>
                  </ThemeProvider>
                  
                </CardContent>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default BrowseBikes;
