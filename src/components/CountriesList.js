import React from 'react';
import { Grid } from '@material-ui/core';
import Country from './Country';

export default function CountriesList(props) {
  const { data } = props;
  console.log(data.map(c => c.region));
  return (
    <>
      <Grid container spacing={10}>
        {data.map(country => (
          <Grid item key={country.alpha3Code} lg={3} md={4} sm={6} xs={12}>
            <Country country={country} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
