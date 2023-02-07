import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import cakereducer from '../features/cake/cakeslice';
import logger from 'redux-logger'
//import cakereducer from '../features/cake/cakeslice';
import Chocolatesreducer from '../features/chocolates/ChocolatesSlice'
import Flowerreducer from '../features/Flowers/FlowersSlice'
import giftreducer from '../features/Gifts/GiftSlice'
import plantReducer from '../features/Plant/PlantSlice'
import cartReducer from "../features/cart/cartSlice"
//import {persistStore,persistReducer} from 'react-persist';
//import { Storage } from "@mui/icons-material";
const store = configureStore({
    reducer:{
        cake:cakereducer,
        Chocolates:Chocolatesreducer,
        Flower:Flowerreducer,
        Gift:giftreducer, 
        plant:plantReducer,
        cart:cartReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
})
export default store;