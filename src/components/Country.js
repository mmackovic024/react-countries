import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';

export default function Country(props) {
  const { flag, name, population, region, capital, alpha3Code } = props.country;
  return (
    <>
      <CardActionArea>
        <Link to={`/country/${alpha3Code}`} style={{ textDecoration: 'none' }}>
          <Card style={{ height: '380px', maxWidth: '300px', margin: 'auto' }}>
            <CardMedia
              component="img"
              image={flag}
              style={{ width: '100%', height: '175px' }}
            />
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
        </Link>
      </CardActionArea>
    </>
  );
}
