import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CounterIcon from "@mui/icons-material/AddCircle";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";

import Home from "./pages/Home";
import Imaginary from "./pages/Imaginary";
import Counter from "./pages/Counter";

// Define themes
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

const purpleTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9c27b0",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const greenTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2e7d32",
    },
    secondary: {
      main: "#ff9800",
    },
    background: {
      default: "#f1f8e9",
      paper: "#ffffff",
    },
  },
});

function App() {
  const [open, setOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const [count, setCount] = useState(0);

  const themes = {
    light: lightTheme,
    dark: darkTheme,
    purple: purpleTheme,
    green: greenTheme,
  };

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  const handleThemeChange = (event) => {
    setCurrentTheme(event.target.value);
  };

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Imaginary", icon: <InfoIcon />, path: "/imaginary" },
    { text: "Counter", icon: <CounterIcon />, path: "/counter" },
  ];

  const drawer = (
    <div>
      <Box sx={{ width: 250 }}>
        <Typography variant="h6" sx={{ my: 2, ml: 2 }}>
          Navigation
        </Typography>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="theme-select-label">Theme</InputLabel>
            <Select
              labelId="theme-select-label"
              id="theme-select"
              value={currentTheme}
              label="Theme"
              onChange={handleThemeChange}
            >
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
              <MenuItem value="purple">Purple</MenuItem>
              <MenuItem value="green">Green</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </div>
  );

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <CssBaseline />
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Math Explorer
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            {drawer}
          </Drawer>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/imaginary" element={<Imaginary />} />
              <Route
                path="/counter"
                element={
                  <Counter count={count} incrementCounter={incrementCounter} />
                }
              />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
