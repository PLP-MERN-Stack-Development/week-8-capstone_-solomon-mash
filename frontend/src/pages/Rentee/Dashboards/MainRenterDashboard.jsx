// RenterDashboard.jsx
import React from "react";
import {
  Box, Container, Typography, Tabs, Tab, Divider
} from "@mui/material";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import RentalList from "./RentalList";
import FavoriteBikes from "./FavoriteBikes";
import ProfileSection from "./ProfileSection";
import DashboardNavbar from '../../../components/dashboardNavbar';

const RenterDashboard = () => {
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (_, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <DashboardNavbar />
      <Box sx={{ minHeight: "100vh", background:'linear-gradient(to right bottom, #f8fefa, #fff)', py: 4 }}>

  <Container>
        <DashboardHeader />
        <DashboardStats />

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
        {tab === 2 && <FavoriteBikes />}
        {tab === 3 && <ProfileSection />}
      </Container>
    </Box>

    </>
    
  );
};

export default RenterDashboard;
