import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Item from './Item';

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
      <Grid item lg={3} md={4} sm={6} xs={12}>
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
                <Item
                  forpage="home"
                  title="Population"
                  value={new Intl.NumberFormat('en-US', {
                    useGrouping: true
                  }).format(population)}
                />
                <Item forpage="home" title="Region" value={region} />
                <Item forpage="home" title="Capital" value={capital} />
              </CardContent>
            </Card>
          </Link>
        </CardActionArea>
      </Grid>
    </>
  );
}

export default withStyles(styles)(Country);
