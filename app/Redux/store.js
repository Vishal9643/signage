import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer    
  }
});
