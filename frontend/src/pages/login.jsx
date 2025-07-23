import { Box, Button, Paper, TextField, Typography, Grid, useMediaQuery } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { DirectionsBikeOutlined, Facebook, Google } from '@mui/icons-material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

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

const Login = () => {
  const navigate = useNavigate();
  const muiTheme = useTheme();
  const isSmall = useMediaQuery(muiTheme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      bgcolor="#f8f9f9"
      minHeight="100vh"
      justifyContent="center"
      px={2}
    >
      <Box maxWidth={isSmall ? "100%" : "500px"} mx="auto" width="100%">
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

        <Paper elevation={5} sx={{ opacity: 0.95, px: 3, py: 4 }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Grid container alignItems="center" justifyContent="center" gap={1}>
              <DirectionsBikeOutlined sx={{ height: 20, width: 20 }} />
              <Typography variant="h6" fontSize={14} fontWeight="bold">Bikely</Typography>
            </Grid>

            <Typography variant="h5" fontWeight="bold" mt={1}>Welcome Back</Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Sign in to your account to continue
            </Typography>

            <Box width="100%" mb={2}>
              <Typography variant="caption" fontWeight="bold">Email</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your Email"
                size="small"
                sx={{ mb: 2 }}
               slotProps={{
                                        input: {
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailOutlinedIcon />
                                            </InputAdornment>
                                            )}}} />

              <Typography variant="caption" fontWeight="bold">Password</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your password"
                type="password"
                size="small"
                sx={{ mb: 2 }}
               slotProps={{
                                        input: {
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <LockOutlinedIcon />
                                            </InputAdornment>
                                            )}}} />

              <Grid container justifyContent="space-between" alignItems="center" mb={2}>
                <Grid item display="flex" alignItems="center">
                  <Checkbox defaultChecked size="small" />
                  <Typography variant="body2">Remember me</Typography>
                </Grid>
                <Typography variant="body2" sx={{ cursor: 'pointer' }}>
                  Forgot Password
                </Typography>
              </Grid>

              <ThemeProvider theme={buttonTheme1}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ textTransform: "none", mb: 2 }}
                >
                  Sign In
                </Button>
              </ThemeProvider>

              <Typography variant="body2" textAlign="center" sx={{ opacity: 0.7 }} mb={2}>
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

              <Typography variant="body2" textAlign="center" mt={3}>
                Don’t have an account? <span style={{ color: "#46949d", cursor: "pointer" }} onClick={()=>navigate('/register')}>Sign up</span>
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Typography variant="caption" textAlign="center" display="block" mt={2} color="text.secondary">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
