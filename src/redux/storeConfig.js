import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import offCanvasSlice from "./offCanvasSlice";
import cartReducer from "./cartSlice";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import offCanvasSlice from "./offCanvasSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  user: userReducer,
  offcanvas: offCanvasSlice,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
