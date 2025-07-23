import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Grid, Typography, Divider } from "@mui/material";
import { DirectionsBikeOutlined } from '@mui/icons-material';

const footerObjects = [
  {
    title: 'For Renters',
    options: [
      'Browse Bikes',
      'How it Works',
      'Safety Guidelines',
      'Pricing',
    ],
  },
  {
    title: 'For Rentors',
    options: [
      'List Your Bike',
      'Earnings Calculator',
      'Insurance Coverage',
      'Rentor Resources',
    ],
  },
  {
    title: 'Support',
    options: [
      'Help Center',
      'Contact Us',
      'Community Guidelines',
      'Terms of Service',
    ],
  },
];

const Footer = () => {
  return (
    <Box width="100%" bgcolor="#1c3b4a" px={2} py={6}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: 1200, mx: 'auto' }}
      >
        {/* Logo & Description */}
        <Grid item xs={12} sm={6} md={3}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <DirectionsBikeOutlined sx={{ color: '#f1f3f9' }} />
            <Typography
              variant="subtitle2"
              fontSize={16}
              fontWeight="bold"
              color="#f1f3f9"
            >
              Bikely
            </Typography>
          </Box>
          <Typography variant="body2" color="#f1f3f9" sx={{ opacity: 0.8 }}>
            Connecting bike owners with riders for sustainable urban mobility.
          </Typography>
          <Box display="flex" gap={2} mt={2} sx={{ opacity: 0.8 }}>
            <Twitter sx={{ color: '#f1f3f9' }} />
            <Facebook sx={{ color: '#f1f3f9' }} />
            <Instagram sx={{ color: '#f1f3f9' }} />
          </Box>
        </Grid>

        {/* Dynamic Footer Sections */}
        {footerObjects.map((obj, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Typography
              variant="subtitle2"
              fontSize={15}
              fontWeight="bold"
              color="#f1f3f9"
              gutterBottom
            >
              {obj.title}
            </Typography>
            {obj.options.map((option, idx) => (
              <Typography
                key={idx}
                variant="body2"
                color="#f1f3f9"
                sx={{ opacity: 0.8, mb: 0.5 }}
              >
                {option}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4, bgcolor: '#f1f3f9', opacity: 0.3 }} />

      {/* Bottom Info */}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: 2,
        }}
      >
        <Typography
          variant="caption"
          color="#f1f3f9"
          sx={{ opacity: 0.5 }}
        >
          © 2025 Bikely. All rights reserved.
        </Typography>
        <Box display="flex" gap={2} flexWrap="wrap">
          <Typography variant="caption" color="#f1f3f9" sx={{ opacity: 0.5 }}>
            Privacy Policy
          </Typography>
          <Typography variant="caption" color="#f1f3f9" sx={{ opacity: 0.5 }}>
            Terms of Service
          </Typography>
          <Typography variant="caption" color="#f1f3f9" sx={{ opacity: 0.5 }}>
            Cookie Policy
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
