import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  cardAction: {
    height: '380px',
    maxWidth: '300px',
    margin: 'auto'
  },
  link: {
    textDecoration: 'none'
  },
  card: {
    height: '380px'
  },
  cardMedia: {
    width: '100%',
    height: '175px'
  }
});

function Country(props) {
  const {
    country: { flag, name, population, region, capital, alpha3Code },
    classes
  } = props;

  return (
    <>
      <CardActionArea className={classes.cardAction}>
        <Link to={`/country/${alpha3Code}`} className={classes.link}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              image={flag}
              className={classes.cardMedia}
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

export default withStyles(styles)(Country);
