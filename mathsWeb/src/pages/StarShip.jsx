import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Typography, 
  Box, 
  Paper, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions,
  Button,
  CircularProgress,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components using MUI's styled API
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[10],
  },
}));

function StarShip() {
  const [rockets, setRockets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.spacexdata.com/v4/rockets');
        // Filter for Starship rockets (this is a simplified approach, actual filtering may vary)
        const starshipRockets = response.data;
        setRockets(starshipRockets);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch rocket data');
        setLoading(false);
        console.error('Error fetching rockets:', err);
      }
    };

    fetchRockets();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        SpaceX Rockets
      </Typography>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {rockets.map((rocket) => (
          <Box key={rocket.id} sx={{ flexBasis: { xs: '100%', sm: '47%', md: '31%', lg: '23%' }, mb: 2 }}>
            <StyledCard>
              <CardMedia
                component="img"
                height="200"
                image={rocket.flickr_images[0] || 'https://via.placeholder.com/300x200?text=No+Image'}
                alt={rocket.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {rocket.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {rocket.description.substring(0, 150)}...
                </Typography>
                <Stack spacing={1} direction="row" sx={{ mt: 2 }}>
                  <Item>
                    <Typography variant="caption">HEIGHT</Typography>
                    <Typography variant="body2">{rocket.height.meters}m</Typography>
                  </Item>
                  <Item>
                    <Typography variant="caption">DIAMETER</Typography>
                    <Typography variant="body2">{rocket.diameter.meters}m</Typography>
                  </Item>
                  <Item>
                    <Typography variant="caption">MASS</Typography>
                    <Typography variant="body2">{rocket.mass.kg.toLocaleString()}kg</Typography>
                  </Item>
                </Stack>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </StyledCard>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default StarShip;