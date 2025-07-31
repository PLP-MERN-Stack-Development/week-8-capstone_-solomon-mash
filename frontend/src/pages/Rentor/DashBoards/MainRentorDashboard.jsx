import React from 'react';
import { Container, Tabs, Tab, Box } from '@mui/material';
import DashboardHeader from './DashboardHeader';
import StatsCards from './StatsCard';
import RecentBookings from './RecentBookings';
import MyBikes from './MyBikes';
import AnalyticsPanel from './AnalyticsPanel';
import DashboardNavbar from '../../../components/dashboardNavbar';
const MainRentorDashboard = () => {
  const [tab, setTab] = React.useState(0);

  

  return (
    <>
    
    <DashboardNavbar />

    
    <Box sx={{ background:'linear-gradient(to right bottom, #f8fefa, #fff)', minHeight: '100vh', py: 4 }}>

      <Container maxWidth="lg">
        <DashboardHeader />
        <Box sx={{ my: 4 }}>
          <StatsCards />
        </Box>
        <Box display='flex' flexDirection='column'>
          <Tabs value={tab}  onChange={(e, newValue) => setTab(newValue)} centered>
          <Tab  sx={{width:'100%'}} label="Recent Bookings" />
          <Tab sx={{width:'100%'}} label="My Bikes" />
          <Tab sx={{width:'100%'}} label="Analytics" />
        </Tabs>
        </Box>
        

        <Box sx={{ mt: 4 }} >
          {tab === 0 && <RecentBookings />}
          {tab === 1 && <MyBikes />}
          {tab === 2 && <AnalyticsPanel />}
        </Box>
      </Container>
    </Box>
    </>
  );
};

export default MainRentorDashboard;
