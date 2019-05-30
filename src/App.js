import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Page404 from './components/Page404';
import { dark, light } from './components/themes';
import useTheme from './components/useTheme';

function App() {
  const [theme, toggleTheme] = useTheme();
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

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme === 'light' ? light : dark}>
        <CssBaseline>
          <Container style={{ paddingTop: '5.5rem' }}>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <Switch>
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
              <Route component={Page404} />
            </Switch>
          </Container>
        </CssBaseline>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
