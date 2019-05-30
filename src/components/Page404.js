import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

export default function Page404() {
  return (
    <>
      <Typography variant="h4" gutterBottom align="center">
        Sorry... Page not found :(
        <br />
      </Typography>
      <Typography variant="h5" align="center">
        <Link to="/">Back to Homepage</Link>
      </Typography>
    </>
  );
}
