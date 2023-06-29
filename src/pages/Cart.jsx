import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";
import ArrowIcon from "../assets/icons/ArrowIcon";
import CardIconsOffCanvas from "../components/CardIcons";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState();

  useEffect(() => {
    const calculateSubTotal = () => {
      const total = cart.reduce((accumulator, item) => {
        const price = parseFloat(item.totalPrice);
        if (!isNaN(price)) {
          accumulator += price;
        }
        return accumulator;
      }, 0);
      setSubTotal(parseFloat(total).toFixed(2));
    };
    calculateSubTotal();
  }, [cart]);

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <>
      <div className="container my-5">
        <h1 className="modelSubtitle fs-5">My Bag</h1>
        <div className="row">
          {cart.length === 0 ? (
            <span>Your cart is currently empty.</span>
          ) : (
            <div className="col">
              <div className="row">
                {cart.map((item) => (
                  <div className="col" key={item.id}>
                    <div className=" no-margin  d-flex align-items-center ">
                      <div className="image py-3">
                        <img
                          src={
                            item.image.includes("https")
                              ? item.image
                              : `${
                                  import.meta.env.VITE_IMAGE_CLOUD_DIRECTION
                                }/${item.image}`
                          }
                          alt={`imagen ${item.name}`}
                          className="productCart border"
                        />
                      </div>
                      <div className="px-3">
                        <p className="modelSubtitle fs-6">{item.name}</p>
                        <p className="description">$ {item.totalPrice}</p>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex border">
                            <i
                              className="bi bi-dash"
                              onClick={() => handleDecrement(item)}
                            ></i>
                            <p className="d-block px-3 m-0"> {item.quantity}</p>
                            <i
                              className="bi bi-plus"
                              onClick={() => handleIncrement(item)}
                            ></i>
                          </div>
                          <div>
                            <i
                              className="bi bi-trash3"
                              onClick={() => handleRemove(item)}
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="col d-flex align-items-center justify-content-center ">
            <div className="bg-white text-center bg-body-tertiary p-5 w-75">
              <span className="description">Subtotal: </span>
              <span className="fs-5 modelSubtitle"> ${subTotal}</span>
              <Link to="/checkout">
                <div
                  id="check-out-cart"
                  className="d-flex justify-content-between"
                >
                  <span>CHECKOUT</span>
                  <span>
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
              <CardIconsOffCanvas showChat={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
