// import {Button} from '@mui/material';
// import Box from '@mui/material';
// import Grid from '@mui/material/Grid';
// import classicsyngoniumplant1 from '../../../assets/plants/classic-syngonium-plant_1.webp';

// import CardComponent from "../../../components/Cardcomponent";
// import{useDispatch,useSelector} from 'react-redux'
// import ItemCard from '../../../components/ItemCard';
// const PlantList = [
//     {
//         title:"classicsyngoniumplant1",
//         pic:classicsyngoniumplant1,
//         actualprice:100,
//         discountprice:70,
//         rating:4,
//         sellingstatus:"best seller"
         
//     },
// ]
// //import cartComponent from '../../../components/cartComponent';
// //import {ordered,restocked}from'../PlantSlice'
// export default function Plantview(){
//     const dispatch=useDispatch();
//     const noOfPlants = useSelector((state)=>state.Plants.noOfPlants);
//     console.log('no of Plants',noOfPlants);
//     let order=4
//     return(
//         <>
//         <Box sx={{margin:'25px'}}></Box>
//         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//          {
            
//                 PlantList.map((item)=>{
//                     return(
//                         <Grid item xs={2} sm={4} md={4} display='flex' justifyContent='center'>
//                         <ItemCard title={item.title}
//                                   pic={item.pic}
//                                   actualprice={item.actualprice}
//                                   discountprice={item.discountprice}
//                                   sellingstatus={item.sellingstatus}/>
//                         </Grid>
//                     )
//                    })
//                 }
//         </Grid> 
//         </>
//     )
// }
      

