import React, {useState, useEffect} from 'react';
import { Container, Tabs, Tab, Box, Typography } from '@mui/material';
import DashboardHeader from './DashBoardHeader'
import StatsCards from './StatsCard';
import RecentBookings from './RecentBookings';
import MyBikes from './MyBikes';
import AnalyticsPanel from './AnalyticsPanel';
import DashboardNavbar from '../../../components/dashboardNavbar';
import API from '../../../api';


const MainRentorDashboard = () => {
  const [tab, setTab] = React.useState(0);
  const [loading, setLoading]=useState(true);
  const [analyticsData, setAnalyticsData]=useState([]);
  const [bikesData, setBikeData]=useState([]);
  const [recentBookingsData, setRecentBookingData]=useState([]);
  const [statsData, setStatsData]=useState([]);

  

  const fetchBikeData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await API.get('/bikes/users/rentor', {
        headers: {
        "Authorization": `Bearer ${token}`,
        }
      });
      setBikeData(res.data);

    } catch (err) {
      console.error('Failed to fetch bike data:', err);
    } finally {
      setLoading(false);
    }
  };

 const fetchRecentBookingData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await API.get('/bookings/rentor-bookings', {
        headers: {
        "Authorization": `Bearer ${token}`,
        }
      });
      setRecentBookingData(res.data);

    } catch (err) {
      console.error('Failed to fetch analytics data:', err);
    } finally {
      setLoading(false);
    }
  };

    const fetchAnalyticsData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await API.get('/analytics/rentor', {
          headers: {
          "Authorization": `Bearer ${token}`,
          }
        });
        setAnalyticsData(res.data);
  
      } catch (err) {
        console.error('Failed to fetch analytics data:', err);
      } finally {
        setLoading(false);
      }
    };


  const fetchStatsData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await API.get('/analytics/rentor', {
        headers: {
        "Authorization": `Bearer ${token}`,
        }
      });
      setStatsData(res.data);

    } catch (err) {
      console.error('Failed to fetch analytics data:', err);
    } finally {
      setLoading(false);
    }
  };


     useEffect(() => {
        fetchAnalyticsData();
        fetchBikeData();
        fetchRecentBookingData();
        fetchStatsData();
      }, []);

  if (loading) {
        return (
          <Container sx={{ py: 6 }}>
            <Typography variant="h6">Loading please wait...</Typography>
          </Container>
        );
      }

  return (
    <>
    
    <DashboardNavbar />

    
    <Box sx={{ background:'linear-gradient(to right bottom, #f8fefa, #fff)', minHeight: '100vh', py: 4 }}>

      <Container maxWidth="lg">
        <DashboardHeader />
        <Box sx={{ my: 4 }}>
          <StatsCards statsData={statsData}/>
        </Box>
        <Box display='flex' flexDirection='column'>
          <Tabs value={tab}  onChange={(e, newValue) => setTab(newValue)} centered>
          <Tab  sx={{width:'100%'}} label="Recent Bookings" />
          <Tab sx={{width:'100%'}} label="My Bikes" />
          <Tab sx={{width:'100%'}} label="Analytics" />
        </Tabs>
        </Box>
        

        <Box sx={{ mt: 4 }} >
          {tab === 0 && <RecentBookings recentBookingsData={recentBookingsData} />}
          {tab === 1 && <MyBikes bikesData={bikesData}/>}
          {tab === 2 && <AnalyticsPanel analyticsData={analyticsData} />}
        </Box>
      </Container>
    </Box>
    </>
  );
};

export default MainRentorDashboard;
