import React, { useState, Suspense } from 'react';
import { Grid, Fab, CircularProgress, Fade } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';
import Searchbar from './Searchbar';
import Page404 from './Page404';
const Country = React.lazy(() => import('./Country'));

const styles = theme => ({
  content: { paddingTop: '1rem' },
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
  const [searchString, setSearchString] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const {
    regions,
    data,
    classes,
    currentRegion,
    setCurrentRegion,
    isError
  } = props;

  function handleScroll() {
    let winHeight = window.innerHeight,
      winScroll = window.pageYOffset;
    winScroll > winHeight / 4 ? setScrolled(true) : setScrolled(false);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  });

  const searchAll = data.filter(country =>
    country.name.toLowerCase().includes(searchString.toLowerCase())
  );

  const searchRegion = data.filter(
    country =>
      country.region === currentRegion &&
      country.name.toLowerCase().includes(searchString.toLowerCase())
  );

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <>
      {!isError && (
        <>
          <Searchbar
            setSearchString={setSearchString}
            currentRegion={currentRegion}
            setCurrentRegion={setCurrentRegion}
            regions={regions}
          />
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
            <Grid container spacing={8} className={classes.content}>
              {currentRegion === 'All' &&
                searchAll.map(country => (
                  <Country key={country.alpha3Code} country={country} />
                ))}
              {currentRegion !== 'All' &&
                searchRegion.map(country => (
                  <Country key={country.alpha3Code} country={country} />
                ))}
              <Fade in={scrolled} timeout={500}>
                <Fab
                  onClick={scrollToTop}
                  color="primary"
                  className={classes.fab}
                >
                  <KeyboardArrowUp />
                </Fab>
              </Fade>
            </Grid>
          </Suspense>
        </>
      )}
      {isError && <Page404 />}
    </>
  );
}

export default withStyles(styles)(CountriesList);
