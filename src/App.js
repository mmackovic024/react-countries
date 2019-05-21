import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

const themeLight = createMuiTheme({
  palette: {
    type: 'light'
  }
});

const themeDark = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

function App() {
  const [theme, setTheme] = useState(true);

  function themeChange() {
    setTheme(!theme);
  }

  return (
    <ThemeProvider theme={theme ? themeLight : themeDark}>
      <Container
        style={{
          paddingTop: '86px'
        }}
      >
        <Navbar theme={themeChange} isLight={theme} />
        <CountriesList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
