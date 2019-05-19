import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

export default function Country(props) {
  const { flag, name, population, region, capital } = props.country;
  return (
    <>
      <Card style={{ height: '400px' }}>
        <CardMedia image={flag} style={{ width: '100%', height: '200px' }} />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            <b>{name}</b>
          </Typography>
          <Typography variant="body1">
            <b>Population:</b>{' '}
            {new Intl.NumberFormat('en-US', { useGrouping: true }).format(
              population
            )}
          </Typography>
          <Typography variant="body1">
            <b>Region:</b> {region}
          </Typography>
          <Typography variant="body1">
            <b>Capital:</b> {capital}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
