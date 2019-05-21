import React, { useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

const themeLight = createMuiTheme({
  typography: {
    fontFamily: 'Nunito Sans',
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: 'hsl(0, 0%, 100%)'
    },
    secondary: {
      main: 'hsl(0, 0%, 98%)'
    },
    text: {
      primary: 'hsl(200, 15%, 8%)'
    },
    background: {
      paper: 'hsl(0, 0%, 100%)',
      default: 'hsl(0, 0%, 98%)'
    }
  }
});

const themeDark = createMuiTheme({
  typography: {
    fontFamily: 'Nunito Sans',
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: 'hsl(209, 23%, 22%)'
    },
    secondary: {
      main: 'hsl(207, 26%, 17%)'
    },
    text: {
      primary: 'hsl(0, 0%, 100%)'
    },
    background: {
      paper: 'hsl(209, 23%, 22%)',
      default: 'hsl(207, 26%, 17%)'
    }
  }
});

function App(props) {
  const [theme, setTheme] = useState(true);

  function themeChange() {
    setTheme(!theme);
  }

  return (
    <MuiThemeProvider theme={theme ? themeLight : themeDark}>
      <CssBaseline>
        <Container style={{ paddingTop: '86px' }}>
          <Navbar theme={themeChange} isLight={theme} />
          <CountriesList />
        </Container>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
