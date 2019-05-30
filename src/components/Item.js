import React from 'react';
import { Typography } from '@material-ui/core';

export default function Item(props) {
  return (
    <>
      <Typography
        variant={
          (props.forpage === 'home' && 'subtitle2') ||
          (props.forpage === 'details' && 'subtitle1')
        }
        display="inline"
      >
        {props.title}
        {': '}
      </Typography>
      <Typography
        variant={
          (props.forpage === 'home' && 'body2') ||
          (props.forpage === 'details' && 'body1')
        }
        display="inline"
      >
        {props.value}
      </Typography>
      <br />
    </>
  );
}
