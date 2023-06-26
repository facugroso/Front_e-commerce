import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import TimelineStatus from "../components/TimelineStatus";
import ShippingAddress from "../components/ShippingAddress";
import ShippingMethod from "../components/ShippingMethod";

import "./CheckOut.css";

function CheckOut() {
  const cart = useSelector((state) => state.cart);

  const [subTotal, setSubTotal] = useState();
  const [checkoutStep, setCheckoutStep] = useState("information");

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

  function handleNextClick() {
    switch (checkoutStep) {
      case "information":
        return <ShippingAddress />;
      case "shipping": {
        return <ShippingMethod />;
      }
    }
  }
  return (
    <div className="container">
      <TimelineStatus />
      {cart.length !== 0 ? (
        <>
          <div className="row">
            {handleNextClick(checkoutStep)}
            <div className="col">
              {cart.map((item) => (
                <div className="col check-out-product" key={item.id}>
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
                <span className="fw-semibold">Subtotal</span>
                <span className="fw-bold">${subTotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-semibold">Shipping</span>
                <span>sorry we don't have shipping for now</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold">Total</span>
                <span className="fs-2 fw-bold">${subTotal}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <span>Your cart seems to be empty why don't you buy something</span>
        </>
      )}
    </div>
  );
}

export default CheckOut;
