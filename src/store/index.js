import { createStore } from "redux";
import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";


const store = configureStore({
    reducer: {
        counter: counterSlice,
        auth: authSlice
    }
})


export default store