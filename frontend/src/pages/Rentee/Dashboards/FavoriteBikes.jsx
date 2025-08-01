// FavoriteBikes.jsx
import {
  Grid, Card, CardContent, Typography, IconButton, Box, Avatar, Button, Container
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system';

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


const FavoriteBikes = ({favoriteBikes}) => {

  return (
    <Grid container spacing={3}>
      {favoriteBikes.map((bike) => (
        <Grid item xs={12} sm={6} md={4} key={bike.id}>
          <Card>
            <Box position="relative">
              <img src={Object.values(bike.bikeImages)[0]}
              alt={bike.bikeName} style={{ width: "100%", height: 180, objectFit: "contain" }} />
              <IconButton
                size="small"
                sx={{ position: "absolute", top: 8, right: 8, bgcolor: "white" }}
              >
                <FavoriteIcon sx={{ color: "red" }} />
              </IconButton>
            </Box>
            <CardContent>
              <Typography variant="subtitle1" fontWeight={600}>
                {bike.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                by {bike.owner}
              </Typography>
              <Box display="flex" alignItems="center" gap={1} my={1}>
                <StarIcon sx={{ color: "gold" }} fontSize="small" />
                <Typography variant="body2">{bike.rating}</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" gap={0.5}>
                <PlaceIcon fontSize="small" /> {bike.location}
              </Typography>
              <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                <Typography fontWeight={600} color="success.main">Kes.{bike.rentPricePerDay}/day</Typography>
                <Link to="/book-now">
                <ThemeProvider theme={buttonTheme1}>
                    <Button size="small" variant="contained" color="primary">Book Now</Button>
                </ThemeProvider>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FavoriteBikes;
