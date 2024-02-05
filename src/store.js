import { configureStore } from "@reduxjs/toolkit";
import { netflix } from "./redux/reducer/movieReducer";


export const store = configureStore({
    reducer: {netflix},
})