import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: "123",
  },
  reducers: {
    set_csrf: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { set_csrf } = authSlice.actions;
export default authSlice.reducer;
