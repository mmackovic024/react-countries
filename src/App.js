import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import useData from './components/useData';
import { themeDark, themeLight } from './components/themes';

function App() {
  const [light, setLight] = useState(true);
  const data = useData('https://restcountries.eu/rest/v2/all');

  function modeChange() {
    setLight(!light);
  }

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline>
          <Container style={{ paddingTop: '7.5rem' }}>
            <Navbar theme={modeChange} isLight={light} />
            <Route
              exact
              path="/"
              render={props => <CountriesList {...props} data={data} />}
            />
            <Route exact path="/country/:code" component={CountryDetails} />
          </Container>
        </CssBaseline>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
