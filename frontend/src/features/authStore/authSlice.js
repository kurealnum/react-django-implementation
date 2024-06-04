import { createSlice } from "@reduxjs/toolkit";
import { authReducer } from "../../reducers/auth";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    checkAuthenticated: authReducer,
  },
});

export const { checkAuthenticated } = authSlice.actions;
console.log(authSlice.actions);
export default authSlice.reducer;
