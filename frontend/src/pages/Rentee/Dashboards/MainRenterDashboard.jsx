// RenterDashboard.jsx
import React, {useState, useEffect} from "react";
import {
  Box, Container, Typography, Tabs, Tab, Divider
} from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import RentalList from "./RentalList";
import FavoriteBikes from "./FavoriteBikes";
import ProfileSection from "./ProfileSection";
import DashboardNavbar from '../../../components/dashboardNavbar';
import API from '../../../api';



const RenterDashboard = () => {
  const [tab, setTab] = React.useState(0);
  const [statsData, setStatsData]=useState([]);
  const [loading, setLoading]=useState(true);
  const [userInfo, setUserInfo]=useState([]);
  const [favoriteBikes, setFavoriteBikes]=useState([]);
  const token = localStorage.getItem('token');


  const handleTabChange = (_, newValue) => {
    setTab(newValue);
  };
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
  const fetchStatsData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await API.get('/stats/client', {
        headers: {
        "Authorization": `Bearer ${token}`,
        }
      });
      setStatsData(res.data);

    } catch (err) {
      console.error('Failed to fetch Stats Data:', err);
    } finally {
      setLoading(false);
    }
  };
  
    const fetchFavoriteBikes = async () => {
      try {
        const res = await API.get('/client/favorites', {
          headers: {
          "Authorization": `Bearer ${token}`,
          }
        });
        setFavoriteBikes(res.data);
        console.log(res.data);
  
      } catch (err) {
        console.error('Failed to fetch favorite bikes data:', err);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchStatsData();
    fetchUserInfo();
    fetchFavoriteBikes();
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
      <Box sx={{ minHeight: "100vh", background:'linear-gradient(to right bottom, #f8fefa, #fff)', py: 4 }}>

  <Container>
        <DashboardHeader />
        <DashboardStats statsData={statsData} />

        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
          sx={{ mt: 4 }}
        >
          <Tab label="Current Rentals" />
          <Tab label="Rental History" />
          <Tab label="Favorites" />
          <Tab label="Profile" />
        </Tabs>

        <Divider sx={{ my: 2 }} />

        {tab === 0 && <RentalList type="current" />}
        {tab === 1 && <RentalList type="history" />}
        {tab === 2 && <FavoriteBikes favoriteBikes={favoriteBikes}/>}
        {tab === 3 && <ProfileSection userInfo={userInfo}/>}
      </Container>
    </Box>

    </>
    
  );
};

export default RenterDashboard;
