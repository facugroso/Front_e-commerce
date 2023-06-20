import { configureStore } from "@reduxjs/toolkit";
import offCanvasSlice from "./offCanvasSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    offcanvas: offCanvasSlice,
  },
});

export default store;
