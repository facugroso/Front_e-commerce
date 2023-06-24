import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../redux/offCanvasSlice";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";

import CardIconsOffCanvas from "./CardIconsOffCanvas";
import ArrowIcon from "../assets/icons/ArrowIcon";
import "./CartOffCanvas.css";

function CartOffCanvas({ ...placement }) {
  const cart = useSelector((state) => state.cart);
  const show = useSelector((state) => state.offcanvas);
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

  const handleClose = () => {
    dispatch(setShow(false));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} {...placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Bag</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            {cart.length === 0 ? (
              <span>Your cart is currently empty.</span>
            ) : (
              <>
                {cart.map((item) => (
                  <div className="row no-margin bg-grey" key={item.id}>
                    <div className="col">
                      <img
                        className="img-fluid border mb-3"
                        src={
                          item.image.includes("https")
                            ? item.image
                            : `${import.meta.env.VITE_IMAGE_CLOUD_DIRECTION}/${
                                item.image
                              }`
                        }
                        alt="imagen del producto"
                      />
                    </div>
                    <div className="col">
                      <span className="fw-bold d-block">{item.name}</span>
                      <p>${item.totalPrice}</p>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex border fs-5 fw-semibold">
                          <i
                            className="bi bi-dash"
                            onClick={() => handleDecrement(item)}
                          ></i>
                          <p className="d-block px-3 m-0">{item.quantity}</p>
                          <i
                            className="bi bi-plus"
                            onClick={() => handleIncrement(item)}
                          ></i>
                        </div>
                        <div>
                          <i
                            className="bi bi-trash3 me-2"
                            onClick={() => handleRemove(item)}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </Offcanvas.Body>
        <div className="cart-offcanvas-actions mb-3">
          <div className="mt-3">
            <div className="d-flex justify-content-end align-items-end me-3">
              <span className="me-2 fw-semibold">Subtotal:</span>
              <span className="fw-bold fs-4">${subTotal}</span>
            </div>
            <div className="d-flex justify-content-evenly mt-4">
              <Link to="/cart">
                <div className="view-bag px-3" onClick={handleClose}>
                  <span className="me-5">VIEW BAG</span>
                  <span>
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
              <Link to="/checkout">
                <div className="check-out px-3">
                  <span className="me-5">CHECKOUT</span>
                  <span>
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <CardIconsOffCanvas />
        </div>
      </Offcanvas>
    </>
  );
}

export default CartOffCanvas;
