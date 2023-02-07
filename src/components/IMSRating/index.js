import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function IMSRating() {
  
  const [values,setValues]=React.useState(4)

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      
      <StyledRating
        name="customized-color"
        defaultValue={values}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        onChange={(event,newValue)=>{
          setValues(newValue);
        }}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />

      <Chip label={values} color="success" variant="outlined"></Chip>
    </Box>
  );
}