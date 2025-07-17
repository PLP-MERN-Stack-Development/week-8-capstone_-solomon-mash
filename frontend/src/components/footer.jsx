import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material"
import Divider from '@mui/material/Divider';
import { DirectionsBikeOutlined } from '@mui/icons-material';

const footerObjects = [
    {
        title:'For Renters',
        options:[
            'Browse Bikes',
            'How it Works',
            'Safety Guidelines',
            'Pricing'
        ]
    },
    {
        title:'For Rentors',
        options:[
            'List Your Bike',
            'Earnings Calculator',
            'Insurance Coverage',
            'Rentor Resources'
        ]
    },
    {
        title:'Support',
        options:[
            'Help Center',
            'Contacr Us',
            'Community Guidelines',
            'Terms of Service'
        ]
    }
]


const Footer = ()=>{
    return (
    <>
    <Box width='100%' minHeight='30vh' bgcolor='#1c3b4a'>
            <Box display='flex' flexDirection='column' width='50%' mx='auto' >
                <Box display='flex' width='100%' gap={2} mt={5}  justifyContent='center'>
                    <Box display='flex' flexDirection='column' width='150px'>
                        <Grid display='flex' gap={1} alignItems='center'>
                            <DirectionsBikeOutlined  sx={{height:'20px', width:"20px", color:'#f1f3f9'}}/>
                            <Typography variant="subtitle2" fontSize={15} color="#f1f3f9" fontWeight='bold'>
                                Bikely
                            </Typography>
                        </Grid>
                        <Typography variant="subtitle1" color="#f1f3f9" sx={{opacity:'80%'}}>
                            Connecting bike owners with riders for sustainable urban mobility.
                        </Typography>
                        <Grid display='flex' gap={2} mt={1} sx={{opacity: '80%'}}>
                            <Twitter sx={{color:'#f1f3f9'}}/>
                            <Facebook sx={{color:'#f1f3f9'}}/>
                            <Instagram sx={{color:'#f1f3f9'}}/>
                        </Grid>
                    </Box>
                    {footerObjects.map((Object)=>(
                        <Box display='flex' flexDirection='column' width='150px'>
                        <Grid display='flex' gap={1} alignItems='center'>
                            <Typography variant="subtitle2" fontSize={14} fontWeight='bold' color="#f1f3f9">
                                {Object.title}
                            </Typography>
                        </Grid>
                        <Box display='flex' flexDirection='column'>
                                    {Object.options.map((option)=>(
                                        <Typography variant="subtitle1" color="#f1f3f9" sx={{opacity:'80%'}}>
                                            {option}
                                        </Typography>
                                    ))}
                                    

                                </Box>

                    </Box>
                    
                    ))}

                </Box>
                <Divider sx={{my:1, bgcolor:'#f1f3f9', opacity:'30%'}}/>
                <Box display='flex' width='100%' justifyContent='space-between'>
                    <Typography variant="subtitle1" color="#f1f3f9" sx={{opacity:'30%'}}>
                       2025 Bikely. All rights reserved                     
                    </Typography>
                    <Grid display='flex' gap={2}>
                        <Typography variant="subtitle1" color="#f1f3f9" sx={{opacity:'30%'}}>
                       Privacy Policy                     
                    </Typography>
                    <Typography variant="subtitle1" color="#f1f3f9" sx={{opacity:'30%'}}>
                        Terms of Service 
                    </Typography>
                    <Typography variant="subtitle1" color="#f1f3f9" sx={{opacity:'30%'}}>
                            Cookie Policy  
                    </Typography>

                    </Grid>
                </Box>
            </Box>
        
    </Box>
    </>
    )
}
export default Footer

