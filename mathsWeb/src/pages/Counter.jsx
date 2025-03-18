import React from "react";
import { Typography, Button, Paper, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  color: theme.palette.text.primary,
  textAlign: "center",
}));

function Counter({ count, incrementCounter }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Counter Example
      </Typography>

      <Item>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
          {count}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<AddIcon />}
          onClick={incrementCounter}
        >
          Increment Counter
        </Button>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body1">
            This counter demonstrates the use of React's useState hook to manage
            state across components.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            The counter value is stored in the App component and passed down to
            this Counter component as a prop.
          </Typography>
        </Box>
      </Item>
    </div>
  );
}

export default Counter;
