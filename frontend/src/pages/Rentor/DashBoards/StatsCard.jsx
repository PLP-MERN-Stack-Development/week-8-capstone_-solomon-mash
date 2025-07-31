import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, Box, Avatar, Stack,Container } from '@mui/material';
import { AttachMoney, DirectionsBike, CalendarToday, Star } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import API from '../../../api';



const goldTheme = createTheme({
  palette: {
    primary: {
      main: '#efb506', // gold 
      contrastText: '#000000',
    },
  },
});



const StatsCards = () => {
  const [statsData, setStatsData]=useState([]);
  const [loading, setLoading]=useState(true);

  const fetchStatsData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await API.get('/analytics/rentor', {
        headers: {
        "Authorization": `Bearer ${token}`,
        }
      });
      setStatsData(res.data);
      console.log(res.data);

    } catch (err) {
      console.error('Failed to fetch analytics data:', err);
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


  return (
    <>
  <ThemeProvider theme={goldTheme}>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3} sx={{width:'260px', height:'120px'}}>
          <Card
            elevation={3}
            sx={{
              borderRadius: 3,
              p: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <CardContent>
              <Stack spacing={2} direction="row" alignItems="center">
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    width: 40,
                    height: 40,
                  }}
                >
                  <AttachMoney />
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Total Earnings
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    Kes. {statsData.netEarningsThisMonth}
                  </Typography>
                </Box>
              </Stack>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                    +12% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3} sx={{width:'260px', height:'120px'}}>
          <Card
            elevation={3}
            sx={{
              borderRadius: 3,
              p: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <CardContent>
              <Stack spacing={2} direction="row" alignItems="center">
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    width: 40,
                    height: 40,
                  }}
                >
                <DirectionsBike />
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Active Bikes
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    1
                  </Typography>
                </Box>
              </Stack>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                1 currently rented
              </Typography>
            </CardContent>
          </Card>
    </Grid>

        <Grid item xs={12} sm={6} md={3} sx={{width:'260px', height:'120px'}}>
          <Card
            elevation={3}
            sx={{
              borderRadius: 3,
              p: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <CardContent>
              <Stack spacing={2} direction="row" alignItems="center">
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    width: 40,
                    height: 40,
                  }}
                >
                  <CalendarToday />
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Total Bookings
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {statsData.totalBookings}
                  </Typography>
                </Box>
              </Stack>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                  +1 this week
              </Typography>
            </CardContent>
          </Card>
    </Grid>

        <Grid item xs={12} sm={6} md={3} sx={{width:'260px', height:'120px'}}>
          <Card
            elevation={3}
            sx={{
              borderRadius: 3,
              p: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <CardContent>
              <Stack spacing={2} direction="row" alignItems="center">
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    width: 40,
                    height: 40,
                  }}
                >
                  <CalendarToday />
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                      Average Rating

                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {statsData.performance?.averageRating}
                  </Typography>
                </Box>
              </Stack>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                  Based on 0 reviews
              </Typography>
            </CardContent>
          </Card>
        </Grid>

  </Grid>
  </ThemeProvider>
  
  </>

  )};

export default StatsCards;
