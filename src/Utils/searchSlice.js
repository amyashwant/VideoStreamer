import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name:"search",
  initialState: {},
  reducers: {
    getSearchResults(state, action) {
      state = Object.assign(state, action.payload);
    },
  },
});
export const { getSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
