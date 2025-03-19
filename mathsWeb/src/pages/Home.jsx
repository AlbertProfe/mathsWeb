import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  Box,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  color: theme.palette.text.primary,
}));

const HeroHeader = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
}));

function Home() {
  return (
    <div>
      {/* Hero Header with Video */}
      <HeroHeader>
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source
            src="https://www.dropbox.com/scl/fi/fsu9qamfzy4w6ozexas54/Starship_Fifth_FlightTest.webm?rlkey=rrykxp38tvlslocnmx2diw8t3&st=i4cw4yuf&dl=1"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
        <Typography
          variant="h2"
          component="h1"
          sx={{ zIndex: 1, fontWeight: "bold" }}
        >
          Exploring the Maths with SpaceX
        </Typography>
      </HeroHeader>

      <Container sx={{ mt: 4 }}>
        {/* Maths Content */}
        <Typography variant="h4" gutterBottom>
          Welcome to the World of Real Numbers
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Item>
              <Typography variant="h6" gutterBottom>
                What are Real Numbers?
              </Typography>
              <Typography paragraph>
                Real numbers include all rational and irrational numbers. They
                can be represented as points on an infinitely long number line.
                These numbers can be positive, negative, or zero.
              </Typography>
              <Typography paragraph>
                Examples of real numbers include:
              </Typography>
              <Typography component="ul">
                <li>Integers: -3, -2, -1, 0, 1, 2, 3</li>
                <li>Fractions: 1/2, 3/4, 5/6</li>
                <li>Decimals: 0.5, 3.14159</li>
                <li>Irrational numbers: π, √2, e</li>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <Typography variant="h6" gutterBottom>
                Properties of Real Numbers
              </Typography>
              <Typography paragraph>
                Real numbers have several important properties:
              </Typography>
              <Typography component="ul">
                <li>
                  <strong>Closure:</strong> The sum, difference, product, and
                  quotient (except division by zero) of two real numbers is
                  always a real number.
                </li>
                <li>
                  <strong>Associativity:</strong> (a + b) + c = a + (b + c) and
                  (a × b) × c = a × (b × c)
                </li>
                <li>
                  <strong>Commutativity:</strong> a + b = b + a and a × b = b ×
                  a
                </li>
                <li>
                  <strong>Distributivity:</strong> a × (b + c) = (a × b) + (a ×
                  c)
                </li>
              </Typography>
            </Item>
          </Grid>
        </Grid>

        {/* SpaceX Section */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <Item>
              <Typography variant="h4" gutterBottom>
                SpaceX, Rockets, and Mathematics
              </Typography>
              <Typography paragraph>
                SpaceX, founded by Elon Musk, is revolutionizing space travel
                with its advanced rockets like the Falcon 9 and Starship. These
                marvels of engineering rely heavily on mathematics, from the
                physics of propulsion to the geometry of rocket design.
              </Typography>
              <Typography paragraph>
                Mathematics plays a crucial role in:
              </Typography>
              <Typography component="ul">
                <li>
                  <strong>Trajectory Calculations:</strong> Determining the path
                  a rocket must take to reach its destination.
                </li>
                <li>
                  <strong>Fuel Efficiency:</strong> Optimizing fuel consumption
                  to maximize payload capacity.
                </li>
                <li>
                  <strong>Structural Integrity:</strong> Ensuring the rocket can
                  withstand the immense forces during launch and flight.
                </li>
                <li>
                  <strong>Reusability:</strong> Calculating the precise
                  maneuvers needed for rocket stages to return to Earth and land
                  safely.
                </li>
              </Typography>
              <Typography paragraph>
                The Starship, SpaceX's next-generation spacecraft, is designed
                to carry humans to Mars and beyond. Its development involves
                solving complex mathematical problems to ensure safety,
                efficiency, and success.
              </Typography>
            </Item>
          </Grid>
        </Grid>

        {/* Did You Know? Card */}
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Did You Know?
            </Typography>
            <Typography paragraph>
              The concept of real numbers was developed over centuries, with
              contributions from mathematicians around the world. The term
              "real" was introduced to distinguish these numbers from the newly
              discovered "imaginary" numbers like √(-1).
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Home;
