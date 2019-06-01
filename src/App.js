import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Container, CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Page404 from './components/Page404';
import { dark, light } from './components/themes';
import useTheme from './components/useTheme';
import useData from './components/useData';

function App() {
  const [theme, toggleTheme] = useTheme();
  const [{ data, isLoading, isError }] = useData(
    'https://restcountries.eu/rest/v2/all',
    []
  );
  const [regions, setRegions] = useState([]);
  const [currentRegion, setCurrentRegion] = useState('All');

  useEffect(() => {
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
    return;
  }, [data]);

  return (
    <HashRouter basename="/">
      <MuiThemeProvider theme={theme === 'light' ? light : dark}>
        <CssBaseline>
          <Container style={{ paddingTop: '5.5rem' }}>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <CountriesList
                    {...props}
                    isError={isError}
                    data={data}
                    regions={regions}
                    currentRegion={currentRegion}
                    setCurrentRegion={setCurrentRegion}
                  />
                )}
              />
              <Route
                exact
                path="/country/:code"
                render={props => (
                  <CountryDetails
                    {...props}
                    isLoading={isLoading}
                    isError={isError}
                    details={data.find(
                      country => country.alpha3Code === props.match.params.code
                    )}
                    data={data}
                  />
                )}
              />
              <Route component={Page404} />
            </Switch>
          </Container>
        </CssBaseline>
      </MuiThemeProvider>
    </HashRouter>
  );
}

export default App;
