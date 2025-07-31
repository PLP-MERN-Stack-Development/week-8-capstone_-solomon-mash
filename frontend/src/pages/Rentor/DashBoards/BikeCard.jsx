import React from 'react';
import { Card, CardContent, Typography, Chip, Button, Box } from '@mui/material';
import { LocationOn, Star, Visibility, Edit } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const buttonTheme1 = createTheme({
  palette: {
    primary: {
      main: '#1c3b4a',
      contrastText: '#e5ebe5',
    },
  },
});



const BikeCard = ({ bike }) => (
  <Card sx={{ borderRadius: 2, boxShadow: 2, width:'280px' }}>
    <img
      src={Object.values(bike.bikeImages)[0]}
      alt={bike.name}
      style={{ width: '100%', height: 180, objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
    />
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            {bike.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {bike.type}
          </Typography>
        </Box>
        <Chip label={bike.available=='false'?'Rented Out':'Available'}   color={
                bike.available === 'false' ? 'warning':'info'
              } size="small" />
      </Box>
    

      <Box display="flex" alignItems="center" mb={1}>
        <Star fontSize="small" color="warning" />
        <Typography ml={0.5} variant="body2">
          {bike.rating}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" mb={1}>
        <LocationOn fontSize="small" color="action" />
        <Typography ml={0.5} variant="body2">
          {bike.location}
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight="bold" sx={{ color: '#2f6a3f' }}>
          Kes.{bike.rentPricePerDay} per day
        </Typography>

        <ThemeProvider theme={buttonTheme1}>
          <Box>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              sx={{ mr: 1, minWidth: 36, padding: '2px 8px', borderRadius: 2 }}
            >
              <Visibility fontSize="small" />
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              sx={{ minWidth: 36, padding: '2px 8px', borderRadius: 2 }}
            >
              <Edit fontSize="small" />
            </Button>
          </Box>
        </ThemeProvider>
      </Box>
    </CardContent>
  </Card>
);

export default BikeCard;
