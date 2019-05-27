import React, { useState } from 'react';
import {
  Grid,
  FormControl,
  Select,
  OutlinedInput,
  MenuItem,
  TextField,
  InputAdornment,
  Fab
} from '@material-ui/core';
import { Search, KeyboardArrowUp } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import Country from './Country';

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
  }
});

function CountriesList(props) {
  const [currentRegion, setCurrentRegion] = useState('All');
  const [searchString, setSearchString] = useState('');
  const { regions, data, classes } = props;

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
      <Grid container spacing={8}>
        {currentRegion === 'All' &&
          data
            .filter(country =>
              country.name.toLowerCase().includes(searchString.toLowerCase())
            )
            .map(country => (
              <Grid item key={country.alpha3Code} lg={3} md={4} sm={6} xs={12}>
                <Country country={country} />
              </Grid>
            ))}
        {currentRegion !== 'All' &&
          data
            .filter(
              country =>
                country.region === currentRegion &&
                country.name.toLowerCase().includes(searchString.toLowerCase())
            )
            .map(country => (
              <Grid item key={country.alpha3Code} lg={3} md={4} sm={6} xs={12}>
                <Country country={country} />
              </Grid>
            ))}
        <Fab
          onClick={() => window.scrollTo(0, 0)}
          color="primary"
          className={classes.fab}
        >
          <KeyboardArrowUp />
        </Fab>
      </Grid>
    </>
  );
}

export default withStyles(styles)(CountriesList);
