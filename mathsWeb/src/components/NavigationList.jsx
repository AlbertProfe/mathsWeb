import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CounterIcon from "@mui/icons-material/AddCircle";
import RocketIcon from "@mui/icons-material/Rocket";

function NavigationList({ toggleDrawer }) {
  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Imaginary", icon: <InfoIcon />, path: "/imaginary" },
    { text: "Counter", icon: <CounterIcon />, path: "/counter" },
    { text: "StarShip", icon: <RocketIcon />, path: "/starship" },
    { text: "LaunchesTable", icon: <RocketIcon />, path: "/launchestable" },
  ];

  return (
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
  );
}

export default NavigationList;
