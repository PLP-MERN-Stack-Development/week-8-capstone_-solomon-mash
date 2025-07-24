import { Box, Button, Paper, TextField, Typography, Grid} from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { DirectionsBikeOutlined, Facebook, Google } from '@mui/icons-material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system';
import { useNavigate } from "react-router-dom";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import {useState} from 'react';
import axios from "axios";
import useAuth from '../context/UseAuth';



const buttonTheme1 = createTheme({
  palette: {
    primary: {
      main: '#1c3b4a',
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
            backgroundColor: lighten('#1c3b4a', 0.1),
          },
        },
      },
    },
  },
});

const optionButtonTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedPrimary: {
          backgroundColor: '#ffffff',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#f3f5f6',
          },
          '&:active':{
            backgroundColor:'#f8f9f9'
          }
        },
      },
    },
  },
});

const socialButtonTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
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
            backgroundColor: '#efb506',
          },
        },
      },
    },
  },
});

const Register = () => {
  const { login }=useAuth();
  const navigate = useNavigate();
  const [role, setRole]=useState('');
  const [first_name, setFirstName]=useState('');
  const [last_name, setLastName]=useState('');
  const [email, setEmail]=useState('');
  const [phone, setPhoneNumber]=useState('');
  const [password, setPassword]=useState('');
  const [confirmPassword, setConfirmPassword]=useState('');

  const clearFields=()=>{
    setRole('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
  }
  const handleRegister= async(e)=>{
    e.preventDefault();
    if(first_name=='' || last_name==''||email==''||phone==''||password==''||confirmPassword==''){
      alert('This fields are required');
    }
    try{
        const response = await axios.post('http://localhost:5000/api/auth/register', {first_name, last_name,email,phone,role,password});
        if(response.status=='201'){
          login(response.data.user, response.data.token);
          alert('User registered sucessfully');
          clearFields();
          navigate('/');

        }else if(response.status=='400'){
          alert('User with ',email,'already exists');
        }
        
        else{
          alert('Something happened. Please try again later')
        }

      }
        catch (error) {
          alert('Something happened. Please try again later',error);
        }
      

  }
  
  return (
       <Box
      display="flex"
      flexDirection="column"
      width="100%"
      bgcolor="#f8f9f9"
      minHeight="100vh"
      justifyContent="center"
      px={2}
      py={4}
    >
      <Box maxWidth={420} mx="auto" width="100%">
        <Box mb={2}>
          <Button
            variant="text"
            startIcon={<ArrowBackOutlinedIcon />}
            onClick={() => navigate("/")}
            size="small"
            
          >
            Back to Home
          </Button>
        </Box>

        <Paper elevation={5} sx={{ px: 3, py: 4 }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Grid container alignItems="center" justifyContent="center" gap={1}>
              <DirectionsBikeOutlined sx={{ height: 20, width: 20 }} />
              <Typography variant="h6" fontSize={14} fontWeight="bold">
                Bikely
              </Typography>
            </Grid>

            <Typography variant="h5" fontWeight="bold" mt={1}>
              Welcome Back
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Create your account to get started
            </Typography>

            {/* Intent Buttons */}
            <Box width="100%" mb={2} alignItems='center'>
              <Typography variant="caption">I want to:</Typography>
              <Grid container spacing={1} mt={1} alignItems='center' display='flex' justifyContent='center'>
                <Grid item xs={12} sm={6}>
                  <ThemeProvider theme={optionButtonTheme}>
                    <Button variant="outlined" fullWidth sx={{
                  minWidth:'150px',
                  textTransform:'none',
                  bgcolor: role === 'client' ? '#f3f5f6' : 'transparent', // highlight selected
    borderColor: role === 'client' ? '#000000' : 'default',
    '&:hover': {
      bgcolor: role === 'client' ? 'l#f3f5f6' : 'action.hover',
                  }}}
                  onClick={()=>setRole('client')}>
                    <Box display="flex" flexDirection="column" alignItems="center" >
                      <DirectionsBikeOutlined />
                      <Typography variant="body1">Rent Bikes</Typography>
                      <Typography variant="caption" sx={{ opacity: "85%" }}>
                        Find Bikes to rent
                      </Typography>
                    </Box>
                  </Button>
                  

      
                 
                  </ThemeProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ThemeProvider theme={optionButtonTheme}>
                    <Button variant="outlined"
                      onClick={()=>setRole('rentor')}
                    sx={{
              minWidth:'150px',
              textTransform:'none',
              bgcolor: role === 'rentor' ? '#f3f5f6' : 'transparent', // highlight selected
    borderColor: role === 'rentor' ? '#000000' : 'default',
    '&:hover': {
      bgcolor: role === 'rentor' ? 'l#f3f5f6' : 'action.hover',
                  }}}

            fullWidth>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <DirectionsBikeOutlined />
                      <Typography variant="body1">List Bikes</Typography>
                      <Typography variant="caption" sx={{ opacity: "85%" }}>
                        Earn money renting
                      </Typography>
                    </Box>
                  </Button>
                  </ThemeProvider>
                  
                </Grid>
              </Grid>
            </Box>

            {/* Form Fields */}
            <Box width="100%" >
              <Grid container spacing={2}width='100%'>
                <Grid item xs={12} sm={6}  width='100%'>
                  <Typography variant="caption" fontWeight="bold">
                    First Name
                  </Typography>
                  <TextField
                  value={first_name}
                  onChange={(e)=>setFirstName(e.target.value)}
                  required
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="First name"
                    slotProps={{
                      input:{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlinedIcon />
                        </InputAdornment>
                      )}
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} width='100%'>
                  <Typography variant="caption" fontWeight="bold">
                    Last Name
                  </Typography>
                  <TextField
                  onChange={(e)=>setLastName(e.target.value)}
                    value={last_name}
                  required
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="Last name"
                  />
                </Grid>
              </Grid>

              <Box mt={2}>
                <Typography variant="caption" fontWeight="bold">
                  Email
                </Typography>
                <TextField
                onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                required
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder="Enter your Email"
                  slotProps={{
                    input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}}
                  sx={{ mb: 2 }}
                />

                <Typography variant="caption" fontWeight="bold">
                  Phone Number
                </Typography>
                <TextField
                  onChange={(e)=>setPhoneNumber(e.target.value)}
                    value={phone}
                required
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder="Enter your phone number"
                  slotProps={{
                    input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}}
                  sx={{ mb: 2 }}
                />

                <Typography variant="caption" fontWeight="bold">
                  Password
                </Typography>
                <TextField
                  onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder="Create a password"
                  type="password"
                  slotProps={{
                    input:{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}}
                  sx={{ mb: 2 }}
                />

                <Typography variant="caption" fontWeight="bold">
                  Confirm Password
                </Typography>
                <TextField
                onChange={(e)=>setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                required
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder="Confirm your password"
                  type="password"
                  slotProps={{
                    input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}}
                  sx={{ mb: 2 }}
                />
              </Box>

              {/* Checkboxes */}
              <Grid container spacing={1} alignItems="center" mb={2}>
                <Grid item xs={12}>
                  <Box display="flex" alignItems="center">
                    <Checkbox defaultChecked size="small" />
                    <Typography variant="body2">
                      I agree to the Terms of Service and Privacy Policy
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" alignItems="center">
                    <Checkbox defaultChecked size="small" />
                    <Typography variant="body2">
                      I'd like to receive updates about new features and promotions
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              {/* Submit */}
              <ThemeProvider theme={buttonTheme1}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ textTransform: "none", mb: 2 }}
                  onClick={handleRegister}
                >
                  Create Account
                </Button>
              </ThemeProvider>

              {/* Social */}
              <Typography
                variant="body2"
                textAlign="center"
                sx={{ opacity: 0.7 }}
                mb={2}
              >
                or continue with
              </Typography>

              <Grid container spacing={1} justifyContent="center">
                <Grid item>
                  <ThemeProvider theme={socialButtonTheme}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<Google />}
                      sx={{
                        textTransform: "none",
                        minWidth: 125,
                        height: 32,
                        borderColor: "#46949d",
                        borderRadius: 2,
                      }}
                    >
                      Google
                    </Button>
                  </ThemeProvider>
                </Grid>

                <Grid item>
                  <ThemeProvider theme={socialButtonTheme}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<Facebook />}
                      sx={{
                        textTransform: "none",
                        minWidth: 125,
                        height: 32,
                        borderColor: "#46949d",
                        borderRadius: 2,
                      }}
                    >
                      Facebook
                    </Button>
                  </ThemeProvider>
                </Grid>
              </Grid>

              {/* Sign In */}
              <Typography variant="body2" textAlign="center" mt={3}>
                Already have an account?{" "}
                <span style={{ color: "#46949d", cursor: "pointer" }} onClick={()=>navigate('/login')}>Sign In</span>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Register;
