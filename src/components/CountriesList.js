import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Axios from 'axios';
import Country from './Country';

export default function CountriesList() {
  const [data, setData] = useState([]);
  const countriesAPI = 'https://restcountries.eu/rest/v2/all';

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(countriesAPI);
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        {data.map(country => (
          <Grid item key={country.alpha3Code} lg={3} md={4} sm={6} xs={12}>
            <Country country={country} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
