import React from 'react';
import { Select, MenuItem, OutlinedInput } from '@material-ui/core';

export default function RegionsMenu(props) {
  return (
    <>
      <Select
        {...props}
        placeholder="Filter by Region"
        input={<OutlinedInput name="region" id="outlined-region" />}
      >
        <MenuItem value="All">Filter by Region</MenuItem>
        {props.children}
      </Select>
    </>
  );
}
