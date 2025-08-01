// DashboardStats.jsx
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Container
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";


const DashboardStats = ({statsData}) => {



  return (
    <Grid container display='flex' gap={1}>
        <Grid item xs={12} sm={6} md={3} minWidth='250px'>
          <Card
            sx={{
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: '#dbeafe',
                  p: 1.5,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width:'20px',
                  height:'20px'

                }}
              >
              <CalendarMonthIcon sx={{ color: '#5385ef' }} />
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                    Active Rentals
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {statsData.activeRides}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} minWidth='250px'>
          <Card
            sx={{
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: '#8dd9a9',
                  p: 1.5,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width:'20px',
                  height:'20px'

                }}
              >
                  <AccessTimeIcon sx={{ color: '#61c485' }} />,             
                </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Total Rides
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {statsData.bookedRides}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      
      
      <Grid item xs={12} sm={6} md={3} minWidth='250px'>
          <Card
            sx={{
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: '#fee2e2',
                  p: 1.5,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width:'20px',
                  height:'20px'

                }}
              >
                 <FavoriteIcon sx={{ color: '#df3838'}} />
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Favorites
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {statsData.favoritesLength}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      
      
      <Grid item xs={12} sm={6} md={3} minWidth='250px'>
          <Card
            sx={{
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: '#fef9c3',
                  p: 1.5,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width:'20px',
                  height:'20px'

                }}
              >
                <StarIcon sx={{ color: '#d29b22' }} />,
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Avg Rating
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {statsData.averageRating}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      
      
      
      
    </Grid>
  );
};

export default DashboardStats;
