import React, { useState, Suspense } from 'react';
import {
  Grid,
  FormControl,
  Select,
  OutlinedInput,
  MenuItem,
  TextField,
  InputAdornment,
  Fab,
  CircularProgress,
  Fade
} from '@material-ui/core';
import { Search, KeyboardArrowUp } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
const Country = React.lazy(() => import('./Country'));

const styles = theme => ({
  form: {
    display: 'flex',
    margin: '1rem 0 2rem',
    color: 'inherit',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  },
  textField: {
    width: '23rem',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2rem'
    }
  },
  select: {
    width: '10rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1rem'
    }
  },
  fab: {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem'
  },
  progress: {
    color: theme.palette.error.main,
    position: 'relative',
    left: '50%'
  }
});

function CountriesList(props) {
  const [currentRegion, setCurrentRegion] = useState('All');
  const [searchString, setSearchString] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { regions, data, classes } = props;

  function handleScroll() {
    let winHeight = window.innerHeight,
      winScroll = window.pageYOffset;
    winScroll > winHeight / 4 ? setScrolled(true) : setScrolled(false);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <FormControl variant="outlined" className={classes.form}>
        <TextField
          id="outlined-search"
          placeholder="Search for a country..."
          type="search"
          onChange={e => setSearchString(e.target.value)}
          className={classes.textField}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
        />
        <Select
          value={currentRegion}
          placeholder="Filter by Region"
          onChange={e => setCurrentRegion(e.target.value)}
          className={classes.select}
          input={<OutlinedInput name="region" id="outlined-region" />}
        >
          <MenuItem value="All">Filter by Region</MenuItem>
          {regions &&
            regions.map(region => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <Suspense
        fallback={
          <CircularProgress
            disableShrink
            size={70}
            thickness={4}
            variant="indeterminate"
            className={classes.progress}
          />
        }
      >
        <Grid container spacing={8}>
          {currentRegion === 'All' &&
            data
              .filter(country =>
                country.name.toLowerCase().includes(searchString.toLowerCase())
              )
              .map(country => (
                <Grid
                  item
                  key={country.alpha3Code}
                  lg={3}
                  md={4}
                  sm={6}
                  xs={12}
                >
                  <Country country={country} />
                </Grid>
              ))}
          {currentRegion !== 'All' &&
            data
              .filter(
                country =>
                  country.region === currentRegion &&
                  country.name
                    .toLowerCase()
                    .includes(searchString.toLowerCase())
              )
              .map(country => (
                <Grid
                  item
                  key={country.alpha3Code}
                  lg={3}
                  md={4}
                  sm={6}
                  xs={12}
                >
                  <Country country={country} />
                </Grid>
              ))}
          <Fade in={scrolled}>
            <Fab
              onClick={() => window.scrollTo(0, 0)}
              color="primary"
              className={classes.fab}
            >
              <KeyboardArrowUp />
            </Fab>
          </Fade>
        </Grid>
      </Suspense>
    </>
  );
}

export default withStyles(styles)(CountriesList);
