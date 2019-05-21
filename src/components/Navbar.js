import React from 'react';
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core';

export default function Navbar(props) {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          <Link href={'#'} underline="none" color="textPrimary">
            <b>Where in the world?</b>
          </Link>
        </Typography>
        <Button onClick={props.theme} style={{ marginLeft: 'auto' }}>
          {props.isLight ? (
            <Typography variant="h6">
              <span role="img" aria-label="moon">
                🌙
              </span>{' '}
              Dark mode
            </Typography>
          ) : (
            <Typography variant="h6">
              <span role="img" aria-label="sun">
                🌞
              </span>{' '}
              Light mode
            </Typography>
          )}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
