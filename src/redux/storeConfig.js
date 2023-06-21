import { configureStore } from "@reduxjs/toolkit";
import offCanvasSlice from "./offCanvasSlice";
import cartReducer from "./cartSlice";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
// import userReducer from "./userSlice";
import userReducer from "./userSlice";

// const persistConfig = {
//   key: "cart",
//   version: 1,
//   storage,
// };

// const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    user: userReducer,
    offcanvas: offCanvasSlice,
    cart: cartReducer,
  },
});

// const persistor = persistStore(store);

// export { store, persistor };
export default store;
