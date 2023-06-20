import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    setCategories(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = categorySlice;
export const { setCategories } = actions;
export default reducer;
