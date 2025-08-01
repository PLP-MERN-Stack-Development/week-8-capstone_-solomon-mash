import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Box,
  Button,
  Chip,
  Avatar,
  useMediaQuery,
  Container,
  IconButton
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import StarIcon from "@mui/icons-material/Star";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system';
import {useState,useEffect} from 'react';
import API from '../../../api';
import { FavoriteOutlined, FavoriteBorder } from "@mui/icons-material";


const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // vibrant yellow-gold
      contrastText: '#000000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          backgroundColor: '#ffffff',
          color: '#000000',
          '&:hover': {
            backgroundColor: lighten('#efb506', 0.1), // lighten by 10%
          },
        },
      },
    },
  },
});


const RentalList = ({ type }) => {
  const [rentalData,setRentalData]=useState([]);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [loading, setLoading]=useState(true);
  const token = localStorage.getItem('token');

  const [favorites, setFavorites] = useState({});
  
  useEffect(() => {
    const fetchRecentRentalData = async () => {
      try {
        const res = await API.get('/client/rentals/current', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRentalData(res.data);
      } catch (err) {
        console.error('Failed to fetch recent rentals data:', err);
      } finally {
        setLoading(false);
      }
    };

    const fetchFavorites = async () => {
      try {
        const res = await API.get('/client/favorites', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const favMap = {};
        res.data.forEach((bike) => {
          favMap[bike._id] = true;
        });
        setFavorites(favMap);
      } catch (err) {
        console.error("Failed to fetch favorites", err);
      }
    };

    fetchRecentRentalData();
    fetchFavorites();
  }, [token]);

  const toggleFavorite = async (bikeId) => {
    try {
      if (favorites[bikeId]) {
        await API.delete(`/client/favorites/${bikeId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFavorites((prev) => ({ ...prev, [bikeId]: false }));
      } else {
        await API.post(`/client/favorites/${bikeId}`, null, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFavorites((prev) => ({ ...prev, [bikeId]: true }));
      }
    } catch (err) {
      console.error("Error toggling favorite", err);
    }
  };


 
  if (loading) {
        return (
          <Container sx={{ py: 6 }}>
            <Typography variant="h6">Loading please wait...</Typography>
          </Container>
        );
      }

  return (
    <Card elevation={3}>
      <CardHeader
        title={type === "current" ? "Current & Upcoming Rentals" : "Rental History"}
        subheader={
          type === "current"
            ? "Manage your active and scheduled bike rentals"
            : "Your past bike rental experiences"
        }
      />
      <CardContent>
        <Grid >
          {rentalData.map((rental) => (
            <Grid item xs={12} key={rental.id} mt={1}>
              <Box
                display="flex"
                gap={2}
                flexDirection={isMobile ? "column" : "row"}
                sx={{
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  p: 2,
                  transition: "box-shadow 0.2s",
                  "&:hover": {
                    boxShadow: 3,
                  },
                }}
              >
                <Avatar
                  variant="rounded"
                  src={Object.values(rental.bike.bikeImages)[0]}
                  alt={rental.bike.name}
                  sx={{
                    width: isMobile ? "100%" : 100,
                    height: isMobile ? 200 : 100,
                    flexShrink: 0,
                    borderRadius: 2,
                    objectFit: "contain",
                  }}
                />
                <Box flex={1}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="wrap"
                    gap={1}
                  >
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {rental.bike.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        by {rental.bike.owner}
                      </Typography>
                    </Box>

              
                      <Chip
                        label={rental.status}
                        color={
                          rental.status === "active"
                            ? "success"
                            : rental.status === "to be picked"
                            ? "black"
                            : "default"
                        }
                        size="small"
                        variant="outlined"
                      />
                  </Box>

                  <Grid container spacing={2} mt={1}>
                    <Grid item xs={6} sm={3}>
                      <Typography variant="body2" color="text.secondary">
                        Start
                      </Typography>
                      <Typography>{rental.createdAt}</Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Typography variant="body2" color="text.secondary">
                        End
                      </Typography>
                      {/* <Typography>{rental.endDate}</Typography> */}
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Typography variant="body2" color="text.secondary">
                        Location
                      </Typography>
                      <Typography display="flex" alignItems="center" gap={0.5}>
                        <PlaceIcon fontSize="small" /> {rental.bike.location}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Typography variant="body2" color="text.secondary">
                        Total
                      </Typography>
                      <Typography fontWeight={600} color="success.main">
                        Kes.{rental.total}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Box mt={2} display="flex" gap={1} flexWrap="wrap">
                    <ThemeProvider theme={theme}>
                      <Button size="small" variant="outlined" sx={{borderStyle:'solid', borderWidth:'2px', borderColor:'#e9ecf2', borderRadius:'5px'}}>
                      {rental.status === "to be picked"? "View Details": rental.status=='complete'? "Book Again":"View Details"}
                    </Button>
                    </ThemeProvider>
                    {rental.status === "active" && (
                      <ThemeProvider theme={theme}>
                      <Button size="small" variant="outlined" sx={{borderStyle:'solid', borderWidth:'2px', borderColor:'#e9ecf2', borderRadius:'5px'}}>
                        Contact Owner
                      </Button>
                      </ThemeProvider>
                    )}
                    {rental.status === "to be picked" && (

                      <ThemeProvider theme={theme}>
                      <Button size="small" variant="outlined" sx={{borderStyle:'solid', borderWidth:'2px', borderColor:'#e9ecf2', borderRadius:'5px'}}>
                         Cancel Booking
                      </Button>
                      </ThemeProvider>
                    )}
                    {rental.status === "completed" && (
                      <ThemeProvider theme={theme}>
                      <Button size="small" variant="outlined" sx={{borderStyle:'solid', borderWidth:'2px', borderColor:'#e9ecf2', borderRadius:'5px'}}>
                        Write Review
                      </Button>
                      </ThemeProvider>
                      
                    )}
                    {rental.status === "completed" && (
                      <IconButton onClick={() => toggleFavorite(rental.bike._id)}>
                        {favorites[rental.bike._id] ? <FavoriteOutlined color="error" /> : <FavoriteBorder />}
                      </IconButton>
                      )}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RentalList;
