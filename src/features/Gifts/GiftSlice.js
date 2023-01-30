import {createSlice} from "@reduxjs/toolkit";
const initialState={
    noOfGifts:50,
    noOfordered:0
}
const GiftSlice=createSlice({
    name:'Gifts',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(action.payload>state.noOfGifts){
                console.log("out of stock")
            
            }else{
                state.noOfGifts-=action.payload
                state.noOfordered+=action.payload
            }
        },
        restocked:(state,action)=>{
            state.noOfGifts+=action.payload
        }
    }
})
export default GiftSlice.reducer
export const{ordered,restocked} = GiftSlice.actions