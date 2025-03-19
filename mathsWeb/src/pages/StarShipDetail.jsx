import React from "react";
import { useLocation } from "react-router-dom";
import {
    Button,
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
        {/* Main Image */}
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
          {/* Rocket Name */}
          <Typography variant="h4" gutterBottom>
            {rocket.name}
          </Typography>

          {/* Rocket Description */}
          <Typography variant="body1" paragraph>
            {rocket.description}
          </Typography>

          {/* Additional Images */}
          <Box sx={{ display: "flex", gap: 2, overflowX: "auto", my: 2 }}>
            {rocket.flickr_images.slice(1).map((image, index) => (
              <CardMedia
                key={index}
                component="img"
                height="150"
                image={image}
                alt={`${rocket.name} - Image ${index + 1}`}
                sx={{ borderRadius: 1 }}
              />
            ))}
          </Box>

          {/* Rocket Details */}
          <Stack
            spacing={2}
            direction="row"
            sx={{ mt: 2, flexWrap: "wrap", gap: 2 }}
          >
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
            <Item>
              <Typography variant="caption">COST PER LAUNCH</Typography>
              <Typography variant="body2">
                ${rocket.cost_per_launch.toLocaleString()}
              </Typography>
            </Item>
            <Item>
              <Typography variant="caption">STAGES</Typography>
              <Typography variant="body2">{rocket.stages}</Typography>
            </Item>
            <Item>
              <Typography variant="caption">BOOSTERS</Typography>
              <Typography variant="body2">{rocket.boosters}</Typography>
            </Item>
            <Item>
              <Typography variant="caption">ENGINES</Typography>
              <Typography variant="body2">
                {rocket.engines.number} ({rocket.engines.type})
              </Typography>
            </Item>
            <Item>
              <Typography variant="caption">FUEL</Typography>
              <Typography variant="body2">
                {rocket.engines.propellant_1} + {rocket.engines.propellant_2}
              </Typography>
            </Item>
          </Stack>

          {/* Relevant Links */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Links
            </Typography>
            <Stack spacing={1}>
              {rocket.wikipedia && (
                <Button
                  variant="outlined"
                  href={rocket.wikipedia}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wikipedia
                </Button>
              )}
              {rocket.website && (
                <Button
                  variant="outlined"
                  href={rocket.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Website
                </Button>
              )}
              {rocket.flickr_images.length > 0 && (
                <Button
                  variant="outlined"
                  href={rocket.flickr_images[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View High-Res Image
                </Button>
              )}
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default StarShipDetail;
