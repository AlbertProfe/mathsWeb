import React from "react";
import { useLocation } from "react-router-dom";
import {
  Typography,
  Box,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled components using MUI's styled API
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
}));

function StarShipDetail() {
  const location = useLocation();
  const { rocket } = location.state || {}; // Access the rocket data passed via state

  if (!rocket) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" color="error">
          No rocket data found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        {rocket.name}
      </Typography>

      <Card>
        <CardMedia
          component="img"
          height="400"
          image={
            rocket.flickr_images[0] ||
            "https://via.placeholder.com/800x400?text=No+Image"
          }
          alt={rocket.name}
        />
        <CardContent>
          <Typography variant="body1" paragraph>
            {rocket.description}
          </Typography>
          <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
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
              <Typography variant="body2">
                {rocket.mass.kg.toLocaleString()}kg
              </Typography>
            </Item>
            <Item>
              <Typography variant="caption">FIRST FLIGHT</Typography>
              <Typography variant="body2">{rocket.first_flight}</Typography>
            </Item>
            <Item>
              <Typography variant="caption">SUCCESS RATE</Typography>
              <Typography variant="body2">
                {rocket.success_rate_pct}%
              </Typography>
            </Item>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default StarShipDetail;
