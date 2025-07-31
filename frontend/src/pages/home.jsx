import { Box, Paper, TextField, Typography, Button, Grid, Avatar } from "@mui/material"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InputAdornment from '@mui/material/InputAdornment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DirectionsBikeOutlinedIcon from '@mui/icons-material/DirectionsBikeOutlined';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Rating from '@mui/material/Rating';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PedalBikeOutlinedIcon from '@mui/icons-material/PedalBikeOutlined';
import { useNavigate } from "react-router-dom";


const theme = createTheme({
  palette: {
    primary: {
      main: '#efb506', // vibrant yellow-gold
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
const buttonTheme1 = createTheme({
  palette: {
    primary: {
      main: '#1c3b4a', // blackish
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
const buttonTheme2 = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // clear color
      contrastText: '#46949d',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          backgroundColor: '#ffffff',
          color: '#46949d',
          '&:hover': {
            backgroundColor: '#618c62',
            color: '#ffffff', 
          },
        },
      },
    },
  },
});
const buttonTheme3 = createTheme({
  palette: {
    primary: {
      main: '#2f6a3f', // light green
      contrastText: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          backgroundColor: '#2f6a3f',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: lighten('#2f6a3f', 0.1), // lighten by 10%
            color: '#ffffff', 
          },
        },
      },
    },
  },
});



const activities =[
    {
        id:'1',
        name:'Browse',
        description:'Search available bikes in your area using our interactive map',
        icon:SearchRoundedIcon
        
    },
    {
        id:'2',
        name:'Book',
        description:'Select your dates and book instantly with our secure payment system',
        icon:CalendarTodayOutlinedIcon

    },
    {
        id:'3',
        name:'Meet',
        description:'Meet the bike owner at the agreed location for a quick handover',
        icon:CheckCircleOutlinedIcon

    },
    {
        id:'4',
        name:'Ride',
        description:'Enjoy your ride and return the bike safely to complete your rental',
        icon:DirectionsBikeOutlinedIcon

    },
]

const reviews = [
    {
        message:'As a college student, Bikely saved me so much money on transportation. I can rent a bike whenever I need one without the commitment of buying.',
        name:'Sarah M.',
        profession:'University Student',
        rating:5,
    },
    {
        message:"I love listing my bikes on Bikely! It's a great way to earn extra income while helping fellow students get around campus",
        name:'Mike R.',
        profession:'Bike Owner',
        rating:5
    },
    {
        message:'The verification system makes me feel safe renting from strangers. Great platform for urban mobility!',
        name:'Emma L.',
        profession:'Urban Commuter',
        rating:4
    }
]
const safetyTips = [
    {
        icon: ShieldOutlinedIcon,
        name: 'Verified Users',
        description:'All users go through identity verification and background checks for your peace of mind'
    },
    {
        icon:StarOutlineOutlinedIcon ,
        name: 'Ratings & Reviews',
        description:'Transparent rating system helps you choose the best bikes and most reliable owners'
    },
    {
        icon: PaymentsRoundedIcon,
        name: 'Secure Payments',
        description:'Protected transactions with instant refunds and damage protection for all parties'
    },
]

