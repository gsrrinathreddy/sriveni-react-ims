// import {Button} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import classicsyngoniumplant1 from '../../../assets/plants/classic-syngonium-plant_1.jpg';
import corpplantforjagsonpal1 from '../../../assets/plants/corp-plant-for-jagsonpal_1.jpg';
import jademoneyplantset1 from '../../../assets/plants/jade-money-plant-set_1.jpg';
import jadesyngoniumplantset1 from '../../../assets/plants/jade-syngonium-plant-set_1.jpg';
import moneyplantchocolatescombo1 from '../../../assets/plants/money-plant-chocolates-combo_1.jpg';
import moneyplantinorangepot1 from '../../../assets/plants/money-plant-in-orange-pot_1.jpg';
import omrakhiandmoneyplant1 from '../../../assets/plants/om-rakhi-and-money-plant_1.jpg';

// import CardComponent from "../../../components/Cardcomponent";
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from '../../../components/ItemCard';
const PlantList = [
    {

        title: "classicsyngoniumplant1",
        pic: classicsyngoniumplant1,
        actualprice: 100,
        discountprice: 70,
        rating: 4,
        sellingstatus: "best seller"

    },
    {

        title: "corpplantforjagsonpal1",
        pic: corpplantforjagsonpal1,
        actualprice: 100,
        discountprice: 70,
        rating: 4,
        sellingstatus: "best seller"

    },
    {

        title: "jademoneyplantset1",
        pic: jademoneyplantset1,
        actualprice: 100,
        discountprice: 70,
        rating: 4,
        sellingstatus: "best seller"

    },
    {

        title: "jadesyngoniumplantset1",
        pic: jadesyngoniumplantset1,
        actualprice: 100,
        discountprice: 70,
        rating: 4,
        sellingstatus: "best seller"

    },
    {
        

            title: "moneyplantchocolatescombo1",
            pic:moneyplantchocolatescombo1,
            actualprice: 100,
            discountprice: 70,
            rating: 4,
            sellingstatus: "best seller"
    
        
    },
    {

        title: "money plant in orangepot1",
        pic:moneyplantinorangepot1 ,
        actualprice: 100,
        discountprice: 70,
        rating: 4,
        sellingstatus: "best seller"

    },
    {

        title: "om rakhi and money plant1",
        pic: omrakhiandmoneyplant1,
        actualprice: 100,
        discountprice: 70,
        rating: 4,
        sellingstatus: "best seller"

    },
]
// //import cartComponent from '../../../components/cartComponent';
// //import {ordered,restocked}from'../PlantSlice'
export default function Plantview(){
    const dispatch = useDispatch();
    
     //const noOfPlants = useSelector((state)=>state.Plant.noOfPlants);
    //console.log('no of Plants',noOfPlants);
    let order = 4
    let ordername = 'Plant'
    return (
        <>

            <Box sx={{ margin: '25px' }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{backgroundColor:"pink"}}>
                    {
                        PlantList.map((item) => {
                            return (
                                <Grid item xs={4} sm={4} md={3} display='flex' justifyContent='center'>
                                    <ItemCard title={item.title}
                                        pic={item.pic}
                                        actualprice={item.actualprice}
                                        sellingstatus={item.sellingstatus}
                                        discountprice={item.discountprice}
                                        ordername='Plant'
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


