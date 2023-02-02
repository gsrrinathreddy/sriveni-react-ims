import { Grid } from '@mui/material';
import { Box } from '@mui/system';

//import {Button} from '@mui/material';
import cake1 from '../../../assets/cakes/cake1.jpg';
import cake2 from '../../../assets/cakes/cake2.jpg';
import cake3 from '../../../assets/cakes/cake3.jpg';
import cake4 from '../../../assets/cakes/cake4.jpg';
import cake5 from '../../../assets/cakes/cake5.jpg';
import cake6 from '../../../assets/cakes/cake6.jpg';
import cake7 from '../../../assets/cakes/cake7.jpg';
import cake8 from '../../../assets/cakes/cake8.webp';
import cake9 from '../../../assets/cakes/cake9.jpg';
import cake10 from '../../../assets/cakes/cake10.jpg';
import cake11 from '../../../assets/cakes/cake11.jpg';
import cake12 from '../../../assets/cakes/cake12.jpg';
import cake13 from '../../../assets/cakes/cake13.jpg';
import cake14 from '../../../assets/cakes/cake14.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
//import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
//import cartComponent from '../../../components/cartComponent';
import {ordered,restocked}from'../cakeslice'
//import Cardcomponent from '../../../components/Cardcomponent';
 import ItemCard from '../../../components/ItemCard';
 
    
    const cakeList = [

        {
            title:"cake1",
            pic:cake1,
            actualprice:100,
            discountprice:70,
            rating:4,
            sellingstatus:"best seller"
        },
        {
            title:"cake2",
            pic:cake2,
            actualprice:250,
            discountprice:200,
            rating:4,
            sellingstatus:"best seller"
    
        },
        {
            title:"cake3",
            pic:cake3,
            actualprice:150,
            discountprice:100,
            rating:4,
            sellingstatus:"best seller"
    
        },
        {
            title:"cake4",
            pic:cake4,
            actualprice:100,
            discountprice:70,
            rating:4,
            sellingstatus:"premier"
        
        },
        {
            title:"cake5",
            pic:cake5,
            actualprice:200,
            discountprice:170,
            rating:4,
            sellingstatus:"outofstock"
 
            

        },
        {
            title:"cake6",
            pic:cake6,
            actualprice:250,
            discountprice:240,
            rating:4,
            sellingstatus:"premier"
 
        },
        {
            title:"cake7",
            pic:cake7,
            actualprice:500,
            discountprice:450,
            rating:4,
            sellingstatus:"seller"
 
        },
        {
            title:"cake8",
            pic:cake8,
            actualprice:600,
            discountprice:570,
            rating:4,
            sellingstatus:"premier"
 
        },
        {
            title:"cake9",
            pic:cake9,
            actualprice:550,
            discountprice:490,
            rating:4,
            sellingstatus:"best seller"
        },
        {
            title:"cake10",
            pic:cake10,
            actualprice:500,
            discountprice:490,
            rating:4,
            sellingstatus:"best seller"
        },
        {
            title:"cake11",
            pic:cake11,
            actualprice:700,
            discountprice:670,
            rating:4,
            sellingstatus:"best seller"
        },
        {
            title:"cake12",
            pic:cake12,
            actualprice:800,
            discountprice:770,
            rating:4,
            sellingstatus:"best seller"
        },
        {
            title:"cake13",
            pic:cake13,
            actualprice:700,
            discountprice:680,
            rating:4,
            sellingstatus:"best seller"
        },
        {
            title:"cake14",
            pic:cake14,
            actualprice:800,
            discountprice:740,
            rating:4,
            sellingstatus:"best seller"
        },

    ]
    export default function Cakeview(){
    return(
        <>
        <Box sx={{margin:'25px'}} >
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{backgroundColor:'pink'}}>
         {
            cakeList.map((item)=>{
                return(
                    <Grid item xs={4} sm={4} md={3} display='flex' justifyContent='center'>
                    <ItemCard title={item.title}
                              pic={item.pic}
                              actualprice={item.actualprice}
                              discountprice={item.discountprice}
                              sellingstatus={item.sellingstatus}
                              ordername="cake"
                              order = {ordered}
                              />
                             
                    </Grid>
                    
                )
            })
        }
        </Grid>
    
        </Box>
        <Box style={{backgroundColor:'carnation Pink'}}>
            <h2 align = 'left'> Contact Us</h2>
            <h4 align ='left'>   about us </h4>
            <h4 align = 'left'>about logo team</h4>
            <h4 align = 'left'> careers </h4>
            <h2 align = 'right'>contact mail</h2>
            <h2> Keep In Touch   :            <FacebookIcon/>  <WhatsAppIcon/>     <InstagramIcon/>     <TwitterIcon/></h2>
            </Box>
        
    
         </>
      
    )
    
}