import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Paper,
  Typography,
  Divider,
  Button,
  Stack,
} from '@mui/material';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import PrintIcon from '@mui/icons-material/Print';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Receipt = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const receiptRef = useRef();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get(`https://bikely-render.onrender.com/api/bookings/${id}`);
        setBooking(res.data);
        setTimeout(() => window.print(), 500); // Auto print
      } catch (err) {
        console.error(err);
      }
    };

    fetchBooking();
  }, [id]);

  const handleClose = () => {
    navigate('/');
  };

  if (!booking) {
    return <Typography textAlign="center" mt={5}>Loading your receipt...</Typography>;
  }

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    pickupTime,
    returnTime,
    rentDuration,
    serviceFee,
    subtotal,
    total,
    bike,
  } = booking;

  return (
    <Box p={3} maxWidth="600px" margin="auto">
      <Paper elevation={6} sx={{ p: 4 }} ref={receiptRef}>
        {/* Header */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <DirectionsBikeIcon fontSize="large" sx={{ color: '#2e7d32' }} />
            <Typography variant="h4" fontWeight="bold">
              Bikely
            </Typography>
          </Box>
          <Typography variant="subtitle1" color="text.secondary">
            Receipt #: <strong>{id.slice(-6).toUpperCase()}</strong>
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Thank You Message */}
        <Box textAlign="center" mb={3}>
          <CheckCircleIcon sx={{ fontSize: 40, color: 'green' }} />
          <Typography variant="h6" fontWeight="bold" color="green" mt={1}>
            Booking Confirmed!
          </Typography>
          <Typography variant="body1">
            Thank you, {firstName}, for choosing Bikely. Below is your receipt.
          </Typography>
        </Box>

        <Stack spacing={3}>
          {/* Customer Info */}
          <Box>
            <Typography variant="h6" gutterBottom>Customer Details</Typography>
            <Typography><strong>Name:</strong> {firstName} {lastName}</Typography>
            <Typography><strong>Email:</strong> {email}</Typography>
            <Typography><strong>Phone:</strong> {phoneNumber}</Typography>
          </Box>

          {/* Booking Info */}
          <Box>
            <Typography variant="h6" gutterBottom>Booking Info</Typography>
            <Typography><strong>Bike ID:</strong> {bike._id}</Typography>
            <Typography><strong>Bike Model:</strong> {bike.name}</Typography>
            <Typography><strong>Pickup Time:</strong> {pickupTime}</Typography>
            <Typography><strong>Return Time:</strong> {returnTime}</Typography>
            <Typography><strong>Rental Duration:</strong> {rentDuration} {rentDuration === 1 ? 'day' : 'days'}</Typography>
          </Box>

          {/* Payment Info */}
          <Box>
            <Typography variant="h6" gutterBottom>Payment Summary</Typography>
            <Typography><strong>Subtotal:</strong> KES {subtotal.toLocaleString()}</Typography>
            <Typography><strong>Service Fee:</strong> KES {serviceFee.toLocaleString()}</Typography>
            <Typography variant="h6" fontWeight="bold" mt={1}>
              Total Paid: KES {total.toLocaleString()}
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography color="green" fontWeight="bold" textAlign="center" mt={2}>
          ✅ Kindly present this receipt to the bike owner when picking up your bike.
        </Typography>
      </Paper>

      {/* Actions */}
      <Stack direction="row" spacing={2} mt={4} justifyContent="center">
        <Button variant="outlined" color="primary" onClick={() => window.print()} startIcon={<PrintIcon />}>
          Print Again
        </Button>
        <Button variant="contained" onClick={handleClose}>
          Back to Home
        </Button>
      </Stack>
    </Box>
  );
};

export default Receipt;
