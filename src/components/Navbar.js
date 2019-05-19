import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';

export default function Navbar() {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          <Link href={'#'} underline="none" color="textPrimary">
            <b>Where in the world?</b>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
