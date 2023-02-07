import { Grid } from '@mui/material';
import { Box } from '@mui/system';

//import {Button} from '@mui/material';
import Pinkchococake from '../../../assets/cakes/cake1.jpg';
import Richinchocolate from '../../../assets/cakes/cake2.jpg';
import Weddingcake from '../../../assets/cakes/cake3.jpg';
import Trufflecake from '../../../assets/cakes/cake4.jpg';
import Creamydripblackforest from '../../../assets/cakes/cake5.jpg';
import Happybirthdaycake from '../../../assets/cakes/cake6.jpg';
import Kitkatchococake from '../../../assets/cakes/cake7.jpg';
import pinkvaletcake from '../../../assets/cakes/cake8.webp';
import Crunchychococake from '../../../assets/cakes/cake9.jpg';
import Vinelachococake from '../../../assets/cakes/cake10.jpg';
import Pandabirthdaycake from '../../../assets/cakes/cake11.jpg';
import Loveyouvalentinechococake from '../../../assets/cakes/cake12.jpg';
import Expressionoflovecake from '../../../assets/cakes/cake13.jpg';
import Prettydogcake from '../../../assets/cakes/cake14.jpg';
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
            title:"Pink choco cake",
            pic:Pinkchococake,
            actualprice:100,
            discountprice:70,
            rating:4,
            sellingstatus:"best seller"
        },
        {
            title:"Rich in chocolate",
            pic:Richinchocolate,
            actualprice:250,
            discountprice:200,
            rating:4,
            sellingstatus:"best seller"
    
        },
        {
            title:"Wedding cake",
            pic:Weddingcake,
            actualprice:150,
            discountprice:100,
            rating:4,
            sellingstatus:"best seller"
    
        },
        {
            title:"Truffle cake",
            pic:Trufflecake,
            actualprice:100,
            discountprice:70,
            rating:4,
            sellingstatus:"premier"
        
        },
        {
            title:"Creamy drip blackforest",
            pic:Creamydripblackforest,
            actualprice:200,
            discountprice:170,
            rating:4,
            sellingstatus:"outofstock"
 
            

        },
        {
            title:"Happy birthday cake",
            pic:Happybirthdaycake,
            actualprice:250,
            discountprice:240,
            rating:4,
            sellingstatus:"premier"
 
        },
        {
            title:"Kit kat choco cake",
            pic:Kitkatchococake,
            actualprice:500,
            discountprice:450,
            rating:4,
            sellingstatus:"seller"
 
        },
        {
            title:"pink valet cake",
            pic:pinkvaletcake,
            actualprice:600,
            discountprice:570,
            rating:4,
            sellingstatus:"premier"
 
        },
        {
            title:"Crunchy choco cake",
            pic:Crunchychococake,
            actualprice:550,
            discountprice:490,
            rating:4,
            sellingstatus:"best seller"
        },
        {
            title:"Vinela choco cake",
            pic:Vinelachococake,
            actualprice:500,
            discountprice:490,
            rating:4,
            sellingstatus:"best seller"
        },
        {
            title:"Panda birthday cake",
            pic:Pandabirthdaycake,
            actualprice:700,
            discountprice:670,
            rating:4,
            sellingstatus:"best seller"
        },
        {
            title:"Love you valentine chococake",
            pic:Loveyouvalentinechococake,
            actualprice:800,
            discountprice:770,
            rating:4,
            sellingstatus:"best seller"
        },
        {
            title:"Expression of love cake",
            pic:Expressionoflovecake,
            actualprice:700,
            discountprice:680,
            rating:4,
            sellingstatus:"best seller"
        },
        {
            title:"Pretty dog cake",
            pic:Prettydogcake,
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
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{backgroundColor:'#FFE0B2'}}>
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
    
        </Box >
        <Box>

          <h2>keep in touch:<FacebookIcon/><WhatsAppIcon/><TwitterIcon/></h2> 
          <h3 align = 'right'> contact mail:</h3>
        </Box>
        </>
    )

                  
}