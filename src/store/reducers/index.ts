import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/auth";
import { apiSlice } from "../features/api/api";
export const rootReducers = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
});
