import React from 'react';
import { Typography, Card, CardContent, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  color: theme.palette.text.primary,
}));

function Imaginary() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        About Imaginary Numbers
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Item>
            <Typography variant="h6" gutterBottom>
              The Concept of Imaginary Numbers
            </Typography>
            <Typography paragraph>
              Imaginary numbers are numbers that, when squared, give a negative result. This is impossible with real numbers, as any real number squared gives a positive result.
            </Typography>
            <Typography paragraph>
              The fundamental imaginary unit is i, where i² = -1. This means i = √(-1).
            </Typography>
            <Typography paragraph>
              Any imaginary number can be written as a real number multiplied by i. For example:
            </Typography>
            <Typography component="ul">
              <li>2i (which is 2 × i)</li>
              <li>-3.5i (which is -3.5 × i)</li>
              <li>πi (which is π × i)</li>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <Typography variant="h6" gutterBottom>
              Complex Numbers
            </Typography>
            <Typography paragraph>
              When we combine real and imaginary numbers, we get complex numbers. A complex number has the form a + bi, where a is the real part and bi is the imaginary part.
            </Typography>
            <Typography paragraph>
              Examples of complex numbers:
            </Typography>
            <Typography component="ul">
              <li>3 + 2i</li>
              <li>-1 + 4i</li>
              <li>5 - 7i</li>
              <li>0 + 3i (which is just 3i)</li>
              <li>4 + 0i (which is just 4)</li>
            </Typography>
          </Item>
        </Grid>
      </Grid>
      
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Historical Context
          </Typography>
          <Typography paragraph>
            Imaginary numbers were first proposed in the 16th century by Italian mathematicians trying to solve cubic equations. Initially viewed with skepticism and called "imaginary" or "impossible" numbers, they later became essential in many fields of mathematics and physics.
          </Typography>
          <Typography paragraph>
            One of the most beautiful equations in mathematics, Euler's identity, relates imaginary numbers to exponential functions: e^(πi) + 1 = 0
          </Typography>
        </CardContent>
      </Card>
      
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Applications of Complex Numbers
        </Typography>
        <Typography paragraph>
          Complex numbers are not just mathematical curiosities; they have important applications in:
        </Typography>
        <Typography component="ul">
          <li>Electrical engineering</li>
          <li>Quantum mechanics</li>
          <li>Signal processing</li>
          <li>Control theory</li>
          <li>Fluid dynamics</li>
        </Typography>
      </Box>
    </div>
  );
}

export default Imaginary;