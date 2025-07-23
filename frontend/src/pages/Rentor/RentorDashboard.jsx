import { Link } from "react-router-dom";
import {
  Box, Button, Container, Typography, Grid, Card, CardContent, CardHeader, TextField,
  Avatar, IconButton
} from "@mui/material";
import { ArrowBack, BikeScooter,Shield, People, TrendingUp, Star, CameraAlt, AccessTime } from "@mui/icons-material";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ContextNavbar from "../../components/contextNavbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Footer from "../../components/footer";

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

const theme = createTheme({
  palette: {
    primary: {
      main: '#efb506', //whitish bgcolor
      contrastText: '#000000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#efb506',
          color: '#000000',
          '&:hover': {
            backgroundColor: lighten('#efb506', 0.1), // lighten by 10%
          },
        },
      },
    },
  },
});

const BecomeRentor = () => {
  const benefits = [
    {
      icon: <AttachMoneyOutlinedIcon />,
      title: "Earn Extra Income",
      description: "Make $50-200+ per month by sharing your bike when you're not using it"
    },
    {
      icon: <Shield />,
      title: "Protected & Insured",
      description: "Every rental is covered by our comprehensive insurance policy"
    },
    {
      icon: <People />,
      title: "Help Your Community",
      description: "Support sustainable transportation and help students save money"
    },
    {
      icon: <TrendingUp />,
      title: "Flexible Schedule",
      description: "Set your own availability and pricing - you're in complete control"
    }
  ];

  const steps = [
    { number: "1", title: "List Your Bike", description: "Upload photos and details about your bike in just 5 minutes" },
    { number: "2", title: "Set Your Price", description: "Choose competitive rates based on our smart pricing suggestions" },
    { number: "3", title: "Meet & Handover", description: "Meet renters safely in public locations for easy bike exchanges" },
    { number: "4", title: "Get Paid", description: "Receive payments automatically after each successful rental" }
  ];

  const testimonials = [
    {
      name: "Maria S.",
      role: "Graduate Student",
      earnings: "$180/month",
      quote: "My bike was just sitting in storage. Now it's helping other students and earning me coffee money!",
      rating: 5
    },
    {
      name: "David L.",
      role: "Local Resident",
      earnings: "$120/month",
      quote: "Great way to meet people in the community while making some extra cash on the side.",
      rating: 5
    },
    {
      name: "Jennifer K.",
      role: "Faculty Member",
      earnings: "$95/month",
      quote: "Love that I'm helping reduce car dependency on campus. The process is so simple!",
      rating: 5
    }
  ];

  return (
    <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh" }}>
      {/* Header */}
      <ContextNavbar />

      {/* Hero Section */}
      <Box sx={{ py: 10, bgcolor: "#f5f8f5" }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Turn Your Bike Into a <span style={{ color: "#FF9800" }}>Money Maker</span>
          </Typography>
          <Typography variant="h6" color="text.secondary" mb={4}>
            Join thousands of bike owners earning extra income by sharing their bikes with students and commuters in their community.
          </Typography>
          <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} justifyContent="center" gap={2} mb={6}>
            <ThemeProvider theme={buttonTheme1}>
            <Button size="large" variant="contained">Start Earning Today</Button>

            </ThemeProvider>
            <ThemeProvider theme={theme}>
            <Button size="large" variant="contained" color='primary'>Calculate Earnings</Button>

            </ThemeProvider>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <Typography variant="h4" fontWeight='bold'>$150</Typography>
              <Typography variant="body2" color="text.secondary">Average monthly earnings</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" fontWeight='bold'>5 min</Typography>
              <Typography variant="body2" color="text.secondary">Setup time</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" fontWeight='bold'>100%</Typography>
              <Typography variant="body2" color="text.secondary">Insurance covered</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" align="center" fontWeight='bold'  mb={1}>
          Why Become a Bikely Rentor?
        </Typography>
        <Typography align="center" color="text.secondary" mb={4}>
          Join a community of bike owners who are making a difference while earning extra income.
        </Typography>
        <Grid container spacing={4}>
          {benefits.map((item, i) => (
            <Grid item key={i} maxWidth='260px' minWidth='240px'>
              <Card variant="outlined" sx={{ textAlign: "center", p: 3 }}>
                <Avatar sx={{ color: "green", mx: "auto", mb: 2 }}>
                  {item.icon}
                </Avatar>
                <Typography variant="h6" fontWeight={600}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.description}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works */}
      <Box sx={{ bgcolor: "#f5f8f5", py: 10 }} display='flex' flexDirection='column' >
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" fontWeight={600}  mb={2}>
            How It Works
          </Typography>
          <Typography align="center" color="text.secondary" mb={6}>
            Getting started is simple and takes just a few minutes
          </Typography>
          <Grid container spacing={4} display='flex' alignItems='center' justifyContent='center'>
            {steps.map((step, i) => (
              <Grid item xs={10} sm={6} md={3} key={i} width='180px'>
                <Box textAlign="center">
                  <Avatar sx={{color:'green', mx: "auto", mb: 2 }}>{step.number}</Avatar>
                  <Typography variant="h6">{step.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{step.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h4" align="center" fontWeight={600} mb={2}>
          What Our Rentors Say
        </Typography>
        <Typography align="center" color="text.secondary" mb={6}>
          Real stories from bike owners earning with Bikely
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((t, i) => (
            <Grid item xs={12} md={4} key={i}  sx={{minWidth:'190px', maxWidth:'320px'}}>
              <Card sx={{ p: 3 }}>
                <Box display="flex" gap={0.5} mb={1}>
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} sx={{ color: "#fbc02d", fontSize: 20 }} />
                  ))}
                </Box>
                <Typography variant="body2" color="text.secondary" fontStyle="italic" mb={2}>"{t.quote}"</Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Typography fontWeight={600}>{t.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{t.role}</Typography>
                  </Box>
                  <Typography variant="caption" sx={{ bgcolor: "black", color: "#fff", px: 1.5, py: 0.5, borderRadius: 1 }}>
                    {t.earnings}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

            <Box sx={{ bgcolor: "#f5f7f8", py: 8 }}>
      <Container maxWidth="sm">
        <Card sx={{ borderRadius: 3 }}>
          <CardHeader
            title="Get Started in Minutes"
            subheader="Fill out this quick form and we’ll help you list your first bike"
            titleTypographyProps={{
              align: "center",
              fontWeight: "bold",
              variant: "h6",
            }}
            subheaderTypographyProps={{
              align: "center",
              variant: "body2",
              color: "text.secondary",
            }}
          />
          <CardContent>
            <Box display="flex" flexDirection="column" gap={2}>
              <Box display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
                <TextField
                  fullWidth
                  label="First Name"
                  placeholder="Enter your first name"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  placeholder="Enter your last name"
                  variant="outlined"
                />
              </Box>

              <TextField
                fullWidth
                label="Email Address"
                placeholder="Enter your email"
                variant="outlined"
                type="email"
              />

              <TextField
                fullWidth
                label="Location"
                placeholder="City, State or University"
                variant="outlined"
              />

              <TextField
                fullWidth
                label="What type of bike do you have?"
                placeholder="e.g., City bike, Mountain bike, Electric bike"
                variant="outlined"
              />

              <TextField
                fullWidth
                multiline
                rows={4}
                label="Why do you want to rent out your bike?"
                placeholder="Tell us about your motivation..."
                variant="outlined"
              />
    <ThemeProvider theme={buttonTheme1}>
            <Button
                fullWidth
                variant="contained"
                size="large"
                startIcon={<CameraAltOutlinedIcon />}
                sx={{ textTransform: "none", fontWeight: 600 }}
              >
                Continue & Upload Photos
              </Button>
    </ThemeProvider>
              

              <Typography
                variant="caption"
                color="text.secondary"
                align="center"
              >
                By continuing, you agree to our{" "}
                <a href="/terms" style={{ color: "inherit" }}>
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" style={{ color: "inherit" }}>
                  Privacy Policy
                </a>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
      {/* Safety Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h4" align="center" fontWeight={600} mb={1}>
          Your Safety & Security
        </Typography>
        <Typography align="center" color="text.secondary" mb={6}>
          We've built comprehensive protections so you can rent with confidence
        </Typography>
        <Grid container spacing={4}  display='flex' justifyContent='center'>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Avatar sx={{ bgcolor: "success.light", color: "success.dark", mx: "auto", mb: 2 }}>
                <Shield />
              </Avatar>
              <Typography variant="h6">Insurance Coverage</Typography>
              <Typography variant="body2" color="text.secondary">
                Full protection against theft, damage, and liability during rentals
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Avatar sx={{ bgcolor: "info.light", color: "info.dark", mx: "auto", mb: 2 }}>
                <People />
              </Avatar>
              <Typography variant="h6">Verified Renters</Typography>
              <Typography variant="body2" color="text.secondary">
                All renters go through ID verification and background checks
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Avatar sx={{ bgcolor: "purple.100", mx: "auto", mb: 2 }}>
                <AccessTime />
              </Avatar>
              <Typography variant="h6">24/7 Support</Typography>
              <Typography variant="body2" color="text.secondary">
                Get help anytime with our dedicated customer support team
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
          <Footer />

    </Box>
  );
};

export default BecomeRentor;
