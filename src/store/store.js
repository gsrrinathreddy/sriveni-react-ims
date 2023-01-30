import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import cakereducer from '../features/cake/cakeslice';
import logger from 'redux-logger'
//import cakereducer from '../features/cake/cakeslice';
import Chocolatesreducer from '../features/chocolates/ChocolatesSlice'
import Flowerreducer from '../features/Flowers/FlowersSlice'
import Giftreducer from '../features/Gifts/GiftSlice'
import plantReducer from '../features/Plant/PlantSlice'
const store = configureStore({
    reducer:{
        cake:cakereducer,
        Chocolates:Chocolatesreducer,
        Flower:Flowerreducer,
        Gift:Giftreducer,
        plant:plantReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
})
export default store;