import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function ThemeSelector({ currentTheme, handleThemeChange }) {
  return (
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
  );
}

export default ThemeSelector;
