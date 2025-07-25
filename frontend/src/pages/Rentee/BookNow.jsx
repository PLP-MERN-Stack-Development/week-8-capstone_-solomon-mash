import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import axios from "axios";


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
 const { id: bikeId } = useParams();
  const [rentalDuration, setRentalDuration] = useState(1);
  const [bikeInfo, setBikeInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pickupTime, setPickupTime] = useState("");
  const [returnTime, setReturnTime] = useState("")
  const [first_name, setFirstName]=useState("");
  const [last_name, setLastName]=useState("");
  const [phone_number, setPhoneNumber]=useState("");
  const [email, setEmail]=useState("");
  const [card_number, setCardNumber]=useState("");
  const [expiry_date, setExpiryDate]=useState("");
  const [cvv, setCvv]=useState("");

  const navigate = useNavigate();

  const clearInfo=()=>{
    setPhoneNumber(' ');
    setCardNumber(' ');
    setCvv(' ');
    setExpiryDate(' ');
    setEmail(' ');
    setLastName(' ');
    setFirstName(' ');
    setReturnTime(' ');
    setPickupTime(' ');
  }

  const handleBookingInfo=async()=>{
    const bookingInfo = {
      bike: bikeId,
      rentDuration:rentalDuration,
      pickupTime:pickupTime,
      returnTime:returnTime,
      firstName:first_name,
      lastName:last_name,
      phoneNumber:phone_number,
      email:email,
      cardNumber:card_number,
      expiryDate:expiry_date,
      cvv:cvv,
      total:total,
      subtotal:subtotal,
      serviceFee:serviceFee,
    }
    const res = await fetch("https://bikely-render.onrender.com/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    });

    if (res.ok) {
    const data = await res.json();
    const bookingId = data.bookingId;
    alert("Booking Info Saved");
    navigate(`/booking/receipt/${bookingId}`);
    clearInfo();
    } else {
      const err = await res.json();
      console.error(err);
      alert("Failed to Book.");
    }
  }
  

  useEffect(() => {
    const fetchBike = async () => {
      try {
        const res = await axios.get(`https://bikely-render.onrender.com/api/bikes/${bikeId}`);
        setBikeInfo(res.data);
      } catch (err) {
        console.error("Error fetching bike:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBike();
  }, [bikeId]);


  const calculateTotal = () => {
    
    const days = parseInt(rentalDuration) || 1;
    const rate =
      days >= 7
        ? (bikeInfo.weeklyRate || bikeInfo.rentPricePerDay * 7) / 7
        : bikeInfo.rentPricePerDay || 0;
    const subtotal = rate * days;
    const serviceFee = subtotal * 0.1;
    return {
      subtotal,
      serviceFee,
      total: subtotal + serviceFee,
    };
  };

if (loading) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h6">Loading bike details...</Typography>
      </Container>
    );
  }

  const { subtotal, serviceFee, total } = calculateTotal();
  



  const timeOptions = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", py: 2 }}>
        <Container>
          <Button sx={{color:'black'}} startIcon={<ArrowBackIcon sx={{color:'black'}} />} onClick={() => navigate("/browse-bikes")}>
            Back to Browse
          </Button>
          <Typography variant="h4" fontWeight={600} mt={1} color="black">
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
            label="Rental Duration (days)"
            type="number"
            
            value={rentalDuration>0?rentalDuration:1}
            onChange={(e) => setRentalDuration(e.target.value)}
            fullWidth
            sx={{ mb: 3 }}
          />

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
                    <TextField fullWidth label="First Name" placeholder="John" onChange={(e)=>setFirstName(e.target.value)} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth label="Last Name" placeholder="Doe"onChange={(e)=>setLastName(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Phone Number" placeholder="(555) 123-4567" onChange={(e)=>setPhoneNumber(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth type="email" label="Email" placeholder="john@example.com" onChange={(e)=>setEmail(e.target.value)} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ mt: 3 }}>
              <CardHeader title="Payment Information" avatar={<CreditCardIcon />} />
              <CardContent>
                <TextField fullWidth label="Card Number" placeholder="1234 5678 9012 3456" sx={{ mb: 3 }} onChange={(e)=>setCardNumber(e.target.value)}/>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <TextField fullWidth label="Expiry Date" placeholder="MM/YY" onChange={(e)=>setExpiryDate(e.target.value)} />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField fullWidth label="CVV" placeholder="123" onChange={(e)=>setCvv(e.target.value)} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
{/* Summary Card */}
        <Grid item sx={{minWidth:'30%'}}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" gap={2}>
                <img
                  src={bikeInfo?.bikeImages?.[0]}
                  alt={bikeInfo?.name}
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: 8,
                    objectFit: "cover",
                  }}
                />
                <Box>
                  <Typography variant="h6">{bikeInfo?.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {bikeInfo?.type}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1} mt={1}>
                    <StarIcon fontSize="small" sx={{ color: "#facc15" }} />
                    <Typography variant="body2" fontWeight={500}>
                      4.8
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      (123 reviews)
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Typography variant="body2">{bikeInfo?.location}</Typography>
              <Typography variant="body2">{bikeInfo?.distance}</Typography>

              {bikeInfo?.tags?.length > 0 && (
                <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
                  {bikeInfo.tags.map((tag, idx) => (
                    <Chip key={idx} label={tag} size="small" variant="outlined" />
                  ))}
                </Box>
              )}

              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle2">Price Breakdown</Typography>
              <Box display="flex" justifyContent="space-between" mt={1}>
                <Typography variant="body2">Subtotal</Typography>
                <Typography variant="body2">Ksh {subtotal}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={1}>
                <Typography variant="body2">Service Fee</Typography>
                <Typography variant="body2">Ksh {serviceFee}</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="space-between" mt={1}>
                <Typography variant="subtitle1" fontWeight={600}>
                  Total
                </Typography>
                <Typography variant="subtitle1" fontWeight={600}>
                  Ksh {total}
                </Typography>
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
                      onClick={handleBookingInfo}
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
