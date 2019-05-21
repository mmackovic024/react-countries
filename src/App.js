import React, { useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { themeDark, themeLight } from './components/themes';

function App() {
  const [theme, setTheme] = useState(true);

  function themeChange() {
    setTheme(!theme);
  }

  return (
    <MuiThemeProvider theme={theme ? themeLight : themeDark}>
      <CssBaseline>
        <Container style={{ paddingTop: '5.5rem' }}>
          <Navbar theme={themeChange} isLight={theme} />
          <CountriesList />
        </Container>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