const pricingPlans = [ 
    {
        user:'For Renters',
        amount:'$5 - 15',
        rate:'per day',
        themecolor: theme,
        buttonText: 'Start Renting',
        attributes: [
         'Wide variety of bikes available',
         'Damage protection included',
         '24/7 customer support',
         'Flexible rental periods'],
    },
    {
        user:'For Rentors',
        amount:'15%',
        rate:'platform fee',
        buttonText:'List Your Bike',
        themecolor:buttonTheme3,
        attributes: [
         'Earn $100-300+ per month',
         'Insurance coverage provided',
         'Verified renter screening',
         'Easy listing management'],
    },
]
const HomePage = ()=>{
  const navigate = useNavigate();
    
    return (

        <>
        <Box sx={{width: '90%', mx: 'auto', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{width: { xs: '100%', md: '70%' }, mx: 'auto' }}>
        <Box id="hero" sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '80%' }, my: 9, mx: 'auto'}}>
          <Typography
            variant="h3"
            component="h3"
            fontWeight="bold"
            sx={{
              fontSize: { xs: 28, sm: 34, md: 41 },
              textAlign: 'center',
            }}
          >
            Find Your Perfect <span style={{ color: '#2c5674' }}>Bike Rental</span>
          </Typography>

          <Typography
            variant="h3"
            component="h3"
            fontWeight="bold"
            sx={{
              fontSize: { xs: 28, sm: 34, md: 41 },
              textAlign: 'center',
            }}
          >
            Near You
          </Typography>

          <Box
            sx={{
              mt: 2,
              mx: 'auto',
              width: { xs: '100%', sm: '85%', md: '67%' },
            }}
          >
            <Typography
              variant="caption"
              fontSize={{ xs: 14, md: 18 }}
              sx={{
                textAlign: 'center',
                opacity: '60%',
              }}
            >
              Join thousands of students and urban commuters who rent bikes from local owners. Safe, affordable, and
              convenient transportation at your fingertips.
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 3,
              mb: 2,
              mx: 'auto',
              width: { xs: '100%', sm: '90%', md: '67%' },
            }}
          >
            <Paper elevation={5}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  gap: 2,
                  p: 2,
                }}
              >
                <TextField
                  variant="outlined"
                  placeholder="Enter your location..."
                  size="small"
                  fullWidth
                  slotProps={{
                                        input: {
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <LocationOnOutlinedIcon />
                                            </InputAdornment>
                                            )}}} />
                <ThemeProvider theme={theme}>
                  <Button
                  size="small"
                    variant="contained"
                    startIcon={<SearchRoundedIcon />}
                    sx={{ textTransform: 'none', width: { xs: '100%', sm: '120px' } }}
                  >
                    Find Bikes
                  </Button>
              </ThemeProvider>
              </Box>
            </Paper>
          </Box>

          <Box sx={{ mt: 2, mx: 'auto', width: { xs: '100%', sm: '80%', md: '50%' } }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <ThemeProvider theme={buttonTheme1}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      textTransform: 'none',
                      minWidth: '150px',
                      height: '36px',
                    }}

                    onClick={()=>navigate('/browse-bikes')}
                  >
                    Browse Bikes Near You
                  </Button>
                </ThemeProvider>
              </Grid>
              <Grid item>
                <ThemeProvider theme={buttonTheme2}>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: 'none',
                      borderRadius: '3px',
                      borderWidth: '1px',
                      borderColor: '#46949d',
                      minWidth: '150px',
                      height: '36px',
                    }}
                    onClick={()=>navigate('/become-rentor')}
                  >
                    Become a Rentor
                  </Button>
                </ThemeProvider>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
            <Box
      sx={{
        width: '100%',
        minHeight: '50vh',
        my: 1,
        mx: 'auto',
        backgroundColor: '#fbfcfd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: '80%', md: '50%', lg: '45%' },
          backgroundColor: '#e4e9ea',
          borderRadius: '6px',
          mb: 1,
          my: 5,
          p: { xs: 3, sm: 5 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          fontWeight="bold"
          sx={{
            fontSize: { xs: 20, sm: 26 },
            mb: 1,
          }}
        >
          See Available Bikes On the Map
        </Typography>

        <Typography
          variant="caption"
          sx={{
            opacity: '60%',
            fontSize: { xs: 12, sm: 14 },
            mb: 2,
          }}
        >
          Interactive map showing real-time bike availability in your area
        </Typography>

        <Box
          sx={{
            width: '100%',
            minHeight: '300px',
            backgroundColor: '#f4f5f6',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 2,
          }}
        >
          <ThemeProvider theme={buttonTheme1}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<PlayArrowOutlinedIcon />}
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: { xs: 14, sm: 16 },
                px: 3,
              }}
            >
              View Interactive Map
            </Button>
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
            
    <Box
      id="how-it-works"
      sx={{
        width: '100%',
        minHeight: '40vh',
        my: 9,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '95%', sm: '90%', md: '80%' },
          mx: 'auto',
          borderRadius: '6px',
          mb: 1,
          my: 5,
          p: { xs: 3, sm: 5 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '100%', textAlign: 'center', mb: 3 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ fontSize: { xs: 20, sm: 24 } }}
          >
            How Bikely Works
          </Typography>
          <Typography
            variant="body2"
            sx={{ opacity: 0.7, fontSize: { xs: 14, sm: 15 }, mt: 1 }}
          >
            Getting your perfect bike rental is simple and straightforward
          </Typography>
        </Box>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 3, sm: 4 },
            mt: 2,
          }}
        >
          {activities.map((activity) => (
            <Box
              key={activity.id}
              sx={{
                width: { xs: '100%', sm: '45%', md: '30%' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 1.5,
                p: 2,
              }}
            >
              <Avatar sx={{ bgcolor: '#e8ebed' }}>
                <activity.icon sx={{ color: '#467a54' }} />
              </Avatar>

              <Typography
                variant="h6"
                sx={{ fontSize: { xs: 14, sm: 15 }, fontWeight: 600 }}
              >
                {activity.id}. {activity.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{ fontSize: { xs: 12, sm: 13 }, opacity: 0.7 }}
              >
                {activity.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
<Box
      sx={{
        width: '100%',
        minHeight: '50vh',
        my: 1,
        mx: 'auto',
        backgroundColor: '#fbfcfd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '95%', sm: '85%', md: '60%' },
          mx: 'auto',
        borderRadius: '6px',
          my: 2,
          p: { xs: 3, sm: 5 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ width: '100%', textAlign: 'center', mb: 3, }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ fontSize: { xs: 20, sm: 24 } }}
          >
            What Our Users Say
          </Typography>
          <Typography
            variant="body2"
            sx={{ opacity: 0.7, fontSize: { xs: 14, sm: 15 }, mt: 1 }}
          >
            Join thousands of satisfied students and urban commuters
          </Typography>
        </Box>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 2, sm: 3 },
            mt: 2,
          }}
        >
          {reviews.map((review, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '100%', sm: '280px', md: '240px' },
                display: 'flex',
                flexDirection: 'column',
                gap: 1

              }}
            >
              <Paper elevation={5}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'white',
                    height: '250px',
                    gap: 1,
                    justifyContent: 'center',
                    p: 2,
                    borderRadius: '10px',
                  }}
                >
                  <FormatQuoteIcon />
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.7, mb: 2, fontSize: 14 }}
                  >
                    "{review.message}"
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar sx={{ bgcolor: '#e8ebed' }} />
                    <Grid>
                      <Typography variant="body2" fontWeight="bold">
                        {review.name}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        {review.profession}
                      </Typography>
                    </Grid>
                  </Box>

                  <Rating readOnly value={review.rating} />
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
 <Box
      id="safety"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '40vh',
        my: 4,
        mx: 'auto',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: '80%', md: '60%' },
          mx: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 3,
          p: { xs: 3, sm: 5 },
          borderRadius: '6px',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            fontSize={{ xs: 20, sm: 25 }}
          >
            Trust & Safety First
          </Typography>
          <Typography
            variant="body2"
            sx={{ opacity: 0.7 }}
            fontSize={{ xs: 14, sm: 15 }}
          >
            We prioritize your safety with comprehensive verification and protection systems
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 2, sm: 3 },
            mt: 2,
          }}
        >
          {safetyTips.map((tip, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '100%', sm: '260px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 1,
                p: 2,
              }}
            >
              <Avatar sx={{ bgcolor: '#e8ebed', width: 56, height: 56 }}>
                <tip.icon sx={{ color: '#467a54' }} />
              </Avatar>

              <Typography variant="subtitle1" fontWeight="bold" fontSize={14}>
                {tip.name}
              </Typography>

              <Typography
                variant="body2"
                sx={{ opacity: 0.7 }}
                fontSize={13}
              >
                {tip.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
<Box
      id="pricing"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '65vh',
        my: 5,
        mx: 'auto',
        backgroundColor: '#fbfcfd',
        alignItems: 'center',
      }}
