import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import offCanvasSlice from "./offCanvasSlice";
import categorySlice from "./categorySlice";

// import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    offcanvas: offCanvasSlice,
    categories: categorySlice,
  },
});

export default store;
