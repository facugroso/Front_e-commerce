import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import PaymentMethod from "../components/PaymentMethod";

import "./CheckOut.css";

function CheckOut() {
  const cart = useSelector((state) => state.cart);

  const [subTotal, setSubTotal] = useState();
  const [paymentMethod, setPaymentMethod] = useState("");

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
          <span className="fs-4 fw-bold">Payment method</span>
          <ul>
            <li>
              <input
                type="radio"
                name="payment-method"
                id="credit-card"
                value="credit-card"
                onClick={() => setPaymentMethod("credit-card")}
              ></input>
              <label className="ms-4">Credit card</label>
            </li>
            <li>
              <input
                type="radio"
                name="payment-method"
                id="paypal"
                value="paypal"
                onClick={() => setPaymentMethod("paypal")}
              ></input>
              <label className="ms-4">Paypal</label>
            </li>
            <li>
              <input
                type="radio"
                name="payment-method"
                id="mercado-pago"
                value="mercado-pago"
                onClick={() => setPaymentMethod("mercado-pago")}
              ></input>
              <label className="ms-4">Mercado Pago</label>
            </li>
          </ul>
          <PaymentMethod method={paymentMethod} />
          <div className="d-flex justify-content-end">
            <button className="my-3">BUY</button>
          </div>
        </div>
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
            <span className="fw-bold">{subTotal}</span>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <span className="fw-semibold">Shipping</span>
            <span>sorry we don't have shipping for now</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span className="fw-bold">Total</span>
            <span className="fw-bold">{subTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
