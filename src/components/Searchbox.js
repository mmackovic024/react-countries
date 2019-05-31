import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';

export default function Searchbox(props) {
  return (
    <>
      <TextField
        {...props}
        id="outlined-search"
        placeholder="Search for a country..."
        type="search"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          )
        }}
      />
    </>
  );
}
