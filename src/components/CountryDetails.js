import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Page404 from './Page404';

const styles = () => ({
  grid: { paddingTop: '2rem' },
  button: { margin: '3px' },
  link: { textDecoration: 'none', color: 'inherit' }
});

function CountryDetails(props) {
  const { classes } = props;

  const details = props.data.find(
    country => country.alpha3Code === props.match.params.code
  );

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

  const borderCountries = borders.map(border =>
    props.data.reduce((acc, cur) => {
      cur.alpha3Code === border &&
        Object.assign(acc, { code: cur.alpha3Code, name: cur.name });
      return acc;
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
                <Typography variant="subtitle1" display="inline" gutterBottom>
                  Native name:{' '}
                </Typography>
                <Typography variant="body1" display="inline" gutterBottom>
                  {nativeName}
                </Typography>
                <br />
                <Typography variant="subtitle1" display="inline" gutterBottom>
                  Population:{' '}
                </Typography>
                <Typography variant="body1" display="inline" gutterBottom>
                  {new Intl.NumberFormat('en-US', { useGrouping: true }).format(
                    population
                  )}
                </Typography>
                <br />
                <Typography variant="subtitle1" display="inline" gutterBottom>
                  Region:{' '}
                </Typography>
                <Typography variant="body1" display="inline" gutterBottom>
                  {region}
                </Typography>
                <br />
                <Typography variant="subtitle1" display="inline" gutterBottom>
                  Subregion:{' '}
                </Typography>
                <Typography variant="body1" display="inline" gutterBottom>
                  {subregion}
                </Typography>
                <br />
                <Typography variant="subtitle1" display="inline" gutterBottom>
                  Capital:{' '}
                </Typography>
                <Typography variant="body1" display="inline" gutterBottom>
                  {capital}
                </Typography>
                <br />
              </Grid>
              <Grid item sm={12} md={6}>
                <Typography variant="subtitle1" display="inline" gutterBottom>
                  Top level domain:{' '}
                </Typography>
                <Typography variant="body1" display="inline" gutterBottom>
                  {topLevelDomain}
                </Typography>
                <br />
                <Typography variant="subtitle1" display="inline" gutterBottom>
                  Currencies:{' '}
                </Typography>
                <Typography variant="body1" display="inline" gutterBottom>
                  {currencies &&
                    currencies.map(
                      (curr, index) =>
                        curr.name +
                        (index === currencies.length - 1 ? '' : ', ')
                    )}
                </Typography>
                <br />
                <Typography variant="subtitle1" display="inline" gutterBottom>
                  Languages:{' '}
                </Typography>
                <Typography variant="body1" display="inline" gutterBottom>
                  {languages &&
                    languages.map(
                      (lang, index) =>
                        lang.name + (index === languages.length - 1 ? '' : ', ')
                    )}
                </Typography>
                <br />
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
