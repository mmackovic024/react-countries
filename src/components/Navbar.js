import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { WbSunny, Brightness2 } from '@material-ui/icons';

const styles = theme => ({
  link: { textDecoration: 'none', color: 'inherit' },
  button: { marginLeft: 'auto' }
});

function Navbar(props) {
  const { classes } = props;

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          <Link to="/" className={classes.link}>
            Where in the world?
          </Link>
        </Typography>
        <Button onClick={props.toggleTheme} className={classes.button}>
          {props.theme === 'light' ? (
            <>
              <Brightness2 />
              <Typography variant="h6">Dark mode</Typography>
            </>
          ) : (
            <>
              <WbSunny />
              <Typography variant="h6">Light mode</Typography>
            </>
          )}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);
