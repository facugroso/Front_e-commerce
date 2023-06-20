import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import offCanvasSlice from "./offCanvasSlice";
import categorySlice from "./categorySlice";
import cartReducer from "./cartSlice";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
// import userReducer from "./userSlice";

// const persistConfig = {
//   key: "cart",
//   version: 1,
//   storage,
// };

// const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    products: productReducer,
    offcanvas: offCanvasSlice,
    categories: categorySlice,
    cart: cartReducer,
  },
});

// const persistor = persistStore(store);

// export { store, persistor };
export default store;
