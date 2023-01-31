import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IMSRating from '../IMSRating';
import { useState } from 'react';
import { Stack } from '@mui/system';
import { Box, Chip, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { ordered as cakesordered} from '../../features/cake/cakeslice';
import { useDispatch } from 'react-redux'; 
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { ordered as chocolateordered } from '../../features/chocolates/ChocolatesSlice'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItemCard(props){
  let avatar = props.avatar;
  let title = props.title;
  const dispatch=useDispatch();
  //let subheader = props.subheader;
  let pic = props.pic;
  // let Cardcomponent = props.Cardcomponent;
  let ordername=props.ordername;
  let discountprice = props.discountprice;
  let actualprice = props.actualprice;
  let [qty,setQty]=React.useState(0);
  let sellingstatus = props.sellingstatus;
  let discount = actualprice-discountprice;
  let percentage = Math.floor((discount/actualprice)*100) +"% off" ;
  let total = discountprice;
  let orderPlaced = props.order;
  const [expanded, setExpanded] = React.useState(false);
  const[Active,setActive] = useState();
  const [open, setOpen] = React.useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  let params = {
    title:title,
    actualprice:actualprice,
    discountprice:discountprice,
    qty:parseInt(qty),
    total:discountprice
  }
  
  

    
    
    
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClick = ()=>{
    setActive(!Active);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  



 return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
      


        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
          
        }
        title={title}
        subheader="choco cake"
      />
      <CardMedia >
      <div style={{position:"relative"}}>
      <CardMedia style={{height:"250px",paddingTop:"2%"}} component="img" image={pic}/>
      <div style={{position:"absolute",alignItems:'flex-end',color:"red",top:10,left:"85%",
      transform:"translateX(-50%)",}}>
        <Stack spacing={1}>
          <Chip label={sellingstatus} color="success"/>
          
        </Stack>
      </div>
    </div>
     </CardMedia>
     <Stack direction="row" spacing={1}>
        <Chip label={percentage} color="primary" />
      </Stack>
      <CardContent>
      <Typography variant="body2" color="text.secondary" >

<LocalShippingIcon/>Earlier Deliver:Today 
</Typography>
        
        <CardActions>
       
        <Typography variant="body2" color="text.secondary" style={{textDecorationLine:"line-through"}}>

          Rs {actualprice}
        </Typography><Typography variant="body2" color="text.secondary">
          Rs {discountprice}
          </Typography><Typography variant="body2" color="text.secondary">
          
          <br/>
          
          <TextField sx={{width:'70px'}} size="small" id="outlined-basic"  variant="outlined" defaultValue={1} onChange={(e)=>setQty(e.currentTarget.value)}/>
          <Button endIcon={<AddShoppingCartOutlinedIcon/>} onClick={()=>dispatch(
            cakesordered(params))
            
            
            }
           >Add</Button>
         </Typography>
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {qty} items added in your cart!
        </Alert>
      </Snackbar>
        
        </CardActions>
        
    
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"
        onClick={handleClick}
        style={{color:Active ?"red":"black"}}
        >
          <FavoriteIcon />
        </IconButton>
              
        
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Typography paragraph>
            <IMSRating/>
          </Typography> 
      </CardActions>
  
    </Card>    
    );

}
