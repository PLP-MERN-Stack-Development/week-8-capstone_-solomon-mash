import { Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import { ArrowBackOutlined, DirectionsBikeOutlined, Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../context/UseAuth';


const DashboardNavbar = () => {
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
         {user?.role == 'rentor' && (

        <Typography variant="subtitle2" fontSize={11} sx={{cursor:'pointer'}} onClick={()=>navigate('/')}>
                      Home
                    </Typography>
          ) }


          {/* if authenticated */}
                    {user? (
                      <>
                      
          <Typography variant="subtitle2" fontSize={11} sx={{cursor:'pointer'}} onClick={handleLogout}>
                      Logout
                    </Typography>
                      </>
                    ): (
                      <>
                     
                    <Typography variant="subtitle2" fontSize={11} sx={{cursor:'pointer'}} onClick={() => navigate('/login')}>
                      Login
                    </Typography>
          
             
                    <Typography variant="subtitle2" fontSize={11} sx={{cursor:'pointer'}} fontWeight='bold' onClick={() => navigate('/register')}>
                      Sign Up
                    </Typography>
                      </>
          
                    )
                     }
        </Box>
      </Box>
      <Divider sx={{ my: 1 }} />
    </Box>
  );
};

export default DashboardNavbar;
