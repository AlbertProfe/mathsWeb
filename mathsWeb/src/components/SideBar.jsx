// components/SideBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
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
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SideBar({ open, toggleDrawer, currentTheme, handleThemeChange }) {
  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Imaginary", icon: <InfoIcon />, path: "/imaginary" },
    { text: "Counter", icon: <CounterIcon />, path: "/counter" },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
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
    </Drawer>
  );
}

export default SideBar;