>
      <Box
        sx={{
          width: { xs: '90%', sm: '80%', md: '60%' },
          textAlign: 'center',
          mb: 4,
          mt:2
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          fontSize={{ xs: 22, sm: 25 }}
          mt={2}
        >
          Transparent Pricing
        </Typography>
        <Typography
          variant="body2"
          sx={{ opacity: 0.7 }}
          fontSize={{ xs: 14, sm: 15 }}
        >
          No hidden fees, just simple and fair pricing
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: { xs: 3, sm: 4 },
          width: '100%',
          px: 2,
        }}
      >
        {pricingPlans.map((plan, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '100%', sm: '360px' },
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Paper elevation={5} sx={{ borderRadius: 2 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'white',
                  height: '100%',
                  gap: 2,
                  p: 4,
                  borderRadius: '10px',
                }}
              >
                <Typography
                  variant="body1"
                  fontSize={18}
                  fontWeight="bold"
                  textAlign="center"
                >
                  {plan.user}
                </Typography>
                <Typography
                  variant="body1"
                  fontSize={18}
                  fontWeight="bold"
                  textAlign="center"
                  mt={-1}
                >
                  {plan.amount}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.7 }}
                  fontSize={15}
                  textAlign="center"
                  mt={-1}
                >
                  {plan.rate}
                </Typography>

                <Box>
                  {plan.attributes.map((attribute, i) => (
                    <Typography key={i} variant="body1" fontSize={15}>
                      <CheckCircleOutlinedIcon
                        sx={{ color: 'green', mr: 1 }}
                      />
                      {attribute}
                    </Typography>
                  ))}
                </Box>

                <Box display="flex" justifyContent="center" mt={2}>
                  <ThemeProvider theme={plan.themecolor}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ textTransform: 'none' }}
                    >
                      {plan.buttonText}
                    </Button>
                  </ThemeProvider>
                </Box>
              </Box>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
         <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '30vh',
        my: 5,
        px: 2,
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: '75%', md: '60%' },
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: { xs: 3, sm: 5 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          fontSize={{ xs: 22, sm: 25 }}
          mb={1}
        >
          Ready to Start Your Journey?
        </Typography>

        <Typography
          variant="body2"
          sx={{ opacity: 0.5 }}
          fontSize={15}
        >
          Join our community of cyclists and start experiencing the freedom of
        </Typography>
        <Typography
          variant="body2"
          sx={{ opacity: 0.5 }}
          fontSize={15}
          mb={2}
        >
          bike sharing today
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
            mt: 2,
          }}
        >
          <ThemeProvider theme={theme}>
            <Button
              onClick={()=>navigate('/browse-bikes')}

              variant="contained"
              color="primary"
              sx={{ textTransform: 'none' }}
            >
              Browse Bikes Near You
            </Button>
          </ThemeProvider>
          <ThemeProvider theme={buttonTheme2}>
            <Button
            onClick={()=>navigate('/become-rentor')}
              variant="outlined"
              sx={{
                textTransform: 'none',
                borderWidth: '1px',
                borderRadius: '4px',
                borderColor: '#46949d',
              }}
            >
              Become a Rentor
            </Button>
          </ThemeProvider>
        </Box>

        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          mt={4}
          sx={{ opacity: 0.55 }}
        >
          <Grid item display="flex" alignItems="center" gap={1}>
            <GroupOutlinedIcon />
            <Typography variant="subtitle1">10,000+ Users</Typography>
          </Grid>
          <Grid item display="flex" alignItems="center" gap={1}>
            <PedalBikeOutlinedIcon />
            <Typography variant="subtitle1">5,000+ Bikes</Typography>
          </Grid>
          <Grid item display="flex" alignItems="center" gap={1}>
            <StarOutlineOutlinedIcon />
            <Typography variant="subtitle1">4.9/5 Rating</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
        
        </>
    )
}

export default HomePage