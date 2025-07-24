import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Typography,
  IconButton,
  Box,
  Grid,
} from "@mui/material";
import { Calculator, DollarSign, TrendingUp} from "lucide-react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system'


const bikeTypes = ["Road Bike", "Mountain Bike", "Hybrid Bike", "Electric Bike", "City Bike"];
const conditions = ["Excellent", "Good", "Fair"];



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
export const CalculateEarningsModal = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [bikeType, setBikeType] = useState("");
  const [condition, setCondition] = useState("");
  const [dailyRate, setDailyRate] = useState("");
  const [availableDays, setAvailableDays] = useState("");

  const handleClose = () => setOpen(false);

  const calculateEarnings = () => {
    const rate = parseFloat(dailyRate) || 0;
    const conditionMultiplier = condition === "Excellent" ? 1 : condition === "Good" ? 0.9 : 0.8;

    const daily = rate * conditionMultiplier;
    const weekly = daily * 7 * 0.9;
    const monthly = daily * 30 * 0.8;

    return { daily, weekly, monthly };
  };

  const earnings = calculateEarnings();

  return (
    <>
      <span onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
        {children}
      </span>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between",width:'450px' }}>
          <Box display="flex" alignItems="center" gap={1}>
            <Calculator size={20} />
            Calculate Your Earnings
          </Box>
          <IconButton onClick={handleClose}>
            <CloseOutlinedIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{width:'450px'}}>
          <Grid container spacing={3} sx={{display:'flex', flexDirection:'column'}}>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Bike Type"
                value={bikeType}
                onChange={(e) => setBikeType(e.target.value)}
              >
                {bikeTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Condition"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              >
                {conditions.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Suggested Daily Rate ($)"
                placeholder="25"
                value={dailyRate}
                onChange={(e) => setDailyRate(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Available Days per Month"
                placeholder="20"
                value={availableDays}
                onChange={(e) => setAvailableDays(e.target.value)}
              />
            </Grid>

            {dailyRate && availableDays && (
              <Grid item xs={12} sx={{bgcolor:'white'}}>
                <Box
                  sx={{
                    bgcolor:'#d5e1d9',
                    opacity: '90%',
                    p: 3,
                    borderRadius: 2,
                    textAlign: "center"
                  }}
                >
                  <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={2}>
                    <TrendingUp size={18} />
                    <Typography variant="h5" fontWeight="bold">
                      Estimated Earnings
                    </Typography>
                  </Box>

                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={4}>
                      <Typography variant="h6" fontWeight='bold'>
                        Daily
                      </Typography>
                      <Typography variant="body1" fontWeight='bold'>
                        ${earnings.daily.toFixed(0)}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6" fontWeight='bold'>
                        Weekly
                      </Typography>
                      <Typography variant="body1" fontWeight='bold'>
                        ${earnings.weekly.toFixed(0)}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="h6" fontWeight='bold'>
                        Monthly
                      </Typography>
                      <Typography variant="body1" fontWeight='bold'>
                        ${earnings.monthly.toFixed(0)}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Typography variant="body2" mt={2} color="text.secondary">
                    Based on {availableDays} available days per month
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        </DialogContent>

        <DialogActions>
            <ThemeProvider theme={buttonTheme1}>
                <Button variant="contained" color="primary" size="large" fullWidth sx={{textTransform:'none'}}>
            <DollarSign size={18} style={{ marginRight: 8 }} />
            Start Earning Today
          </Button>
            </ThemeProvider>
          
        </DialogActions>
      </Dialog>
    </>
  );
};
