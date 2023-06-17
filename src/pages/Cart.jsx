import { useState } from "react";
import ArrowIcon from "../assets/icons/ArrowIcon";
import "./Cart.css";

function Cart() {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="container my-5">
        <h1 className="modelSubtitle fs-5">My Bag</h1>
        <div className="row">
          <div className="col">
            <div className=" no-margin  d-flex align-items-center ">
              <div className="image py-3">
                <img
                  src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloud_iii_red_66x0049_angle_4_720x.jpg?v=1686845842"
                  alt="imagen del producto"
                  className="productCart border"
                />
              </div>
              <div className="px-3">
                <p className="modelSubtitle fs-6">
                  HyperX SoloCast - USB Microphone
                </p>
                <span className="description">Color: Black-Red</span>
                <p className="description">$99.99</p>

                <div className="d-flex justify-content-between">
                  <div className="d-flex border">
                    <i className="bi bi-dash" onClick={handleDecrement}></i>
                    <p className="d-block px-3 m-0"> {count}</p>
                    <i className="bi bi-plus" onClick={handleIncrement}></i>
                  </div>
                  <div>
                    <i className="bi bi-trash3 text-end"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center ">
            <div className="bg-white text-center bg-body-tertiary p-5 w-75">
              <span className="description">Subtotal:</span>
              <span className="fs-5 modelSubtitle"> $99.99</span>
              <button className="btn btn-danger rounded-0 w-100 mt-3">
                <div className="d-flex justify-content-between p-1 description">
                  <div>CHECKOUT</div>
                  <div>
                    <ArrowIcon />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
