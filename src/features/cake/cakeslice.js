import {createSlice} from "@reduxjs/toolkit";
const initialState={
    noOfcakes:50,
    noOfordered:0,
    cakeList:{
        qty:0,
        title:null,
        actualPrice:null,
        discountPrice:null,
        
    }
}
const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(action.payload>state.noOfcakes){
                console.log("out of stock")
            
            }else{
                console.log("order placed",action.payload);
                state.noOfcakes-=action.payload.qty
                state.noOfordered+=parseInt(action.payload.qty)


                state.cakeList.actualPrice=action.payload.actualprice;
                state.cakeList.discountPrice=action.payload.discountprice;
                state.cakeList.title=action.payload.title;
                state.cakeList.qty=action.payload.qty;
            }
        },
        restocked:(state,action)=>{
            state.noOfcakes+=action.payload
        }
    }
})
export default cakeSlice.reducer
export const{ordered,restocked} = cakeSlice.actions