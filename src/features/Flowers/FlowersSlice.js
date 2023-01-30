import {createSlice} from "@reduxjs/toolkit";
const initialState={
    noOfFlowers:50,
    noOfordered:0
}
const FlowersSlice=createSlice({
    name:'Flower',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(action.payload>state.noOfFlowers){
                console.log("out of stock")
            
            }else{
                state.noOfFlowers-=action.payload
                state.noOfordered+=action.payload
            }
        },
        restocked:(state,action)=>{
            state.noOfFlowers+=action.payload
        }
    },
   
        },
    
)
export default FlowersSlice.reducer
export const{ordered,restocked} = FlowersSlice.actions