import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { themeDark, themeLight } from './components/themes';

function App() {
  const [light, setLight] = useState(true);
  const [data, setData] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        if (!ignore) {
          setData(data);
          setRegions(
            data
              .reduce((regions, country) => {
                if (regions.indexOf(country.region) === -1) {
                  country.region !== '' && regions.push(country.region);
                }
                return regions;
              }, [])
              .sort()
          );
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  function modeChange() {
    setLight(!light);
  }

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline>
          <Container style={{ paddingTop: '5.5rem' }}>
            <Navbar theme={modeChange} isLight={light} />
            <Route
              exact
              path="/"
              render={props => (
                <CountriesList {...props} data={data} regions={regions} />
              )}
            />
            <Route
              exact
              path="/country/:code"
              render={props => <CountryDetails {...props} data={data} />}
            />
          </Container>
        </CssBaseline>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
