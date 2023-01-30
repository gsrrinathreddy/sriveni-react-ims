import Grid from '@mui/material/Grid';
//import {Button} from '@mui/material';
import{useDispatch,useSelector} from 'react-redux';
import {Box} from '@mui/material';
//import cartComponent from '../../../components/cartComponent';
import box1 from '../../../assets/Gifts/box_1.webp';
import chocolategiftbox from '../../../assets/Gifts/chocolate-gift-box_1.webp';
import ItemCard from '../../../components/ItemCard';
const GiftsList = [
    {
    title:"box 1",
    pic:box1,
    actualprice:100,
    discountprice:70,
    rating:4,
    sellingstatus:"best seller"
    },
    {
    title:"chocolategiftbox",
    pic:chocolategiftbox,
    actualprice:100,
    discountprice:70,
    rating:4,
    sellingstatus:"best seller"
    },
    
]
export default function GiftView(){
    const dispatch=useDispatch();
    const noOfGifts = useSelector((state)=>state.Gifts.noOfGifts);
    console.log('no of Gifts',noOfGifts);
    let order=4
    return(
        <>
        <Box sx={{margin:'25px'}}></Box>
     
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
            
                GiftsList.map((item)=>{
                    return(
                        <Grid item xs={2} sm={4} md={4} display='flex' justifyContent='center'>
                        <ItemCard title={item.title}
                                  pic={item.pic}
                                  actualprice={item.actualprice}
                                  discountprice={item.discountprice}
                                  sellingstatus={item.sellingstatus}/>
                        </Grid>
                    )
                   })
                }
        </Grid> 
        </>
    )
}
      
   





