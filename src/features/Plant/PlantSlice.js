import {createSlice} from "@reduxjs/toolkit";
const initialState={
    noOfPlants:50,
    noOfordered:0
}
const plantSlice=createSlice({
    name:'Plant',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(action.payload>state.noOfPlants){
                console.log("out of stock")
            
            }else{
                state.noOfPlants-=action.payload
                state.noOfordered+=action.payload
            }
        },
        restocked:(state,action)=>{
            state.noOfPlants+=action.payload
        }
    }
})
export default plantSlice.reducer
export const{ordered,restocked} = plantSlice.actions