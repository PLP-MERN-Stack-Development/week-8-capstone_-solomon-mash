import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  IconButton,
  Badge,
  Grid,
  InputLabel,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import {
  ArrowBack,
  CameraAlt,
  CloudUpload,
  Close,
  DirectionsBike,
  AttachMoney,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lighten } from '@mui/system'
import useAuth from "../../context/UseAuth";
import API from '../../api';



const buttonTheme1 = createTheme({
  palette: {
    primary: {
      main: '#1c3b4a', // vibrant yellow-gold
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

const UploadBikePhotos = () => {
const [description, setDescription]=useState('');
const [brand, setBrand]=useState('');
const [year, setYear]=useState('')
const [color, setColor]=useState('');
const [model, setModel]=useState('');
const [rent, setRent]=useState('');
const { user } = useAuth();
const tags = ['6-Gear lever','suspenion','water bottle']
const navigate = useNavigate();

  const [uploadedImages, setUploadedImages] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

 
  const clearFiles=()=>{
    setBrand('');
    setColor('');
    setDescription('');
    setModel('');
    setRent('');
    setUploadedImages([]);
    setYear('');
  }

  const handleFiles = (files) => {
  const validImages = Array.from(files).filter((file) =>
    file.type.startsWith("image/") && file.size <= 10 * 1024 * 1024 // Max 10MB
  );
  setUploadedImages((prev) => [...prev, ...validImages]);
};

  const removeImage = (index) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const photoTips = [
    "Take photos in good lighting (natural light works best)",
    "Include the full bike from multiple angles",
    "Show any unique features or accessories",
    "Ensure the bike is clean and presentable",
    "Add close-ups of the seat, handlebars, and wheels",
  ];

const handleBikeUpload = async () => {
  if (!uploadedImages.length) {
    return alert("Please select at least one image.");
  }

  try {
    const formData = new FormData();
    uploadedImages.forEach(file => {
      formData.append("images", file);
    });

    const uploadRes = await API.post("/upload", formData);

    const { urls } = await uploadRes.data;

    const bikeData = {
      name: brand,
      owner: `${user?.first_name || ''} ${user?.last_name || ''}`.trim(),
      location: "Nakuru",
      type: model,
      distance: "Within 2 Miles",
      rentPricePerDay: Number(rent),
      bikeImages: urls,
      tags: tags,
      available: true,
      description,
      year,
      color,
    };
    console.log(user?.first_name)
    const token = localStorage.getItem('token') // or context

    const res = await API.post("/bikes",bikeData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,

      },
    });
   
    
    alert("Bike uploaded successfully!");
    clearFiles();
    navigate('/browse-bikes');
  } catch (err) {
    console.error(err);
    alert("An error occurred while uploading.");
  }
};


  return (
    <Box minHeight="100vh" bgcolor="#f9f9f9">
      {/* Header */}
      <Box position="sticky" top={0} zIndex={10} bgcolor="white" borderBottom={1} borderColor="divider" p={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" gap={2}>
            <Link to="/become-rentor" style={{ display: "flex", alignItems: "center" }}>
              <ArrowBack /> Back
            </Link>
            <Box width={1} height={1} mx={2} bgcolor="divider" display={{ xs: "none", md: "block" }} />
            <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <DirectionsBike fontSize="large" />
              <Typography variant="h5" fontWeight={700}>Bikely</Typography>
            </Link>
          </Box>
          <Badge badgeContent="Step 2 of 3" color="secondary" />
        </Box>
      </Box>

      {/* Content */}
      <Box maxWidth="lg" mx="auto" px={2} py={4}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Upload Photos of Your Bike
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Great photos help your bike get more bookings. Upload at least 3 high-quality images to showcase your bike.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{display:'flex', flexDirection:'column'}}>
          <Grid item xs={12} md={8}>
            {/* Upload Drop Zone */}
     <Card
  onDragEnter={handleDrag}
  onDragLeave={handleDrag}
  onDragOver={handleDrag}
  onDrop={handleDrop}
  sx={{ border: dragActive ? '2px dashed #1976d2' : '2px dashed #ccc', p: 3, textAlign: "center" }}
>
  <CloudUpload fontSize="large" sx={{ mb: 2 }} />
  <Typography variant="h6">Drop your photos here</Typography>
  <Typography variant="body2" color="textSecondary">or click to browse your files</Typography>

  <ThemeProvider theme={buttonTheme1}>
    <Button
      variant="contained"
      color="primary"
      startIcon={<CameraAlt />}
      component="label"  
      sx={{ mt: 2 }}
    >
      Choose Photos
      <input
        type="file"
        hidden
        multiple
        accept="image/*"
        onChange={(e) => e.target.files && handleFiles(e.target.files)}
      />
    </Button>
  </ThemeProvider>

  <Typography variant="caption" color="textSecondary" display="block" mt={1}>
    Supports JPG, PNG, WebP (max 10MB each)
  </Typography>
</Card>


            {/* Uploaded Images Preview */}
            {uploadedImages.length > 0 && (
              <Card sx={{ mt: 3 }}>
                <CardHeader title={<Typography variant="h6">Uploaded Photos ({uploadedImages.length})</Typography>} />
                <CardContent>
                  <Grid container spacing={2}>
                    {uploadedImages.map((img, i) => (
                      <Grid item xs={6} md={4} key={i} position="relative">
                        <Box
                          component="img"
                          src={URL.createObjectURL(img)}
                          alt={`upload-${i}`}
                          sx={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 2, border: 1, borderColor: 'divider' }}
                        />
                        <IconButton
                          onClick={() => removeImage(i)}
                          sx={{ position: "absolute", top: 8, right: 8, bgcolor: "red", color: "white", '&:hover': { bgcolor: "darkred" } }}
                          size="small"
                        >
                          <Close fontSize="small" />
                        </IconButton>
                        {i === 0 && (
                          <Badge badgeContent="Main" color="primary" sx={{ position: "absolute", bottom: 8, left: 8 }} />
                        )}
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            )}

            {/* Bike Details */}
            <Card sx={{ mt: 3, p: 2, display:'flex', flexDirection:'column' }} >
              <CardHeader title={<Typography variant="h6">Bike Details</Typography>} />
              <CardContent sx={{ display:'flex', flexDirection:'column'}}>
                <Grid container spacing={2} sx={{ display:'flex', flexDirection:'column'}}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="brand">Brand</InputLabel>
                      <OutlinedInput id="brand" label="Brand" placeholder="e.g., Trek, Giant"  onChange={(e)=>setBrand(e.target.value)} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="model">Model</InputLabel>
                      <OutlinedInput id="model" label="Model" placeholder="e.g., FX 3, Escape 3" onChange={(e)=>setModel(e.target.value)} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="year">Year</InputLabel>
                      <OutlinedInput id="year" type="number" label="Year" placeholder="2023" onChange={(e)=>setYear(e.target.value)}/>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="rent-price">Rent Price per hour</InputLabel>
                      <OutlinedInput id="rent-price" label="Renting Price" placeholder="e.g., 100, 300" onChange={(e)=>setRent(e.target.value)} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="color">Color</InputLabel>
                      <OutlinedInput id="color" label="Color" placeholder="e.g., Blue, Black" onChange={(e)=>setColor(e.target.value)} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                    onChange={(e)=>setDescription(e.target.value)}
                      multiline
                      rows={4}
                      fullWidth
                      label="Description"
                      placeholder="Tell renters about your bike's condition, features, and any accessories..."
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader title={<Typography variant="h6">Photo Tips</Typography>} />
              <CardContent>
                <Box display="flex" flexDirection="column" gap={1}>
                  {photoTips.map((tip, i) => (
                    <Typography variant="body2" key={i}>
                      {`${i + 1}. ${tip}`}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ mt: 3, background: "linear-gradient(135deg, #e3f2fd, #f3e5f5)" }}>
              <CardHeader title={<Typography variant="h6"><AttachMoney sx={{ mr: 1 }} /> Estimated Earnings</Typography>} />
              <CardContent>
                <Box textAlign="center">
                  <Typography variant="h4" fontWeight='bold'>$120 - $180</Typography>
                  <Typography variant="body2" >per month</Typography>
                  <Typography variant="caption">Based on similar bikes in your area</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Continue Button */}
        <Box mt={5} textAlign="center">
          <ThemeProvider theme={buttonTheme1}>
                  <Button
                  onClick={handleBikeUpload}
                  color="primary"
            variant="contained"
            size="large"
            disabled={uploadedImages.length < 3}
            sx={{ px: 5, py: 2, textTransform:'none' }}
          >
            Continue
          </Button>
          </ThemeProvider>
          
          {uploadedImages.length < 3 && (
            <Typography variant="caption" color="textSecondary" display="block" mt={1}>
              Upload at least 3 photos to continue
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default UploadBikePhotos;
