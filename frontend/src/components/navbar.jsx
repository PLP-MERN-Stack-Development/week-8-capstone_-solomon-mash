import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import { DirectionsBikeOutlined, Menu } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../context/UseAuth';

const theme = createTheme({
  palette: {
    primary: {
      main: '#efb506',
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
            backgroundColor: lighten('#efb506', 0.1),
          },
        },
      },
    },
  },
});

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

const scrollTo = (id) => {
  const section = document.getElementById(id);
  const navbar = document.getElementById('navbar'); // Add this ID to your navbar

  if (section && navbar) {
    const navbarHeight = navbar.offsetHeight;
    const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  setMenuOpen(false);
};


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
        {/* Logo */}
        <Grid display="flex" gap={1} alignItems="center">
          <DirectionsBikeOutlined sx={{ height: '40px', width: '40px' }} />
          <Typography variant="subtitle2" fontSize={20}>
            Bikely
          </Typography>
        </Grid>

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
          <Typography
            variant="body2"
            onClick={() => scrollTo('how-it-works')}
            sx={{ cursor: 'pointer' }}
          >
            How it works
          </Typography>
          <Typography
            variant="body2"
            onClick={() => scrollTo('safety')}
            sx={{ cursor: 'pointer' }}
          >
            Safety
          </Typography>
          <Typography
            variant="body2"
            onClick={() => scrollTo('pricing')}
            sx={{ cursor: 'pointer' }}
          >
            Pricing
          </Typography>
          {/* if authenticated */}
          {user? (
            <>
            <Button variant="outlined" sx={{ textTransform: 'none' }}>
            Logout
          </Button>
            </>
          ): (
            <>
            <Button variant="outlined" sx={{ textTransform: 'none' }} onClick={() => navigate('/login')}>
            Login
          </Button>

          <ThemeProvider theme={theme}>
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

export default Navbar;
