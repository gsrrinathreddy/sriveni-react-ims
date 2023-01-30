import {createSlice} from "@reduxjs/toolkit";
const initialState={
    noOfChocolates:50,
    noOfordered:0
}
const ChocolatesSlice=createSlice({
    name:'Chocolates',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(action.payload>state.noOfChocolates){
                console.log("out of stock")
                
            
            }else{
                state.noOfChocolates-=action.payload
                state.noOfordered+=parseInt(action.payload)
                }
        },
        restocked:(state,action)=>{
            state.noOfChocolates+=action.payload
        }
    },
    
})
export default ChocolatesSlice.reducer
export const{ordered,restocked} = ChocolatesSlice.actions