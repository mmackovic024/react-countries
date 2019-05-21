import React from 'react';
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core';

export default function Navbar(props) {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          <Link href={'#'} underline="none" color="textPrimary">
            <b>Where in the world?</b>
          </Link>
        </Typography>
        <Button onClick={props.theme} style={{ marginLeft: 'auto' }}>
          {props.isLight ? <b>Dark theme</b> : <b>Light Theme</b>}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
