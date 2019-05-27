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
      <CardActionArea
        style={{ height: '380px', maxWidth: '300px', margin: 'auto' }}
      >
        <Link to={`/country/${alpha3Code}`} style={{ textDecoration: 'none' }}>
          <Card style={{ height: '380px' }}>
            <CardMedia
              component="img"
              image={flag}
              style={{ width: '100%', height: '175px' }}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {name}
              </Typography>
              <Typography variant="subtitle1" display="inline">
                Population:{' '}
              </Typography>
              <Typography variant="body1" display="inline">
                {new Intl.NumberFormat('en-US', { useGrouping: true }).format(
                  population
                )}
              </Typography>
              <br />
              <Typography variant="subtitle1" display="inline">
                Region:{' '}
              </Typography>
              <Typography variant="body1" display="inline">
                {region}
              </Typography>
              <br />
              <Typography variant="subtitle1" display="inline">
                Capital:{' '}
              </Typography>
              <Typography variant="body1" display="inline">
                {capital}
              </Typography>
              <br />
            </CardContent>
          </Card>
        </Link>
      </CardActionArea>
    </>
  );
}
