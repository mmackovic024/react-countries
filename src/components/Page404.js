import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

export default function Page404() {
  return (
    <>
      <Typography variant="h4" gutterBottom align="center">
        Sorry... Something went wrong :(
        <br />
        Try again later
      </Typography>
      <Typography variant="h5" align="center">
        <Link to="/" style={{ color: 'inherit' }}>
          Back to Homepage
        </Link>
      </Typography>
    </>
  );
}
