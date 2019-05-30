import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Page404 from './Page404';
import Item from './Item';

const styles = () => ({
  grid: { paddingTop: '2rem' },
  button: { margin: '3px' },
  link: { textDecoration: 'none', color: 'inherit' }
});

function CountryDetails(props) {
  const { classes, details, data } = props;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!details) return <Page404 />;

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

  const borderCountries = borders.map(code =>
    data.reduce((countries, currentCountry) => {
      currentCountry.alpha3Code === code &&
        Object.assign(countries, {
          code: currentCountry.alpha3Code,
          name: currentCountry.name
        });
      return countries;
    }, {})
  );

  return (
    <>
      <Container>
        <Button
          onClick={props.history.goBack}
          variant="contained"
          color="primary"
        >
          ← Back
        </Button>
        <Grid container spacing={5} className={classes.grid}>
          <Grid item sm={12} md={6}>
            <img src={flag} alt={`${name} flag`} width="95%" />
          </Grid>
          <Grid item sm={12} md={6}>
            <Grid container spacing={4} className={classes.grid}>
              <Grid item xs={12}>
                <Typography variant="h4">{name}</Typography>
              </Grid>
              <Grid item sm={12} md={6}>
                <Item
                  forpage="details"
                  title="Native name"
                  value={nativeName}
                />
                <Item
                  forpage="details"
                  title="Population"
                  value={new Intl.NumberFormat('en-US', {
                    useGrouping: true
                  }).format(population)}
                />
                <Item forpage="details" title="Region" value={region} />
                <Item forpage="details" title="Subregion" value={subregion} />
                <Item forpage="details" title="Capital" value={capital} />
              </Grid>
              <Grid item sm={12} md={6}>
                <Item
                  forpage="details"
                  title="Top level domain"
                  value={topLevelDomain}
                />
                <Item
                  forpage="details"
                  title="Currencies"
                  value={
                    currencies &&
                    currencies.map(
                      (currency, index) =>
                        currency.name +
                        (index === currencies.length - 1 ? '' : ', ')
                    )
                  }
                />
                <Item
                  forpage="details"
                  title="Languages"
                  value={
                    languages &&
                    languages.map(
                      (lang, index) =>
                        lang.name + (index === languages.length - 1 ? '' : ', ')
                    )
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" display="inline" gutterBottom>
                  Border countries:{' '}
                </Typography>
                {borderCountries.map(({ code, name }) => (
                  <Button
                    key={code}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    <Link to={`/country/${code}`} className={classes.link}>
                      {name}
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

export default withStyles(styles)(CountryDetails);
