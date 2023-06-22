import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

import "./CheckOut.css";

function CheckOut() {
  const cart = useSelector((state) => state.cart);
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
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <span className="fs-4 fw-bold">Shipping Address</span>
          <div className="row">
            <div className="col">
              <input className="w-100 m-2" placeholder="First Name"></input>
            </div>
            <div className="col">
              <input className="w-100 m-2" placeholder="Last Name"></input>
            </div>
          </div>
          <input className="w-100 m-2" placeholder="Address"></input>
          <input className="w-100 m-2" placeholder="Aparment"></input>
          <div className="row">
            <div className="col">
              <input className="w-100 m-2" placeholder="City"></input>
            </div>
            <div className="col">
              <input className="w-100 m-2" placeholder="State"></input>
            </div>
            <div className="col">
              <input className="w-100 m-2" placeholder="Zip Code"></input>
            </div>
          </div>
          <input className="w-100 m-2" placeholder="Phone"></input>
          <div className="d-flex justify-content-end">
            <button>BUY</button>
          </div>
        </div>
        <div className="col">
          {cart.map((item) => (
            <div className="col check-out-product">
              <div className=" no-margin  d-flex align-items-center ">
                <div className="py-3">
                  <img
                    src={item.image}
                    alt={`imagen ${item.name}`}
                    className="img-fluid border"
                  />
                </div>
                <div className="px-3 d-flex justify-content-between">
                  <div>
                    <p className="modelSubtitle fs-6">{item.name}</p>
                    <span>Qty:{item.quantity}</span>
                  </div>
                  <p className="fw-bold">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-between mt-4">
            <span>Subtotal</span>
            <span>{subTotal}</span>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <span>Shipping</span>
            <span>sorry we don't have shipping for now</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>Total</span>
            <span>{subTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
