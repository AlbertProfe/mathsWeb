import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import NavigationList from "./NavigationList";
import ThemeSelector from "./ThemeSelector";

function SideBar({ open, toggleDrawer, currentTheme, handleThemeChange }) {
  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 250 }}>
        <Typography variant="h6" sx={{ my: 2, ml: 2 }}>
          Navigation
        </Typography>
        <Divider />

        <NavigationList toggleDrawer={toggleDrawer} />

        <Divider />

        <Box sx={{ p: 2 }}>
          <ThemeSelector
            currentTheme={currentTheme}
            handleThemeChange={handleThemeChange}
          />
        </Box>
      </Box>
    </Drawer>
  );
}

export default SideBar;
