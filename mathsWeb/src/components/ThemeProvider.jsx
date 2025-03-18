// components/ThemeProvider.jsx
import React from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

// Define themes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

const purpleTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9c27b0',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const greenTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2e7d32',
    },
    secondary: {
      main: '#ff9800',
    },
    background: {
      default: '#f1f8e9',
      paper: '#ffffff',
    },
  },
});

function ThemeProvider({ children, currentTheme }) {
  const themes = {
    light: lightTheme,
    dark: darkTheme,
    purple: purpleTheme,
    green: greenTheme,
  };

  return (
    <MuiThemeProvider theme={themes[currentTheme]}>
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;