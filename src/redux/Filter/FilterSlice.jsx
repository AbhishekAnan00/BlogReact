import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tags: [],
  search: "",
};
const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagsSelected: (state, action) => {
      state.tags = [action.payload];
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});
export default FilterSlice.reducer;

export const { tagsSelected, searched } = FilterSlice.actions;
