//import {Button} from '@mui/material';
import{useDispatch,useSelector} from 'react-redux'
import { Chip, Grid } from '@mui/material';
import { Box } from '@mui/system';
import autumngardenfloralbouquet from '../../../assets/Flowers/autumn-garden-floral-bouquet_1.jpg';
import autumnlovefloralarrangement from '../../../assets/Flowers/autumn-love-floral-arrangement_1.jpg';
import beautifulpinkrosesglassvasearrangement from '../../../assets/Flowers/beautiful-pink-roses-glass-vase-arrangement_1.jpg' ;
import blushingloverosessleeve from '../../../assets/Flowers/blushing-love-roses-sleeve_1.jpg';
import bohoinspiredfloralvase from '../../../assets/Flowers/boho-inspired-floral-vase_1.jpg';
import charminglove14rosesarrangement from '../../../assets/Flowers/charming-love-14-roses-arrangement_1.jpg';
import designers16redrosesarrangement from '../../../assets/Flowers/designers-16-red-roses-arrangement_1.jpg';
import divineloveorchidsbouquet from '../../../assets/Flowers/divine-love-orchids-bouquet_1.jpg';
import elegantviberedrosesbouquet from '../../../assets/Flowers/elegant-vibe-red-roses-bouquet_1.jpg';
import enchantingorchidsbouquet from '../../../assets/Flowers/enchanting-orchids-bouquet_2.jpg';
import gleamingbeautyfloralarrangement from '../../../assets/Flowers/gleaming-beauty-floral-arrangement_1.jpg';
import hellosunshine3sunflowersbouquet from '../../../assets/Flowers/hello-sunshine-3-sunflowers-bouquet_1.jpg';
import ItemCard from '../../../components/ItemCard';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

//import IMSNavbar from '../../../components/IMSNavbar';
const FlowersList = [
    {
        title:"autumn garden floral bouquet",
        pic:autumngardenfloralbouquet,
        actualprice:100,
        discountprice:70,
        rating:4,
        sellingstatus:"best seller"
    },
    {
        title:"autumn love floral arrangement",
        pic:autumnlovefloralarrangement,
        actualprice:100,
        discountprice:70,
        rating:4,
        sellingstatus:"best seller"
    },
    {
        title:"beautiful pink roses glass vase arrangement",
        pic:beautifulpinkrosesglassvasearrangement,
        actualprice:100,
        discountprice:70,
        rating:4,
        sellingstatus:"best seller"
    },
    {
        title:"blushingloverosessleeve",
        pic:blushingloverosessleeve,
        actualprice:100,
        discountprice:70,
        rating:4,
        sellingstatus:"best seller"
    },
    {
            title:"blushingloverosessleeve",
            pic:blushingloverosessleeve,
            actualprice:100,
            discountprice:70,
            rating:4,
            sellingstatus:"best seller"
    },
    {
    
            title:"bohoinspiredfloralvase",
            pic:bohoinspiredfloralvase,
            actualprice:100,
            discountprice:70,
            rating:4,
            sellingstatus:"best seller"
    },
    {
        title:"charminglove14rosesarrangement",
        pic:charminglove14rosesarrangement,
        actualprice:100,
        discountprice:70,
        rating:4,
        sellingstatus:"best seller"
    },
    {
        title:"designers 16 red roses arrangement",
        pic:designers16redrosesarrangement,
        actualprice:100,
        discountprice:70,
        rating:4,
        sellingstatus:"best seller"
    },
    {
        title:"divine love orchids bouquet",
        pic:divineloveorchidsbouquet,
        actualprice:100,
        discountprice:70,
        rating:4,
        sellingstatus:"best seller"
    },
    {
        title:"elegantviberedrosesbouquet",
        pic:elegantviberedrosesbouquet,
        actualprice:100,
        discountprice:70,
        rating:4,
        sellingstatus:"best seller"
    },
    {
        title:"enchantingorchidsbouquet",
        pic:enchantingorchidsbouquet,
        actualprice:100,
        discountprice:70,
        rating:4,
        sellingstatus:"best seller"
    },
    {
        title:"gleaming beauty floral arrangement",
        pic:gleamingbeautyfloralarrangement,
        actualprice:100,
        discountprice:70,
        rating:4,
        sellingstatus:"best seller"
    },{
        title:"hellosunshine3sunflowersbouquet",
        pic:hellosunshine3sunflowersbouquet,
        actualprice:100,
        discountprice:70,
        rating:4,
        sellingstatus:"best seller"
    },

    




]

//import cartComponent from '../../../components/cartComponent';
//import {ordered,restocked}from'../FlowersSlice'
export default function Flowerview(){
    const dispatch=useDispatch();
    const noOfFlowers = useSelector((state)=>state.Flower.noOfFlowers);
    console.log('no of Flowers',noOfFlowers);
    let order=4
    return(
        <>
        <Box sx={{margin:'25px'}}></Box>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{backgroundColor:"#FFE0B2"}}>
         {
            
                FlowersList.map((item)=>{
                    return(
                        <Grid item xs={4} sm={4} md={3} display='flex' justifyContent='center'>
                        <ItemCard title={item.title}
                                  pic={item.pic}
                                  actualprice={item.actualprice}
                                  discountprice={item.discountprice}
                                  sellingstatus={item.sellingstatus}
                                  ordername='Flowers'
                                />
                        </Grid>
                    )
                   })
                }
        </Grid> 
        <Box>

          <h2>keep in touch:<FacebookIcon/><WhatsAppIcon/><TwitterIcon/></h2> 
          <h3 align = 'right'> contact mail:</h3>
        </Box>
        

        </>
    )
            }
      
   
                   