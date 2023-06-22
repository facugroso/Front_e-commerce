import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      const isPresent = state.some((item) => item.id === newProduct.id);
      if (!isPresent) {
        state.push({
          id: newProduct.id,
          name: newProduct.name,
          image: newProduct.image,
          quantity: 1,
          price: Number(newProduct.price),
          totalPrice: Number(newProduct.price),
        });
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload.id;
      return state.filter((item) => item.id !== productId);
    },
    incrementQuantity(state, action) {
      const productId = action.payload.id;
      const item = state.find((item) => item.id === productId);
      if (item) {
        item.quantity++;
        item.totalPrice = parseFloat((item.quantity * item.price).toFixed(2));
      }
    },
    decrementQuantity(state, action) {
      const productId = action.payload.id;
      const item = state.find((item) => item.id === productId);
      if (item) {
        item.quantity--;
        if (item.quantity >= 1) {
          item.totalPrice = parseFloat(
            (item.totalPrice - item.price).toFixed(2)
          );
        } else {
          item.totalPrice = item.price;
          item.quantity = 1;
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
