import React from 'react';
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
import Country from './Country';

const scrollTop = () => {
  window.scrollTo(0, 0);
};

export default function CountriesList(props) {
  const [currentRegion, setCurrentRegion] = React.useState('All');
  const [searchString, setSearchString] = React.useState('');
  const { data } = props;
  const regions = data
    .map(country => country.region)
    .reduce((regions, region) => {
      if (regions.indexOf(region) === -1) {
        region !== '' && regions.push(region);
      }
      return regions;
    }, []);

  return (
    <>
      <FormControl
        variant="outlined"
        style={{
          display: 'flex',
          margin: '1rem 0 2rem',
          color: 'inherit',
          flexFlow: 'row wrap',
          justifyContent: 'space-between',
          alignContent: 'space-between'
        }}
      >
        <TextField
          id="outlined-search"
          placeholder="Search for a country..."
          type="search"
          onChange={e => setSearchString(e.target.value)}
          // className={classes.textField}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
          style={{ width: '25rem', color: 'inherit' }}
        />
        <Select
          value={currentRegion}
          placeholder="Filter by Region"
          onChange={e => setCurrentRegion(e.target.value)}
          style={{
            width: '10rem',
            color: 'inherit'
          }}
          input={<OutlinedInput name="region" id="outlined-region" />}
        >
          <MenuItem disabled value="All">
            Filter by Region
          </MenuItem>
          <MenuItem value="All">All</MenuItem>
          {regions.map(region => (
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
          onClick={scrollTop}
          color="primary"
          style={{
            position: 'fixed',
            bottom: '1rem',
            right: '1rem'
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </Grid>
    </>
  );
}
