import Grid from '@mui/material/Grid';
//import {Button} from '@mui/material';
import{useDispatch,useSelector} from 'react-redux';
import {Box} from '@mui/material';
//import cartComponent from '../../../components/cartComponent';
import box1 from '../../../assets/Gifts/box_1.webp';
import chocolategiftbox from '../../../assets/Gifts/chocolate-gift-box_1.webp';
import collectionteagiftbox1 from '../../../assets/Gifts/collection-tea-gift-box_1.webp';
import cranberrygifthamper1 from '../../../assets/Gifts/cranberry-gift-hamper_1.webp';
import cushiongift1 from '../../../assets/Gifts/cushion-gift_1.webp';
import heaven1 from '../../../assets/Gifts/heaven_1.webp';
import lovegift1 from '../../../assets/Gifts/love-gift_1.webp'
import moneyplantgiftcombo1 from '../../../assets/Gifts/money-plant-gift-combo_1.webp';
import morningdewgiftbasket1 from '../../../assets/Gifts/morning-dew-gift-basket_1.webp'
import napkingiftcombo1 from '../../../assets/Gifts/napkin-gift-combo_1.webp'

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
    {
        title:"collectionteagiftbox1",
        pic:collectionteagiftbox1,
        actualprice:100,
        discountprice:70,
        rating:4,
        sellingstatus:"best seller"
        },
        {
            title:"cranberrygifthamper1",
            pic:cranberrygifthamper1,
            actualprice:100,
            discountprice:70,
            rating:4,
            sellingstatus:"best seller"
            },
            {
                title:"cushiongift1",
                pic:cushiongift1,
                actualprice:100,
                discountprice:70,
                rating:4,
                sellingstatus:"best seller"
                },
                {
                    title:"heaven1",
                    pic:heaven1,
                    actualprice:100,
                    discountprice:70,
                    rating:4,
                    sellingstatus:"best seller"
                    },
                    {
                        title:"lovegift1",
                        pic:lovegift1,
                        actualprice:100,
                        discountprice:70,
                        rating:4,
                        sellingstatus:"best seller"
                        },
                        {
                            title:"moneyplantgiftcombo1",
                            pic:moneyplantgiftcombo1,
                            actualprice:100,
                            discountprice:70,
                            rating:4,
                            sellingstatus:"best seller"
                            },
                            {
                                title:"morningdewgiftbasket1",
                                pic:morningdewgiftbasket1,
                                actualprice:100,
                                discountprice:70,
                                rating:4,
                                sellingstatus:"best seller"
                                },
                                {
                                    title:"napkingiftcombo1",
                                    pic:napkingiftcombo1,
                                    actualprice:100,
                                    discountprice:70,
                                    rating:4,
                                    sellingstatus:"best seller"
                                    },
        
    
]
export default function GiftView(){
    const dispatch=useDispatch();
     const noOfGifts = useSelector((state)=>state.Gift.noOfGifts);
    console.log('no of Gifts',noOfGifts);
    let order=4
    let ordername="gift"
    return(
        <>
        <Box sx={{margin:'25px'}}>
     
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
            
                GiftsList.map((item)=>{
                    return(
                        <Grid item xs={4} sm={4} md={3} display='flex' justifyContent='center'>
                        <ItemCard title={item.title}
                                  pic={item.pic}
                                  actualprice={item.actualprice}
                                  discountprice={item.discountprice}
                                  sellingstatus={item.sellingstatus}
                                  ordername={ordername}/>
                                  
                                
                        </Grid>
                    )
                   })
        }
        </Grid>
        </Box>
        </> 
               )
   }


