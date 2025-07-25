import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import { ArrowBackOutlined, DirectionsBikeOutlined, Menu } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../context/UseAuth';


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
const ContextNavbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const {logout} = useAuth();
  

   const handleLogout = ()=>{
    logout();
    navigate('/');
  }


  return (
    <Box
    id='navbar'
      sx={{
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255,255,255,0.7)',
     
    }}
    >
      <Box
        sx={{
          width: '90%',
          mx: 'auto',
          mt: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Box display='flex' sx={{width:'50%'}} gap={1} alignItems='center'>
            {/* Back To Home */}
        <Grid display="flex" gap={1} alignItems="center"onClick={()=>navigate('/')} sx={{cursor:'pointer'}} >
          <ArrowBackOutlined sx={{ height: '15px', width: '15px' }} />
          <Typography variant="subtitle2" fontSize={11}>
            Back to Home
          </Typography>
        </Grid>
        <Typography variant='h6'>|</Typography>
        {/* Logo */}
        <Grid display="flex" gap={1} alignItems="center">
          <DirectionsBikeOutlined sx={{ height: '16px', width: '16px' }} />
          <Typography variant="subtitle2" fontSize={14} fontWeight='bold'>
            Bikely
          </Typography>
        </Grid>
        </Box>
         

        {/* Hamburger menu icon for small screens */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton onClick={() => setMenuOpen((prev) => !prev)}>
            <Menu />
          </IconButton>
        </Box>

        {/* Links & Buttons */}
        <Box
          sx={{
            display: { xs: menuOpen ? 'flex' : 'none', md: 'flex' },
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
            alignItems: { xs: 'flex-start', md: 'center' },
            mt: { xs: 1, md: 0 },
            width: { xs: '100%', md: 'auto' },
          }}
        >

          {/* if authenticated */}
                    {user? (
                      <>
                      <Button variant="outlined" sx={{ textTransform: 'none' }} onClick={handleLogout}>
            Logout
          </Button>
                      </>
                    ): (
                      <>
                      <Button variant="outlined" sx={{ textTransform: 'none' }} onClick={() => navigate('/login')}>
                      Login
                    </Button>
          
                    <ThemeProvider theme={buttonTheme1}>
                      <Button variant="contained" color="primary" sx={{ textTransform: 'none' }}>
                        Sign Up
                      </Button>
                    </ThemeProvider>
                      </>
          
                    )
                     }
        </Box>
      </Box>
      <Divider sx={{ my: 1 }} />
    </Box>
  );
};

export default ContextNavbar;
