//import CakeCard from "../../components/Cardcomponent";
//import Cakeslice from "../../features/cake/cakeslice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cakeview from "../../features/cake/cakeView/cakeview";



export default function Cake(){
    const navigate=useNavigate();
    return(
        <>
        <Cakeview/>

        
         
            
        </>
    )
}