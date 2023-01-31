import { Typography,Grid,Button } from "@mui/material";
import { Box } from "@mui/system";
//import { iteratorSymbol } from "immer/dist/internal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Cart(){
    const cartList = useSelector((state)=>state.cart.cartList);
    console.log("Cart List",cartList);
    const navigate = useNavigate();
    let sum=0;
    return(
        <>
        <Box>
            Order Details:
            <Grid container>
                <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>
                        name
                        </Typography>
                    {
                        cartList.map((item)=>{
                            return(
                                <Typography>
                                    {item.title}
                                </Typography>
                            )
                        })
                    }    
                </Grid>
                <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>
                        Qty
                        </Typography>
                    {
                        cartList.map((item)=>{
                            return(
                                <Typography>
                                    {item.qty}
                                </Typography>
                            )
                        })
                    }    
                </Grid>
                <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>
                        ActualPrice
                        </Typography>
                    {
                        cartList.map((item)=>{
                            return(
                                <Typography>
                                    {item.actualprice}
                                </Typography>
                            )
                        })
                    }

                </Grid>
                <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>
                        DiscountPrice
                        </Typography>
                    {
                        cartList.map((item)=>{
                            return(
                                <Typography>
                                    {item.discountprice}
                                </Typography>
                            )
                        })
                    }    
                </Grid>
                <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>
                        Total
                        </Typography>
                    {
                        cartList.map((item)=>{
                            sum+=(item.qty*item.discountprice)
                            return(
                                <Typography>
                                    {item.qty*item.discountprice}
                                </Typography>
                            )
                        })
                    }
                
                </Grid>   
            </Grid>
                


            
        </Box>
        
        </>
    )
    
}                