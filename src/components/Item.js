import React from 'react';
import { Typography } from '@material-ui/core';

export default function Item(props) {
  const { forpage, title, value } = props;
  return (
    <>
      <Typography
        variant={
          (forpage === 'home' && 'subtitle2') ||
          (forpage === 'details' && 'subtitle1')
        }
        display="inline"
      >
        {title}
        {': '}
      </Typography>
      <Typography
        variant={
          (forpage === 'home' && 'body2') || (forpage === 'details' && 'body1')
        }
        display="inline"
      >
        {value}
      </Typography>
      <br />
    </>
  );
}
