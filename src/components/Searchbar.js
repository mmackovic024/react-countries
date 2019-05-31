import React from 'react';
import { FormControl, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Searchbox from './Searchbox';
import RegionsMenu from './RegionsMenu';

const styles = theme => ({
  form: {
    display: 'flex',
    margin: '1rem 0 1rem',
    color: 'inherit',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  },
  textField: {
    width: '23rem',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1rem'
    }
  },
  select: {
    width: '10rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1rem'
    }
  }
});

function Searchbar(props) {
  const {
    classes,
    setSearchString,
    currentRegion,
    setCurrentRegion,
    regions
  } = props;
  return (
    <FormControl variant="outlined" className={classes.form}>
      <Searchbox
        onChange={e => setSearchString(e.target.value)}
        className={classes.textField}
      />
      <RegionsMenu
        value={currentRegion}
        onChange={e => setCurrentRegion(e.target.value)}
        className={classes.select}
      >
        {regions &&
          regions.map(region => (
            <MenuItem key={region} value={region}>
              {region}
            </MenuItem>
          ))}
      </RegionsMenu>
    </FormControl>
  );
}

export default withStyles(styles)(Searchbar);
