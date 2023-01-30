import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Basicbutton(props) {
  let imstext = props.imstext
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" sx={{color:'red'}}>{imstext}</Button>
      
    </Stack>
  );
}