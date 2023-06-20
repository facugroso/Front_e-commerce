import { configureStore } from "@reduxjs/toolkit";
import offCanvasSlice from "./offCanvasSlice";

// import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    offcanvas: offCanvasSlice,
  },
});

export default store;
