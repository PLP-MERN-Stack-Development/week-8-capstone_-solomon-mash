import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import { DirectionsBikeOutlined } from '@mui/icons-material';
import {Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system';
import Divider from '@mui/material/Divider';

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
const Navbar = ()=>{
    return (
        <>
        <Box sx={{width:'90%', height:'auto', mx:'auto', mt:1}} display='flex' justifyContent='space-between'>
            <Grid display='flex' gap={1} alignItems='center'>
                <DirectionsBikeOutlined  sx={{height:'40px', width:"40px"}}/>
                <Typography variant="subtitle2" fontSize={20}>
                    Bikely
                </Typography>
            </Grid>
            <Box display='flex' alignItems='center' gap={2} >
                <Typography variant='body2'>How it works </Typography>
                <Typography variant='body2'> Safety </Typography>
                <Typography variant='body2'>Pricing </Typography>

                <Button variant='outlined'  sx={{ textTransform: 'none' }}> Login </Button>
                <ThemeProvider theme={theme}>
                    <Button variant='contained' color='primary'sx={{ textTransform: 'none' }}> Sign Up </Button>
                </ThemeProvider>
                

            </Box>
        </Box>
        <Divider sx={{my:1}}/>
        
        </>
    )
}

export default Navbar