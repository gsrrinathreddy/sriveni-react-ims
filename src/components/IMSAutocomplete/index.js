import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function IMSAutocomplete() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Store" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'Cake' },
  { label: 'Chocolates'},
  { label: 'Flowers' },
  { label: 'Gifts' },
  { label: 'Plants'}
]