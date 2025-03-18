import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import SideBar from "./components/SideBar";
import ThemeProvider from "./components/ThemeProvider";
import Home from "./pages/Home";
import Imaginary from "./pages/Imaginary";
import Counter from "./pages/Counter";

function App() {
  const [open, setOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const [count, setCount] = useState(0);

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  const handleThemeChange = (event) => {
    setCurrentTheme(event.target.value);
  };

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <ThemeProvider currentTheme={currentTheme}>
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

          <SideBar
            open={open}
            toggleDrawer={toggleDrawer}
            currentTheme={currentTheme}
            handleThemeChange={handleThemeChange}
          />

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
