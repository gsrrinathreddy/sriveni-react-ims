import {createSlice} from "@reduxjs/toolkit";
const initialState={
    noOfcakes:50,
    noOfordered:0
}
const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(action.payload>state.noOfcakes){
                console.log("out of stock")
            
            }else{
                state.noOfcakes-=action.payload
                state.noOfordered+=parseInt(action.payload)
            }
        },
        restocked:(state,action)=>{
            state.noOfcakes+=action.payload
        }
    }
})
export default cakeSlice.reducer
export const{ordered,restocked} = cakeSlice.actions