import React from 'react';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  useTheme,
  Container
} from '@mui/material';
import { TrendingUp, BarChart } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import API from '../../../api';


const AnalyticsPanel = () => {
  const theme = useTheme();
  const [analyticsData, setAnalyticsData]=useState([]);
  const [loading, setLoading]=useState(true);

    const fetchAnalyticsData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await API.get('/analytics/rentor', {
        headers: {
        "Authorization": `Bearer ${token}`,
        }
      });
      setAnalyticsData(res.data);
      console.log(res.data);

    } catch (err) {
      console.error('Failed to fetch analytics data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

if (loading) {
      return (
        <Container sx={{ py: 6 }}>
          <Typography variant="h6">Loading please wait...</Typography>
        </Container>
      );
    }
  return (
    <Grid display='flex' justifyContent='space-around'>
      <Grid item xs={12} lg={6} width='45%'>
        <Card elevation={3}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: '#2f6a3f' }}>
                <TrendingUp />
              </Avatar>
            }
            title={
              <Typography variant="h6" fontWeight={600}>
                Earnings Overview
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body1" gutterBottom>
              This Month: <strong style={{ color: theme.palette.text.primary }}>Kes. {analyticsData.netEarningsThisMonth}</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Last Month: <strong style={{ color: theme.palette.text.primary }}>Kes. {analyticsData.netEarningsLastMonth}</strong>
            </Typography>
            <Typography variant="body1">
              Total Earnings: <strong style={{ color: '#2f6a3f' }}>Kes. {analyticsData.netEarnings}</strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} lg={6} width='45%'>
        <Card elevation={3}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: '#2f6a3f' }}>
                <BarChart />
              </Avatar>
            }
            title={
              <Typography variant="h6" fontWeight={600}>
                Performance Metrics
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body1" gutterBottom>
              Booking Rate: <strong style={{ color: theme.palette.text.primary }}>{analyticsData.performance?.bookingRate}</strong>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Avg. Rental Duration: <strong style={{ color: theme.palette.text.primary }}>{analyticsData.performance?.avgRentDuration} days</strong>
            </Typography>
            <Typography variant="body1">
              Return Rate: <strong style={{ color: theme.palette.text.primary }}>{analyticsData.performance?.returnRate}</strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AnalyticsPanel;
