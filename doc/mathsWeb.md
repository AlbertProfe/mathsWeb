# mathsWeb Themes

## Links & Intro

- [MUI Theming](https://mui.com/material-ui/customization/theming/)

- [Color](https://m2.material.io/inline-tools/color/)

- [MUI Theme Creator](https://zenoo.github.io/mui-theme-creator/)

We'll create a React project:

- with Material UI
- and React Router Dom
- npm create vite@latest

This will include a counter functionality with `useState`, three pages (Home, Imaginary, and Counter), and <mark>theme selection capabilities</mark>.

## Components

The project init draft includes:

1. **Theme Selection**:
   
   - Three themes: `Light`, `Dark`, and `Purple`
   - <mark>Theme provider</mark> implementation
   - Theme selection from the `drawer/sidebar`

2. **Navigation**:
   
   - Responsive **drawer/sidebar** with navigation links
   - Routes for Home, Imaginary, and Counter pages

3. **Counter Functionality**:
   
   - Counter state managed in App.jsx
   - Increment button on the Counter page
   - Counter value passed as props

4. **Content**:
   
   - Home page with information about real numbers
   - Imaginary page with information about imaginary numbers
   - Counter page with the counter implementation

5. **Material UI Components**:
   
   - `AppBar`, `Drawer`, `Cards`, `Grids`, `Typography`, etc.
   - Responsive design for different screen sizes

To set up and run this project:

1. Create a new React project using `create-react-app` or `npm create vite@latest`
2. Install the required dependencies (`MUI` and `React Router`)
3. Copy the provided files to their respective locations
4. Start the development server

## How the Theme provider works

> The ThemeProvider in this React application is a powerful abstraction layer that centralizes theme management.
> 
> This abstraction follow good practices and the "**Lifting state up**" pattern.
> 
> "**Lifting state up**" is a fundamental React pattern where state that needs to be shared between components is moved to their closest common ancestor.

Our approach follows the React principle of "lifting state up" by managing theme selection at the top level while delegating theme definition to a specialized component. <mark>It's a textbook example of good component composition in React</mark>.

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

### Why It's So Useful

1. **Separation of Concerns**:
   
   - Theme definitions are isolated from the rest of the application
   - This makes themes easier to modify without touching other components

2. **Centralized Theme Management**:
   
   - All theme definitions are in one place
   - Adding new themes only requires changes to ThemeProvider.jsx

3. **Consistent Styling**:
   
   - MUI's ThemeProvider ensures theme values cascade down to all components
   - Components automatically receive the correct styling without needing individual styling props

4. **Dynamic Theme Switching**:
   
   - Users can change themes without page reloads
   - The application immediately responds to theme changes

5. **Design System Enforcement**:
   
   - Enforces consistent use of colors, typography, and spacing
   - Prevents "rogue" styling that deviates from the design system

6. **Reusability**:
   
   - The ThemeProvider can be reused across different projects
   - New projects can inherit established themes

7. **Extensibility**:
   
   - Easy to add dark mode, high contrast, or accessibility themes
   - Can be extended to support user-customized themes

## Decoupled approach

```bash
math-explorer/
├── public/
└── src/
    ├── components/
    │   ├── SideBar.jsx
    │   └── ThemeProvider.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── About.jsx
    │   └── Counter.jsx
    ├── App.jsx
    └── index.js
```

1. **App.jsx**:
   - Contains the main layout and routes
   - Manages the application state (drawer open/closed, theme selection, counter)
   - Imports and uses the SideBar and ThemeProvider components
2. **SideBar.jsx**:
   - Handles the drawer UI and navigation
   - Contains the theme selection dropdown
   - Receives props from App.jsx for drawer state and theme selection
3. **ThemeProvider.jsx**:
   - Defines all the themes (light, dark, purple, green)
   - Exports a component that wraps the application with the proper theme
   - Receives the current theme as a prop from App.jsx

This architecture improves code organization and maintainability by:

- Separating concerns into distinct components
- Keeping theme-related code in its own file
- Making components more reusable and easier to test
- Allowing for easier theme management and expansion

## Code

```jsx
// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CounterIcon from '@mui/icons-material/AddCircle';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';

import Home from './pages/Home';
import Imaginary from './pages/Imaginary';
import Counter from './pages/Counter';

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

function App() {
  const [open, setOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');
  const [count, setCount] = useState(0);

  const themes = {
    light: lightTheme,
    dark: darkTheme,
    purple: purpleTheme,
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
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Imaginary', icon: <InfoIcon />, path: '/Imaginary' },
    { text: 'Counter', icon: <CounterIcon />, path: '/counter' },
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
              <ListItemButton component={Link} to={item.path} onClick={toggleDrawer(false)}>
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
          <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
          >
            {drawer}
          </Drawer>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Imaginary" element={<Imaginary />} />
              <Route path="/counter" element={<Counter count={count} incrementCounter={incrementCounter} />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
```

```jsx
// pages/Home.jsx
import React from 'react';
import { Typography, Card, CardContent, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  color: theme.palette.text.primary,
}));

function Home() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome to the World of Real Numbers
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Item>
            <Typography variant="h6" gutterBottom>
              What are Real Numbers?
            </Typography>
            <Typography paragraph>
              Real numbers include all rational and irrational numbers. They can be represented as points on an infinitely long number line. These numbers can be positive, negative, or zero.
            </Typography>
            <Typography paragraph>
              Examples of real numbers include:
            </Typography>
            <Typography component="ul">
              <li>Integers: -3, -2, -1, 0, 1, 2, 3</li>
              <li>Fractions: 1/2, 3/4, 5/6</li>
              <li>Decimals: 0.5, 3.14159</li>
              <li>Irrational numbers: π, √2, e</li>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <Typography variant="h6" gutterBottom>
              Properties of Real Numbers
            </Typography>
            <Typography paragraph>
              Real numbers have several important properties:
            </Typography>
            <Typography component="ul">
              <li><strong>Closure:</strong> The sum, difference, product, and quotient (except division by zero) of two real numbers is always a real number.</li>
              <li><strong>Associativity:</strong> (a + b) + c = a + (b + c) and (a × b) × c = a × (b × c)</li>
              <li><strong>Commutativity:</strong> a + b = b + a and a × b = b × a</li>
              <li><strong>Distributivity:</strong> a × (b + c) = (a × b) + (a × c)</li>
            </Typography>
          </Item>
        </Grid>
      </Grid>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Did You Know?
          </Typography>
          <Typography paragraph>
            The concept of real numbers was developed over centuries, with contributions from mathematicians around the world. The term "real" was introduced to distinguish these numbers from the newly discovered "imaginary" numbers like √(-1).
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;

// pages/Imaginary.jsx
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
        Imaginary Imaginary Numbers
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

// pages/Counter.jsx
import React from 'react';
import { Typography, Button, Paper, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  color: theme.palette.text.primary,
  textAlign: 'center',
}));

function Counter({ count, incrementCounter }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Counter Example
      </Typography>

      <Item>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
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
            This counter demonstrates the use of React's useState hook to manage state across components.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            The counter value is stored in the App component and passed down to this Counter component as a prop.
          </Typography>
        </Box>
      </Item>
    </div>
  );
}

export default Counter;
```

```bash
# Create a new React project
npx create-react-app math-explorer

# Navigate to the project directory
cd math-explorer

# Install required dependencies
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom

# Create the necessary directories
mkdir -p src/pages

# Copy the provided files to their respective locations
# App.jsx goes in the src directory
# Home.jsx, Imaginary.jsx, and Counter.jsx go in the src/pages directory

# Start the development server
npm start
```

## Decouple sidebar

We'll decouple the `SideBar` component into smaller, more focused components. This approach will improve maintainability and reusability.

```jsx
// components/SideBar.jsx
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

// components/NavigationList.jsx
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

function NavigationList({ toggleDrawer }) {
  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Imaginary", icon: <InfoIcon />, path: "/imaginary" },
    { text: "Counter", icon: <CounterIcon />, path: "/counter" },
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

// components/ThemeSelector.jsx
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
```

I've broken down the SideBar component into three distinct components:

1. **SideBar.jsx**:
   
   - Acts as a container component
   - Handles the drawer structure and layout
   - Composes other components together

2. **NavigationList.jsx**:
   
   - Responsible for rendering the navigation menu items
   - Contains the menu items configuration
   - Handles navigation links and icons

3. **ThemeSelector.jsx**:
   
   - Focused solely on theme selection
   - Manages the theme dropdown UI
   - Can be easily reused in other parts of the application

This decoupling offers several benefits:

- **Single Responsibility**: Each component has one clear purpose
- **Improved Maintainability**: Changes to navigation or theme selection don't affect each other
- **Better Reusability**: The ThemeSelector could be used elsewhere in the app
- **Easier Testing**: Smaller components are easier to test in isolation
- **Cleaner Code**: Each file is shorter and more focused

The functionality remains identical to the original component, but the code is now more modular and follows better React component composition patterns.

## Lifting State Up

"Lifting state up" is a fundamental React pattern where state that needs to be shared between components is moved to their closest common ancestor. In our theme implementation:

1. The theme selection state lives in App.jsx (the parent)
2. It's passed down to both SideBar.jsx (for selection) and ThemeProvider.jsx (for application)

This is not just a React concept but part of broader software design principles.

### Design Patterns in Our Implementation

The overall approach combines several established design patterns:

1. **Provider Pattern** - A core pattern in React where a provider component makes a value available to all its descendant components. Our ThemeProvider implements this pattern by wrapping MUI's own ThemeProvider.

2. **Composition Pattern** - Breaking down the UI into specialized, reusable components that can be composed together. We've separated concerns between App, SideBar, and ThemeProvider.

3. **Container/Presentational Pattern** - App.jsx acts as a container component (managing state and logic) while SideBar.jsx is more presentational (focused on rendering UI based on props).

4. **Dependency Injection** - The current theme is "injected" into the ThemeProvider component, making it more flexible and testable.

5. **Strategy Pattern** - Different themes represent different "strategies" for styling the application, which can be swapped at runtime.

In the broader context of software architecture, this approach follows principles of **Separation of Concerns** and **Single Responsibility Principle** - each component has one primary responsibility and is focused on doing it well.

These patterns together create a maintainable, extensible codebase that follows best practices in modern React development.
