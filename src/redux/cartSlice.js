import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    getCart(state, action) {
      return state;
    },
    addToCart(state, action) {
      const cart = state;
      const newProduct = action.payload;
      let isPresent = false;
      for (let i of cart) {
        if (newProduct.id === cart[i].id) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        cart.push({
          id: newProduct.id,
          name: newProduct.name,
          image: newProduct.image,
          quantity: 1,
          price: newProduct.price,
          totalPrice: newProduct.price,
        });
        //alert(`Item added to the Cart`);
      }
      //                 }else{
      //                     var index=-1;
      //                     for (var j in state ){
      //                         if(product._id==state[j]._id){
      //                             index=parseInt(j)+1;
      //                             }
      //                             }
      //                             state[index].quantity++;
      //                             state[index].totalPrice+=product.price;
      //                             localStorage.setItem('cart',JSON.stringify(state));
      //                             alert(`${product.title} Quantity increased by 1`)
      //                             }
      //                             },
    },
    removeFromCart(state, action) {
      const cart = state;
      return cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload.id);
      item.quantity++;
      item.totalPrice = parseFloat((item.quantity * item.price).toFixed(2));
    },
    decrementQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload.id);
      item.quantity--;
      item.quantity > 0
        ? (item.totalPrice = parseFloat(
            (item.totalPrice - item.price).toFixed(2)
          ))
        : ((item.totalPrice = 0), (item.quantity = 0));
    },
  },
});

const { actions, reducer } = cartReducer;
export const {
  getCart,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = actions;
export default reducer;
