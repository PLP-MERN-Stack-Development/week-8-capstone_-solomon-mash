import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  TextField,
  MenuItem,
  Divider,
  Chip,
} from "@mui/material";
import {
  ArrowBack as ArrowBackIcon,
  Map as MapIcon,
  AccessTime as AccessTimeIcon,
  CalendarMonth as CalendarIcon,
  CreditCard as CreditCardIcon,
  Shield as ShieldIcon,
  Star as StarIcon,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system'



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

const BookNow = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const bikeId = searchParams.get("id") || "1";

  const [rentalDuration, setRentalDuration] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [returnTime, setReturnTime] = useState("");

  const bike = {
    id: bikeId,
    name: "Trek Mountain Bike",
    type: "Mountain Bike",
    owner: "Sarah Chen",
    rating: 4.9,
    reviews: 127,
    location: "Campus Center, University Ave",
    distance: "0.3 miles away",
    dailyRate: 25,
    weeklyRate: 150,
    image: "/placeholder.svg",
    features: ["Helmet included", "Lock included", "GPS tracker", "Insurance covered"],
  };

  const calculateTotal = () => {
    const days = parseInt(rentalDuration) || 1;
    const rate = days >= 7 ? bike.weeklyRate / 7 : bike.dailyRate;
    const subtotal = rate * days;
    const serviceFee = subtotal * 0.1;
    return {
      subtotal,
      serviceFee,
      total: subtotal + serviceFee,
    };
  };

  const { subtotal, serviceFee, total } = calculateTotal();

  const rentalOptions = [
    { label: "1 Day - $25/day", value: "1" },
    { label: "3 Days - $25/day", value: "3" },
    { label: "1 Week - $150/week", value: "7" },
    { label: "2 Weeks - $280/2 weeks", value: "14" },
    { label: "1 Month - $540/month", value: "30" },
  ];

  const timeOptions = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", py: 2 }}>
        <Container>
          <Button startIcon={<ArrowBackIcon />} onClick={() => navigate("/browse-bikes")}>
            Back to Browse
          </Button>
          <Typography variant="h4" fontWeight={600} mt={1}>
            Book Your Bike
          </Typography>
          <Typography color="text.secondary">Complete your reservation</Typography>
        </Container>
      </Box>

      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Booking Form */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader title="Rental Details" />
              <CardContent>
                <TextField
                  select
                  fullWidth
                  label="Rental Duration"
                  value={rentalDuration}
                  onChange={(e) => setRentalDuration(e.target.value)}
                  sx={{ mb: 3 }}
                >
                  {rentalOptions.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </TextField>

                <Grid container spacing={2}>
                  <Grid item xs={6} sx={{width:'120px'}}>
                    <TextField
                      select
                      fullWidth
                      label="Pickup Time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                    >
                      {timeOptions.map((t) => (
                        <MenuItem key={t} value={t}>
                          {t}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={6} sx={{width:'120px'}}>
                    <TextField
                      select
                      fullWidth
                      label="Return Time"
                      value={returnTime}
                      onChange={(e) => setReturnTime(e.target.value)}
                    >
                      {timeOptions.map((t) => (
                        <MenuItem key={t} value={t}>
                          {t}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ mt: 3 }}>
              <CardHeader title="Contact Information" />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField fullWidth label="First Name" placeholder="John" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth label="Last Name" placeholder="Doe" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Phone Number" placeholder="(555) 123-4567" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth type="email" label="Email" placeholder="john@example.com" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ mt: 3 }}>
              <CardHeader title="Payment Information" avatar={<CreditCardIcon />} />
              <CardContent>
                <TextField fullWidth label="Card Number" placeholder="1234 5678 9012 3456" sx={{ mb: 3 }} />
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <TextField fullWidth label="Expiry Date" placeholder="MM/YY" />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField fullWidth label="CVV" placeholder="123" />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Summary Panel */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Box display="flex" gap={2}>
                  <img
                    src={bike.image}
                    alt={bike.name}
                    style={{ width: 96, height: 96, borderRadius: 8, objectFit: "cover" }}
                  />
                  <Box>
                    <Typography variant="h6">{bike.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {bike.type}
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1} mt={1}>
                      <StarIcon fontSize="small" sx={{ color: "#facc15" }} />
                      <Typography variant="body2" fontWeight={500}>
                        {bike.rating}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ({bike.reviews} reviews)
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <MapIcon fontSize="small" color="action" />
                  <Typography variant="body2">{bike.location}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <AccessTimeIcon fontSize="small" color="action" />
                  <Typography variant="body2">{bike.distance}</Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle1" gutterBottom>
                  Included Features
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={1}>
                  {bike.features.map((feature, idx) => (
                    <Chip key={idx} label={feature} size="small" variant="outlined" />
                  ))}
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ mt: 3 }}>
              <CardHeader title="Price Summary" />
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Rental ({rentalDuration || "1"} day{parseInt(rentalDuration) > 1 ? "s" : ""})</Typography>
                  <Typography>${subtotal.toFixed(2)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography>Service fee</Typography>
                  <Typography>${serviceFee.toFixed(2)}</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" justifyContent="space-between" fontWeight="fontWeightBold">
                  <Typography>Total</Typography>
                  <Typography>${total.toFixed(2)}</Typography>
                </Box>
              </CardContent>
            </Card>

            <Box display="flex" alignItems="center" mt={2} gap={1} color="text.secondary">
              <ShieldIcon fontSize="small" />
              <Typography variant="body2">
                Your booking is protected by Bikely's insurance policy
              </Typography>
            </Box>
            <ThemeProvider theme={buttonTheme1}>
            <Button
            color="primary"
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: 3, textTransform:'none' }}
              startIcon={<CalendarIcon />}
            >
              Confirm Booking
            </Button>
            </ThemeProvider>
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BookNow;
