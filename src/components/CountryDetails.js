import React from 'react';
import { Link } from 'react-router-dom';
import useData from './useData';
import { Button, Container, Grid, Typography } from '@material-ui/core';

export default function CountryDetails(props) {
  const details = useData(
    `https://restcountries.eu/rest/v2/alpha/${props.match.params.code}`
  );
  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = details;

  return (
    <>
      <Container style={{ paddingTop: '2rem' }}>
        <Button
          onClick={props.history.goBack}
          variant="contained"
          color="primary"
        >
          ← Back
        </Button>
        <Grid container spacing={5} style={{ paddingTop: '4.5rem' }}>
          <Grid item sm={12} md={6}>
            <img src={flag} alt={`${name} flag`} width="95%" />
          </Grid>
          <Grid item sm={12} md={6}>
            <Grid container spacing={4} style={{ paddingTop: '2rem' }}>
              <Grid item xs={12}>
                <Typography variant="h4">
                  <b>{name}</b>
                </Typography>
              </Grid>
              <Grid item sm={12} md={6}>
                <Typography variant="body1" gutterBottom>
                  <b>Native name: </b> {nativeName}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <b>Population: </b>
                  {new Intl.NumberFormat('en-US', { useGrouping: true }).format(
                    population
                  )}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <b>Region: </b> {region}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <b>Subregion: </b> {subregion}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <b>Capital: </b> {capital}
                </Typography>
              </Grid>
              <Grid item sm={12} md={6}>
                <Typography variant="body1" gutterBottom>
                  Top level domain: {topLevelDomain}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Currencies: {currencies && currencies.map(b => `${b.name}, `)}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Languages: {languages && languages.map(l => `${l.name}, `)}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                Border countries:{' '}
                {borders &&
                  borders.map(b => (
                    <Button
                      key={b}
                      variant="contained"
                      color="primary"
                      style={{ margin: '3px' }}
                    >
                      <Link
                        to={`/country/${b}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        {b}
                      </Link>
                    </Button>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
