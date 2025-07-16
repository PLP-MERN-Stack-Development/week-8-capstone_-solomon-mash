import { Box, Paper, TextField, Typography, Button, Grid } from "@mui/material"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';import InputAdornment from '@mui/material/InputAdornment';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system';
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
const HomePage = ()=>{

    return (

        <>
        <Box sx={{width:'90%'}}display='flex' flexDirection='column' mx='auto'>
            <Box sx={{width:'70%'}} mx='auto'>
                <Box sx={{width:'100%'}}>
                    <Box display='flex' flexDirection='column' width='80%' my={9} mx='auto'>
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
        
        
        </>
    )
}

export default HomePage