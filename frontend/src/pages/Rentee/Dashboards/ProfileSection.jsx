import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Avatar,
  Chip,
  Box,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system';

const theme = createTheme({
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
            backgroundColor: lighten('#efb506', 0.1),
          },
        },
      },
    },
  },
});

const getInitials = (name) => name.split(" ").map(n => n[0]).join("");

const ProfileSection = ({ userInfo }) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {/* Profile Info */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
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
              <Avatar sx={{ width: 50, height: 50, bgcolor: '#f1f5f9', color: 'black' }}>
                {getInitials(`${userInfo?.first_name || ''} ${userInfo?.last_name || ''}`)}
              </Avatar>
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
                <Button
                  variant="outlined"
                  fullWidth
                  color="primary"
                  sx={{ borderStyle: 'solid', borderWidth: '2px', borderColor: '#e9ecf2', borderRadius: '5px' }}
                >
                  Edit Profile
                </Button>
              </ThemeProvider>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Payment Methods */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            minWidth:'300px',
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
              <Chip label="Default" variant="outlined" color="success" sx={{ borderRadius: '5px' }} />
            </Box>
            <Box mt="auto">
              <ThemeProvider theme={theme}>
                <Button
                  variant="outlined"
                  fullWidth
                  color="primary"
                  sx={{ borderStyle: 'solid', borderWidth: '2px', borderColor: '#e9ecf2', borderRadius: '5px' }}
                >
                  Add Payment Method
                </Button>
              </ThemeProvider>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Preferences */}
      <Grid item xs={12} md={8}>
        <Card
          sx={{
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
            <Grid container spacing={1} mb={2}>
              <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="space-between" alignItems="center">
                <Typography fontWeight={500}>Email Notifications</Typography>
                <Chip label="Enabled" variant="outlined" color="default" sx={{ borderRadius: '4px', height: '25px' }} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="space-between" alignItems="center">
                <Typography fontWeight={500}>SMS Notifications</Typography>
                <Chip label="Disabled" variant="outlined" color="default" sx={{ borderRadius: '4px', height: '25px' }} />
              </Grid>
              <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="space-between" alignItems="center">
                <Typography fontWeight={500}>Location Services</Typography>
                <Chip label="Enabled" variant="outlined" color="default" sx={{ borderRadius: '4px', height: '25px' }} />
              </Grid>
            </Grid>
            <Box mt="auto">
              <ThemeProvider theme={theme}>
                <Button
                  variant="outlined"
                  fullWidth
                  color="primary"
                  sx={{ borderStyle: 'solid', borderWidth: '2px', borderColor: '#e9ecf2', borderRadius: '5px' }}
                >
                  Manage Preferences
                </Button>
              </ThemeProvider>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProfileSection;
