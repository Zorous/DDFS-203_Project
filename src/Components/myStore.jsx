import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Slices/todoSlice";
export default configureStore({
    reducer:{
        todo:TodoSlice.reducer,
     }
 })