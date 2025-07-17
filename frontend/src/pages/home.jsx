import { Box, Paper, TextField, Typography, Button, Grid, Avatar } from "@mui/material"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';import InputAdornment from '@mui/material/InputAdornment';
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


// ✅ Define full primary palette correctly
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
      main: '#1c3b4a', // vibrant yellow-gold
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
      main: '#ffffff', // vibrant yellow-gold
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
      main: '#2f6a3f', // vibrant yellow-gold
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
    
    return (

        <>
        <Box sx={{width:'90%'}}display='flex' flexDirection='column' mx='auto'>
            <Box sx={{width:'70%'}} mx='auto'>
                <Box sx={{width:'100%'}}>
                    <Box id="hero" display='flex' flexDirection='column' width='80%' my={9} mx='auto'>
                                <Typography variant="h3" component='h3' fontWeight='bold' fontSize={41} sx={{textAlign: 'center'}}>
                                Find Your Perfect <span color="#2c5674"> Bike Rental</span> 
                            </Typography>
                            <Typography variant="h3" component='h3' fontWeight='bold' fontSize={41} sx={{textAlign: 'center'}}>
                                Near You
                            </Typography>
                            <Box display='flex' flexDirection='column' width='67%' mx='auto' mt={1} >
                                <Typography variant="caption" sx={{textAlign:'center', opacity:'60%'}} fontSize={18}>
                                Join thousands of students and urban commuters who rent bikes from local owners. 
                                Safe, affordable, and convenient transportation at your fingertips.
                            </Typography>
                            </Box>
                            <Box display='flex' flexDirection='column' width='67%' mx='auto' mt={1} mb={1}>
                            <Paper elevation={5}>
                                <Box display='flex' alignItems='center' gap={1} m={2} justifyContent='center'>
                                    <TextField variant="outlined" placeholder="Enter your location..." sx={{width:'70%'}}
                                    size="small"
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <LocationOnOutlinedIcon />
                                            </InputAdornment>
                                            )}}} />
                                    <ThemeProvider theme={theme}>
                                        <Button variant="contained" startIcon={<SearchRoundedIcon />}   sx={{ textTransform: 'none' }}>

                                        Find Bikes 
                                        </Button>

                                    </ThemeProvider>
                                </Box>
                            </Paper>
                        </Box>
                        <Box display='flex' flexDirection='column' width='50%' mx='auto' mt={1} alignItems='center'>
                            <Grid display="flex" gap={2}>
                                <ThemeProvider theme={buttonTheme1}>

                                <Button variant='contained' color='primary'sx={{ textTransform: 'none' }}> Browse Bikes Near You </Button>
                                </ThemeProvider>
                                <ThemeProvider theme={buttonTheme2}>

                                <Button variant='outlined'sx={{ textTransform: 'none', borderStyle: 'solid',borderWidth:'1px', borderRadius:"3px", borderColor:"#46949d" }}> Become a Rentor  </Button>
                                </ThemeProvider>
                            </Grid>               
                        </Box> 

                </Box>
                        

                    
                    </Box>

                    
                </Box>
                
            </Box>
            <Box display='flex' flexDirection='column' width='100%' minHeight='50vh' my={9} mx='auto' sx={{backgroundColor:'#fbfcfd'}} >
                <Box display='flex' flexDirection='column' width='45%' mx='auto' backgroundColor='#e4e9ea' justifyContent='center' alignItems='center' sx={{borderRadius:'6px'}} mb={1} p={5} my={5}>
                    <Typography variant="h4" component='h4' fontWeight='bold'>
                        See Available Bikes On the Map
                    </Typography>
                    <Typography variant="caption" sx={{textAlign:'center', opacity:'60%'}} fontSize={11}>
                             Interactive map showing real-time bike availability in your area
                             </Typography>
                                <Box display='flex' flexDirection='column' width='98%' minHeight='300px' mx='auto' backgroundColor='#f4f5f6' justifyContent='center' alignItems='center' sx={{borderRadius:'6px'}} mt={2}>
                                <ThemeProvider theme={buttonTheme1}>
                                    <Button variant="contained" color="primary"  sx={{textTransform:'none', fontWeight:'bold'}}startIcon={<PlayArrowOutlinedIcon />}>View Interactive Map</Button>
                                </ThemeProvider>
                                </Box>
                </Box>

            </Box>
            <Box id="how-it-works" display='flex' flexDirection='column' width='100%' minHeight='40vh' my={9} mx='auto' >
                <Box display='flex' flexDirection='column' width='45%' mx='auto'justifyContent='center' alignItems='center' sx={{borderRadius:'6px'}} mb={1} p={5} my={5}>
                    <Box display='flex' flexDirection='column' width='80%' mx='auto'>
                        <Typography variant="h5"component='h5' fontWeight='bold' fontSize='25px' textAlign='center'>
                            How Bikely Works
                        </Typography>
                        <Typography variant="body2"sx={{opacity:'70%'}} textAlign='center' fontSize='15px'>
                            Getting your perfect bike rental is simple and straightforward
                        </Typography>
                        
                    </Box>
                    <Box display='flex'width='100%' mx='auto' mt={2} gap={2}>
                        {activities.map((activity)=>(
                            <Box display='flex' flexDirection='column' alignItems='center' width='180px' bgcolor='white' gap={1} justifyContent='center' p={2}>
                                <Box display='flex' flexDirection='column' height='40px'>
                                <Avatar sx={{bgcolor:'#e8ebed'}}>
                                    <activity.icon  sx={{color:'#467a54'}}/>
                                </Avatar>
                                </Box>

                                
                                <Typography variant="h3" fontSize='14px'>
                                    {activity.id}. {activity.name}
                                </Typography>
                                <Typography variant="body2"sx={{opacity:'70%'}} textAlign='center' fontSize='12px'>
                                    {activity.description}                      
                                </Typography>
                            </Box>
                        ))}
                        
                        
                    </Box>
                </Box>
                
            </Box>
             <Box display='flex' flexDirection='column' width='100%' minHeight='50vh' my={1} mx='auto' sx={{backgroundColor:'#fbfcfd'}} >
                <Box display='flex' flexDirection='column' width='45%' mx='auto' justifyContent='center' alignItems='center' sx={{borderRadius:'6px'}} mb={1} p={5} my={2}>
                    <Box display='flex' flexDirection='column' width='80%' mx='auto'>
                        <Typography variant="h5"component='h5' fontWeight='bold' fontSize='25px' textAlign='center'>
                            What Our Users Say
                        </Typography>
                        <Typography variant="body2"sx={{opacity:'70%'}} textAlign='center' fontSize='15px'>
                            Join thousands of satisfied students and urban commuters
                        </Typography>
                        
                    </Box>
                    <Box display='flex'width='100%' mx='auto' mt={2} gap={2} alignItems='center' justifyContent='center'>
                        {reviews.map((review)=>(
                        
                            <Box display='flex' flexDirection='column' width='230px' gap={1}>
                               <Paper elevation={5}>
                                <Box display='flex' flexDirection='column' width='230px' bgcolor='white' height='210px' gap={1} justifyContent='center' p={1} borderRadius='10px'>
                                    <FormatQuoteIcon />
                                <Typography variant="h3" fontSize='14px' sx={{opacity:'70%'}} mb={2}>
                                    " {review.message} "
                                </Typography>
                                
                                <Box display='flex' flexDirection='column' height='45px'>
                                    <Box display='flex' alignItems='center' gap={1}>

                                        <Avatar sx={{bgcolor:'#e8ebed'}}>
                                        </Avatar>
                                        <Grid display='flex' flexDirection='column'>
                                            <Typography variant="body2" fontWeight='bold'>
                                                {review.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{opacity:'70%'}}>
                                                {review.profession}
                                            </Typography>
                                        </Grid>
                                    
                                    </Box>

                                </Box>
                                <Rating readOnly name="read-only" value={review.rating}/>

                                </Box>
                               </Paper>
                               
                                
                                
                            </Box>
                        ))}
                        
                        
                    </Box>
                </Box>
                
            </Box>
            <Box id="safety" display='flex' flexDirection='column' width='100%' minHeight='40vh' my={2} mx='auto'>
                <Box display='flex' flexDirection='column' width='45%' mx='auto'justifyContent='center' alignItems='center' sx={{borderRadius:'6px'}} mb={1} p={5} my={2}>
                    <Box display='flex' flexDirection='column' width='80%' mx='auto'>
                        <Typography variant="h5"component='h5' fontWeight='bold' fontSize='25px' textAlign='center'>
                            Trust & Safety First
                        </Typography>
                        <Typography variant="body2"sx={{opacity:'70%'}} textAlign='center' fontSize='15px'>
                            We prioritize your safety with comprehensive verification and protection systems
                        </Typography>
                        
                    </Box>
                    <Box display='flex'width='100%' mx='auto' mt={2} gap={2}justifyContent='center'>
                        {safetyTips.map((tip)=>(
                            <Box display='flex' flexDirection='column' alignItems='center' width='220px' bgcolor='white' gap={1} justifyContent='center' p={2}>
                                <Box display='flex' flexDirection='column' height='40px'>
                                <Avatar sx={{bgcolor:'#e8ebed'}}>
                                    <tip.icon  sx={{color:'#467a54'}}/>
                                </Avatar>
                                </Box>
                                <Typography variant="h3" fontSize='14px'>
                                    {tip.name}
                                </Typography>
                                <Typography variant="body2"sx={{opacity:'70%'}} textAlign='center' fontSize='12px'>
                                    {tip.description}                      
                                </Typography>
                            </Box>
                        ))}
                        
                        
                    </Box>
                </Box>
                
            </Box>
            <Box id="pricing" display='flex' flexDirection='column' width='100%' minHeight='50vh' my={3} mx='auto' sx={{backgroundColor:'#fbfcfd'}} >
                <Box display='flex' flexDirection='column' width='45%' mx='auto' justifyContent='center' alignItems='center' sx={{borderRadius:'6px'}} mb={1} p={5} my={2}>
                    <Box display='flex' flexDirection='column' width='80%' mx='auto'>
                        <Typography variant="h5"component='h5' fontWeight='bold' fontSize='25px' textAlign='center'>
                            Transparent Pricing
                        </Typography>
                        <Typography variant="body2"sx={{opacity:'70%'}} textAlign='center' fontSize='15px'>
                                No hidden fees, just simple and fair pricing
                        </Typography>
                        
                    </Box>
                    <Box display='flex'width='100%' mx='auto' mt={2} gap={2} alignItems='center' justifyContent='center' >
                        {pricingPlans.map((plan)=>(
                        
                            <Box display='flex' flexDirection='column' width='340px' gap={1} >
                               <Paper elevation={5}>
                                <Box display='flex' flexDirection='column' width='340px' bgcolor='white' height='300px' gap={2}  p={5} borderRadius='10px'>
                                    
                                <Typography variant="body1" fontSize='18px' fontWeight='bold' textAlign='center'>
                                    {plan.user}
                                </Typography>
                                <Typography variant="body1" fontSize='18px' mt={"-15px"}fontWeight='bold' textAlign='center'>
                                    {plan.amount}
                                </Typography>
                                <Typography variant="body2"sx={{opacity:'70%'}} mt={"-20px"} textAlign='center' fontSize='15px' mb={1}>
                                    {plan.rate}
                                </Typography>
                                
                                <Box display='flex' flexDirection='column'>
                                    {plan.attributes.map((attribute)=>(
                                        <Typography variant="body1" fontSize={16} >
                                            <CheckCircleOutlinedIcon  sx={{color:'green', mr:2}}/>
                                            {attribute}
                                        </Typography>
                                    ))}
                                    

                                </Box>

                                <Box display='flex' justifyContent='center'>
                                    <ThemeProvider theme={plan.themecolor}>
                                        <Button variant="contained" color="primary">{plan.buttonText} </Button> 

                                    </ThemeProvider>
                                </Box>
                                </Box>
                               </Paper>
                               
                                
                                
                            </Box>
                        ))}
                        
                        
                    </Box>
                </Box>
                
            </Box>
            <Box display='flex' flexDirection='column' width='100%' minHeight='30vh' my={2} mx='auto' >
                <Box display='flex' flexDirection='column' width='55%' mx='auto'justifyContent='center' alignItems='center' sx={{borderRadius:'6px'}} mb={1} p={5} my={2}>
                    <Box display='flex' flexDirection='column' width='80%' mx='auto'>
                        <Typography variant="h5"component='h5' fontWeight='bold' fontSize='25px' textAlign='center'>
                            Ready to Start Your Journey?
                        </Typography>
                        <Typography variant="body2"sx={{opacity:'50%'}} textAlign='center' fontSize='15px'>
                                Join our community of cyclists and start experiencing the freedom of 
                        </Typography>
                        <Typography variant="body2"sx={{opacity:'50%'}} textAlign='center' fontSize='15px'>
                                bike sharing today
                        </Typography>
                        
                    </Box>
                    <Box display='flex'width='100%' mx='auto' mt={2} gap={2}justifyContent='center'>
                         <ThemeProvider theme={theme}>

                                <Button variant='contained' color='primary'sx={{ textTransform: 'none' }}> Browse Bikes Near You </Button>
                                </ThemeProvider>
                                <ThemeProvider theme={buttonTheme2}>

                                <Button variant='outlined'sx={{ textTransform: 'none', borderStyle: 'solid',borderWidth:'1px', borderRadius:"3px", borderColor:"#46949d" }}> Become a Rentor  </Button>
                                </ThemeProvider>
                        
                        
                    </Box>
                    <Box display='flex' width='100%' mx='auto' gap={2} mt={4} justifyContent='center'>
                        <Grid display='flex'gap={1} sx={{opacity:'55%'}}>
                            <GroupOutlinedIcon />
                            <Typography variant="subtitle1">
                                10,000+ Users
                            </Typography>
                        </Grid>
                        
                        <Grid display='flex'gap={1}sx={{opacity:'55%'}}>
                            <PedalBikeOutlinedIcon />
                            <Typography variant="subtitle1">
                                5,000+ Bikes
                            </Typography>
                        </Grid>
                        <Grid display='flex'gap={1}sx={{opacity:'55%'}}>
                            <StarOutlineOutlinedIcon />
                            <Typography variant="subtitle1">
                                4.9/5 Rating
                            </Typography>
                        </Grid>
                    </Box>
                </Box>
                
            </Box>
        
        </>
    )
}

export default HomePage