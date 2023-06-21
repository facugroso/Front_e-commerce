import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setToken(state, action) {
      return action.payload;
    },
    // logout(state, action) {
    //   return null;
    // },
  },
});

const { actions, reducer } = userSlice;
export const { setToken } = actions;
export default reducer;
