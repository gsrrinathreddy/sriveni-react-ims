//import { Description } from "@mui/icons-material";
import { useSelector } from "react-redux";
import IMSStepper from "../../components/IMSStepper";
//import IMSStepper from "../../components/IMSStepper";
export default function Delivery(){
    let steps = [
        {
        label:"order placed",
        Description:"your order placed",
        itemname:[],
        },
        {
            label:"dispatch warehouse",
            Description:"dispatched",
            msg:"",
        },
        {
            label:"order received",
            Description:"receives",
            
        },
    ];
    const cartList = useSelector((state)=> state.cart.cartList);
    console.log("cart", cartList);
    if (cartList){
        steps = steps.map((item)=>{
            if(item.label === "order placed"){
                return{
                    label:"order placed",
                    Description:"your order placed",
                    itemname: cartList.map((item)=>{
                     return item.title;
                    }),
                };
            }else if(item.label === "dispatch warehouse"){
                return{
                    label:"dispatch warehouse",
                    Description:"dispatched",
                    msg:"your order is dispatched for warehouse",

                };
            }else{
                return item;
            }
        });
    }
    
    console.log("steps",steps);
    return(
        <>
        {console.log("item size",steps[0].itemname.length)}
        {steps[0].itemname.length >= 1?(
            <IMSStepper steps={steps}></IMSStepper>

        ) : (
            "Items are not added to cart"
        )}
        </>
    );
    }


