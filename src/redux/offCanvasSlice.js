import { createSlice } from "@reduxjs/toolkit";

const offCanvasSlice = createSlice({
  name: "offcanvas",
  initialState: false,
  reducers: {
    setShow(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = offCanvasSlice;
export const { setShow } = offCanvasSlice.actions;
export default reducer;
