import { createSlice } from "@reduxjs/toolkit";
import { authReducer } from "../../reducers/auth";

export const authSlice = createSlice({
  name: "store",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    checkAuthenticated: authReducer,
  },
});

export const { checkAuthenticated } = authSlice.actions;

export default authSlice.reducer;
