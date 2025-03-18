import React from "react";
import { Typography, Card, CardContent, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  color: theme.palette.text.primary,
}));

function Home() {
  return (
    <div>
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
              Real numbers include all rational and irrational numbers. They can
              be represented as points on an infinitely long number line. These
              numbers can be positive, negative, or zero.
            </Typography>
            <Typography paragraph>Examples of real numbers include:</Typography>
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
                quotient (except division by zero) of two real numbers is always
                a real number.
              </li>
              <li>
                <strong>Associativity:</strong> (a + b) + c = a + (b + c) and (a
                × b) × c = a × (b × c)
              </li>
              <li>
                <strong>Commutativity:</strong> a + b = b + a and a × b = b × a
              </li>
              <li>
                <strong>Distributivity:</strong> a × (b + c) = (a × b) + (a × c)
              </li>
            </Typography>
          </Item>
        </Grid>
      </Grid>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Did You Know?
          </Typography>
          <Typography paragraph>
            The concept of real numbers was developed over centuries, with
            contributions from mathematicians around the world. The term "real"
            was introduced to distinguish these numbers from the newly
            discovered "imaginary" numbers like √(-1).
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
