import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    buttonToggle: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.buttonToggle = !state.buttonToggle;
    },
    closeMenu: (state) => {
      state.buttonToggle = false;
    },
  },
});
export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
