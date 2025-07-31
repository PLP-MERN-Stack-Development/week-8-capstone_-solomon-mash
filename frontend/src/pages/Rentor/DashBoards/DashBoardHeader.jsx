import React from 'react';
import { Typography, Button, Stack } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system';

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
        containedPrimary: {
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

const DashboardHeader = () => (
  <Stack direction="row" justifyContent="space-between" alignItems="center">
    <div>
      <Typography variant="h4" fontWeight="bold">Rentor Dashboard</Typography>
      <Typography variant="body2" color="text.secondary">
        Manage your bikes and track your earnings
      </Typography>
    </div>
    <ThemeProvider theme={buttonTheme3}>
      <Button component={Link} color='primary'   to="/upload-bike" variant="contained" startIcon={<Add />}>
      Add New Bike
    </Button>
    </ThemeProvider>
    
  </Stack>
);

export default DashboardHeader;
