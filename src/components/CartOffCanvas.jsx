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
                        className="img-fluid border"
                        src={item.image}
                        alt="imagen del producto"
                      />{" "}
                    </div>
                    <div className="col">
                      <span className="fw-bold d-block">{item.name}</span>
                      <p>{item.totalPrice}</p>
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
                ))}
              </>
            )}

            <div className="mt-3">
              <span className="d-flex">{`Sub Total: ${subTotal}`}</span>
              <Link to="/cart">
                <button
                  className="btn btn-light border w-50"
                  onClick={handleClose}
                >
                  VIEW BAG
                </button>
              </Link>
              <Link to="/checkout">
                <button className="btn btn-danger border w-50">
                  CHECK OUT
                </button>
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartOffCanvas;
