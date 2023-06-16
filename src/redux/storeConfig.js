import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import offCanvasSlice from "./offCanvasSlice";

// import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    offcanvas: offCanvasSlice,
  },
});

export default store;
