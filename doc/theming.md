# Theming

## Intro

How the Theme provider works

> The ThemeProvider in this React application is a powerful abstraction layer that centralizes theme management.
> 
> This abstraction follow good practices and the "**Lifting state up**" pattern.
> 
> "**Lifting state up**" is a fundamental React pattern where state that needs to be shared between components is moved to their closest common ancestor.

Our approach follows the React principle of "lifting state up" by managing theme selection at the top level while delegating theme definition to a specialized component. It's a textbook example of good component composition in React.

## How theming works

How the **Theme Provider** Works

1. **Theme Definition**:
   
   - In `ThemeProvider.jsx`, we define multiple theme objects using MUI's `createTheme` function
   - Each theme specifies colors for:
     - `primary` and `secondary` elements,
     - `background` colors,
     - and mode (light/dark)
   - These themes are organized in an object with keys like '`light`', '`dark`', '`purple`', and '`green`'

2. **Component Structure**:
   
   - The `ThemeProvider` component wraps MUI's `ThemeProvider`
   - It takes two props: `children` (components to be rendered) and `currentTheme` (selected theme name)
   - It dynamically selects the appropriate theme object based on currentTheme

3. **Theme Application**:
   
   - In App.jsx, we maintain a state variable `currentTheme`
   - We wrap the entire application in our custom `ThemeProvider`, passing this state variable
   - When the theme changes in the sidebar dropdown, `App.js`x updates `currentTheme`, and `ThemeProvider` applies the new theme

```jsx
//App.jsx
import ThemeProvider from "./components/ThemeProvider";
// more imports
function App() {
  // hooks
  // toggleDrawer

  const handleThemeChange = (event) => {
    setCurrentTheme(event.target.value);
  };


  return (
    <ThemeProvider currentTheme={currentTheme}>
      <CssBaseline />
      <Router>
        // ...
      </Router>
    </ThemeProvider>
  );
}

export default App;
```

```jsx
//components/ThemeProvider.jsx
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
```

## Example: Home

> In our setup, the `ThemeProvider` component is responsible for providing the current theme to all child components, including the `Home` component. The `Home` component uses Material-UI's `styled` utility and other components like `Typography`, `Card`, `Paper`, etc., which automatically inherit the theme provided by the `ThemeProvider`.

Here’s how the `Home` component paints the current theme for each Material-UI component:

### 1. **Theme Propagation**

The `ThemeProvider` component wraps the entire application, including the `Home` component. It passes the selected theme (`light`, `dark`, `purple`, or `green`) down to all child components via React's context API.

```jsx
<ThemeProvider currentTheme={currentTheme}>
  <CssBaseline />
  <Router>
    {/* Home and other components */}
  </Router>
</ThemeProvider>
```

### 2. **Theme Usage in `Home` Component**

The `Home` component uses Material-UI components like `Typography`, `Card`, `Paper`, and `Box`, which automatically pick up the theme from the `ThemeProvider`. Here's how the theme is applied:

#### a. **Styled Components**

The `styled` utility is used to create custom-styled components (`Item` and `HeroHeader`) that dynamically adapt to the current theme.

```jsx
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  color: theme.palette.text.primary,
}));
```

- **`theme.palette.mode`**: Determines if the theme is `light` or `dark` and adjusts the background color accordingly.
- **`theme.typography.body2`**: Applies the typography styles defined in the theme.
- **`theme.spacing(3)`**: Uses the spacing system defined in the theme.
- **`theme.palette.text.primary`**: Uses the primary text color defined in the theme.

#### b. **Material-UI Components**

Components like `Typography`, `Card`, and `Paper` automatically use the theme's styles.

- **`Typography`**:
  
  ```jsx
  <Typography variant="h4" gutterBottom>
    Welcome to the World of Real Numbers
  </Typography>
  ```
  
  - The `variant="h4"` uses the `h4` typography style defined in the theme.
  - The `gutterBottom` prop adds a bottom margin based on the theme's spacing.

- **`Card` and `Paper`**:
  
  ```jsx
  <Card sx={{ mt: 4 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Did You Know?
      </Typography>
    </CardContent>
  </Card>
  ```
  
  - The `Card` and `Paper` components use the theme's background and elevation styles.
  - The `sx` prop allows you to apply theme-aware styles (e.g., `mt: 4` uses the theme's spacing system).

#### c. **Dynamic Colors**

The `HeroHeader` component uses the theme's color palette to set the text color.

```jsx
const HeroHeader = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white, // Uses the theme's white color
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
}));
```

### 3. **Theme-Aware Styles**

The `sx` prop is used to apply theme-aware styles dynamically. For example:

```jsx
<Typography
  variant="h2"
  component="h1"
  sx={{ zIndex: 1, fontWeight: "bold" }}
>
  Exploring the Maths with SpaceX
</Typography>
```

- The `sx` prop allows you to use theme properties like `spacing`, `palette`, and `typography` directly.

### 4. **Theme Switching**

When the `currentTheme` changes in `App.jsx`, the `ThemeProvider` updates the theme, and all components automatically re-render with the new theme.

```jsx
const handleThemeChange = (event) => {
  setCurrentTheme(event.target.value);
};
```

### Example: Theme in Action

#### Light Theme

- Background: White (`#fff`)
- Text: Dark (`#1A2027` for dark mode, otherwise default)
- Primary Color: Blue (`#1976d2`)
- Secondary Color: Pink (`#dc004e`)

#### Dark Theme

- Background: Dark (`#1A2027`)
- Text: Light (default for dark mode)
- Primary Color: Light Blue (`#90caf9`)
- Secondary Color: Light Pink (`#f48fb1`)

#### Purple Theme

- Background: Light (default)
- Primary Color: Purple (`#9c27b0`)
- Secondary Color: Pink (`#f50057`)

#### Green Theme

- Background: Light Green (`#f1f8e9`)
- Primary Color: Green (`#2e7d32`)
- Secondary Color: Orange (`#ff9800`)

## Summary

- The `ThemeProvider` passes the current theme to all child components.
- The `Home` component uses the theme via `styled` components, `sx` props, and Material-UI components.
- When the theme changes, all components automatically update to reflect the new theme.

This setup ensures that our application is fully theme-aware and dynamically adapts to the selected theme.
