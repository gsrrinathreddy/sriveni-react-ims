import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from 'react-redux';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartComp(props) {

    const orderedcakes = useSelector((state)=>state.cake.noOfordered)
    let orderedChocolate = useSelector((state)=>state.Chocolates.noOfordered)
    //const orderedGift = useSelector((state)=>state.Gift.noOfordered)
    //const orderedPlants = useSelector((state)=>state.plants.noOfordered) 
    let orderedFlowers=useSelector((state)=>state.Flower.noOfordered)
    let sum = orderedcakes+orderedChocolate+orderedFlowers
    //let badgeContent=props.badgeContent
    let color=props.color
  return (
    <>
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={sum} color="secondary">
        <ShoppingCartIcon  sx={{color:{color}}}/>
      </StyledBadge>
    </IconButton>
    </>
  );
}