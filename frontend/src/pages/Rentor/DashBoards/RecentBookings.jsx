import React, {useState, useEffect} from 'react';
import {
  Card, CardHeader, CardContent, Avatar, Typography, Chip, Box, Stack, Divider, Container,
} from '@mui/material';
import API from '../../../api';



const getInitials = (name) => name.split(" ").map(n => n[0]).join("");

const RecentBookings = () =>{
  

  const [recentBookingsData, setRecentBookingData]=useState([]);
  const [loading, setLoading]=useState(true);

  const fetchRecentBookingData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await API.get('/bookings/rentor-bookings', {
        headers: {
        "Authorization": `Bearer ${token}`,
        }
      });
      setRecentBookingData(res.data);
      console.log(res.data);

    } catch (err) {
      console.error('Failed to fetch analytics data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentBookingData();
  }, []);

  const handleReturn = async (bookingId) => {
  try {
    const token = localStorage.getItem("token");
    await API.patch(`/bookings/return/${bookingId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    

    // Refresh the bookings
    fetchRecentBookingData();
  } catch (err) {
    console.error("Error marking booking as returned:", err);
  }
};
const handleActive = async (bookingId) => {
  try {
    const token = localStorage.getItem("token");
    await API.patch(`/bookings/active/${bookingId}`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    

    // Refresh the bookings
    fetchRecentBookingData();
  } catch (err) {
    console.error("Error marking booking as active:", err);
  }
};

  if (loading) {
        return (
          <Container sx={{ py: 6 }}>
            <Typography variant="h6">Loading please wait...</Typography>
          </Container>
        );
      }
  return(
  <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
    <CardHeader
      title="Recent Bookings"
      subheader="Your latest bike rentals and earnings"
      titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
      subheaderTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
    />
    <CardContent>
      <Stack spacing={2}>
        {recentBookingsData.map((booking) => (
          <Box 
            sx={{borderWidth:'2px', borderStyle:"solid", borderColor:'#f2f4f8', borderRadius:'5px', p:'10px'}}
            key={booking._id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={1}
          >
            <Box display="flex" alignItems="center" gap={2}  width='150px'>
              <Avatar>{getInitials(`${booking.user?.first_name || ''} ${booking.user?.last_name || ''}`)} </Avatar>
              <Box>
                <Typography variant="subtitle1" fontWeight={500}>
                  {booking.user?.first_name} {booking.user?.last_name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {booking.bike?.name}
                </Typography>
              </Box>
            </Box>

            <Box textAlign="left" width='100px'>
              <Typography variant="subtitle2" fontWeight="bold">
                Kes. {booking.total}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {booking.rentDuration} days
              </Typography>
            </Box>

          <Box sx={{ width: '100px' }}>
            <Chip
              label={booking.status}
              color={
                booking.status === 'to be picked' ? 'warning' :
                booking.status === 'active' ? 'info' :
                'success'
              }
              size="small"
            />
          </Box>
          {booking.status === 'to be picked' && (
            <Box>
              <Chip
                label="Mark Active"
                color="info"
                variant="outlined"
                clickable
                onClick={() => handleActive(booking._id)}
              />
            </Box>
          )}
          {/* Only show button when status is 'active' */}
          {booking.status === 'active' && (
            <Box>
              <Chip
                label="Mark Returned"
                color="success"
                variant="outlined"
                clickable
                onClick={() => handleReturn(booking._id)}
              />
            </Box>
          )}
          </Box>
        ))}
      </Stack>
    </CardContent>
  </Card>
)};

export default RecentBookings;
