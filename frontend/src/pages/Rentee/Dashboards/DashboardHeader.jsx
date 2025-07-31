// DashboardHeader.jsx
import { Box, Typography, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
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
  <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
    <Box>
      <Typography variant="h4" fontWeight={600}>
        Renter Dashboard
      </Typography>
      <Typography color="text.secondary">
        Manage your bike rentals and discover new rides
      </Typography>
    </Box>
    <Link to="/browse-bikes" style={{ textDecoration: "none" }}>
      <ThemeProvider theme={buttonTheme3}>
        <Button variant="contained" startIcon={<SearchIcon />} sx={{ textTransform: "none" }}>
        Find More Bikes
      </Button>
      </ThemeProvider>
      
    </Link>
  </Box>
);

export default DashboardHeader;
