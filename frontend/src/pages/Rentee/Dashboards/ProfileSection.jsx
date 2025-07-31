import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Container,
  Avatar,
  Chip,
  Box,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system';
import { useState, useEffect } from "react";
import API from '../../../api';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // vibrant yellow-gold
      contrastText: '#000000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          backgroundColor: '#ffffff',
          color: '#000000',
          '&:hover': {
            backgroundColor: lighten('#efb506', 0.1), // lighten by 10%
          },
        },
      },
    },
  },
});

const getInitials = (name) => name.split(" ").map(n => n[0]).join("");


const ProfileSection = () => {
  const [userInfo, setUserInfo]=useState([]);
  const [loading, setLoading]=useState(true);
  const token = localStorage.getItem('token');
  
  useEffect(() => {
      const fetchUserInfo = async () => {
        try {
          const res = await API.get(`/profile`, {
            headers:{
              'Authorization':`Bearer ${token}`,
            }
          });
          setUserInfo(res.data);
        } catch (err) {
          console.error("Error fetching User Details:", err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUserInfo();
    }, []);

  
 if (loading) {
          return (
            <Container sx={{ py: 6 }}>
              <Typography variant="h6">Loading please wait...</Typography>
            </Container>
          );
        }
  return (
    <Grid container spacing={3} mx='auto'>
      {/* Profile Info */}
      <Box mx='auto'display='flex' gap={2} width='90%' >
          <Grid item xs={12} md={6}>
        <Card
          sx={{
            width:'300px',
            height: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "box-shadow 0.2s ease-in-out",
            "&:hover": { boxShadow: 4 },
          }}
        >
          <CardHeader
            avatar={<PersonIcon color="black" />}
            title="Profile Information"
          />
          <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Box display="flex" alignItems="center" gap={2} mb={2}>
              <Avatar sx={{ width: 50, height: 50, bgcolor: '#f1f5f9', color:'black' }}>
                  {getInitials(`${userInfo?.first_name || ''} ${userInfo?.last_name || ''}`)}              </Avatar>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {userInfo.first_name} {userInfo.last_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {userInfo.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Member since {userInfo.createdAt}
                </Typography>
              </Box>
            </Box>
            <Box mt="auto">
              <ThemeProvider theme={theme}>
                <Button variant="outlined" fullWidth color="primary" sx={{borderStyle:'solid', borderWidth:'2px', borderColor:'#e9ecf2', borderRadius:'5px'}}>
                Edit Profile
              </Button>
              </ThemeProvider>
              
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Payment Methods */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            width:'300px',
            height: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "box-shadow 0.2s ease-in-out",
            "&:hover": { boxShadow: 4 },
          }}
        >
          <CardHeader
            avatar={<CreditCardIcon color="black" />}
            title="Payment Methods"
          />
          <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
              flexWrap="wrap"
              gap={1}
            >
              <Box>
                <Typography variant="subtitle1" fontWeight={500}>
                  •••• •••• •••• 4242
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expires 12/26
                </Typography>
              </Box>
              <Chip label="Default" variant="outlined" color="success" sx={{borderRadius:'5px'}} />
            </Box>
            <Box mt="auto">
              <ThemeProvider theme={theme}>
              <Button variant="outlined" fullWidth color="primary" sx={{borderStyle:'solid', borderWidth:'2px', borderColor:'#e9ecf2', borderRadius:'5px'}}>
                Add Payment Method
              </Button>

              </ThemeProvider>
              
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Preferences */}
      <Grid item xs={12}>
        <Card
          sx={{
            width:'300px',
            height: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "box-shadow 0.2s ease-in-out",
            "&:hover": { boxShadow: 4 },
          }}
        >
          <CardHeader
            avatar={<SettingsIcon color="black" />}
            title="Preferences"
          />
          <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Grid mb={2}>
              <Grid xs={12} sm={4} display='flex' alignItems='center' justifyContent='space-between'  >
                <Typography fontWeight={500}>Email Notifications</Typography>
                <Chip label="Enabled" variant="outlined" color='black'sx={{borderRadius:'4px', height:'25px'}} />
              </Grid>
              <Grid xs={12} sm={4} display='flex' alignItems='center' justifyContent='space-between'mt={1} >
                <Typography fontWeight={500}>SMS Notifications</Typography>
                <Chip label="Disabled" variant="outlined" color='black'sx={{borderRadius:'4px', height:'25px'}} />
              </Grid>
              <Grid xs={12} sm={4} display='flex' alignItems='center' justifyContent='space-between' mt={1} >
                <Typography fontWeight={500}>Location Services</Typography>
                <Chip label="Enabled" variant="outlined" color='black'sx={{borderRadius:'4px', height:'25px'}} />
              </Grid>
            </Grid>
            <Box mt="auto">
              <ThemeProvider theme={theme}>
              <Button variant="outlined" fullWidth color="primary" sx={{borderStyle:'solid', borderWidth:'2px', borderColor:'#e9ecf2', borderRadius:'5px'}}>
                Manage Preferences
              </Button>

              </ThemeProvider>
              
            </Box>
          </CardContent>
        </Card>
      </Grid>
      </Box>
      
    </Grid>
  );
};

export default ProfileSection;
