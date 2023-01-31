import{useDispatch,useSelector} from 'react-redux'
import { Chip, Grid } from '@mui/material';
import { Box } from '@mui/system';
import assortedchocolatebouquetofsweetness from '../../../assets/Chocolates/assorted-chocolate-bouquet-of-sweetness_1.webp';
import assortedchocolatesbasketarrangement from '../../../assets/Chocolates/assorted-chocolates-basket-arrangement_1.webp';
import beautifulboxofassortedchocolates18pcs from '../../../assets/Chocolates/beautiful-box-of-assorted-chocolates-18-pcs_1.webp';
import boxofloveyouchocolatesbrownies from '../../../assets/Chocolates/box-of-love-you-chocolates-brownies_1.webp';
import charminghappybirthdaychocolatevase from '../../../assets/Chocolates/charming-happy-birthday-chocolate-vase_1.webp';
import chocolateheartbouquet from '../../../assets/Chocolates/chocolate-heart-bouquet_1.webp';
import chocolatesbrowniebox from '../../../assets/Chocolates/chocolates-brownie-box_1.webp';
import dairymilkchocolatecollection from '../../../assets/Chocolates/dairy-milk-chocolate-collection_1.webp';
import delectablechocolatesinfloralbox21pcs from '../../../assets/Chocolates/delectable-chocolates-in-floral-box-21-pcs_1.webp';
import ferrerorocherdelightfulbouquet from '../../../assets/Chocolates/ferrero-rocher-delightful-bouquet_1.webp';
import happybirthdaykitkatchocolates from '../../../assets/Chocolates/happy-birthday-kitkat-chocolates_1.webp';
import ItemCard from '../../../components/ItemCard';
const ChocolatesList = [
    {
    title:"assorted chocolate bouquet of sweetness",
    pic:assortedchocolatebouquetofsweetness,
    actualprice:100,
    discountprice:70,
    rating:4,
    sellingstatus:"best seller"
    },
    {
        title:"assorted chocolates basket arrangement",
        pic:assortedchocolatesbasketarrangement,
        actualprice:200,
        discountprice:170,
        rating:4,
        sellingstatus:"best seller"
    },
    {
        title:"beautiful box of assorted chocolates 18 pcs",
        pic:beautifulboxofassortedchocolates18pcs,
        actualprice:300,
        discountprice:270,
        rating:4,
        sellingstatus:"best seller"
    },
    {
        title:"box of love you chocolates brownies",
        pic:boxofloveyouchocolatesbrownies,
        actualprice:250,
        discountprice:170,
        rating:4,
        sellingstatus:"best seller"
    },
    {
        title:"charming happy birthday chocolate vase",
        pic:charminghappybirthdaychocolatevase,
        actualprice:500,
        discountprice:480,
        rating:5,
        sellingstatus:"best seller"
    },
    {
        title:"chocolate heart bouquet",
        pic:chocolateheartbouquet,
        actualprice:490,
        discountprice:470,
        rating:4,
        sellingstatus:"best seller"
    },{
        title:"chocolates brownie box",
        pic:chocolatesbrowniebox,
        actualprice:500,
        discountprice:370,
        rating:3,
        sellingstatus:"best seller"
    },
    {
        title:"dairy milk chocolate collection",
        pic:dairymilkchocolatecollection,
        actualprice:600,
        discountprice:470,
        rating:3,
        sellingstatus:"best seller"
    },
    {
        title:"delectable chocolates in floral box 21 pcs",
        pic:delectablechocolatesinfloralbox21pcs,
        actualprice:500,
        discountprice:470,
        rating:5,
        sellingstatus:"best seller"
    },
    {
        title:"ferrerorocherdelightfulbouquet",
        pic:ferrerorocherdelightfulbouquet,
        actualprice:490,
        discountprice:470,
        rating:4,
        sellingstatus:"best seller"
    },
    {
        title:"happybirthdaykitkatchocolates",
        pic:happybirthdaykitkatchocolates,
        actualprice:600,
        discountprice:470,
        rating:3,
        sellingstatus:"best seller"
    },
    
    
    
    
    
    
    
    

]
export default function ChocolatesView(){
    return(
        <>
        <Box sx={{margin:'25px'}}>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
            ChocolatesList.map((item)=>{
                return(
                    <Grid item xs={4} sm={4} md={3} display='flex' justifyContent='center'>
                    <ItemCard title={item.title}
                              pic={item.pic}
                              actualprice={item.actualprice}
                              discountprice={item.discountprice}
                              sellingstatus={item.sellingstatus}
                              ordername="Chocolates"
                              />
                             
                    </Grid>
                )
            })
        }
        </Grid>
    
        </Box>
        
    
         </>
      
    )
    
}



      
