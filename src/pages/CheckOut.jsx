import React from "react";
import { useState, createContext, useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import TimelineStatus from "../components/TimelineStatus";
import ShippingAddress from "../components/ShippingAddress";
import ShippingMethod from "../components/ShippingMethod";
import Payment from "../components/Payment";

import "./CheckOut.css";

export const FormContext = createContext();
export const TotalContext = createContext();
export const ShippingContext = createContext();
export const StepContext = createContext();

function CheckOut() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const formRef = useRef(null);

  const [subTotal, setSubTotal] = useState();
  const [total, setTotal] = useState();
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: "",
    step2: "",
    step3: "",
  });
  const [shipping, setShipping] = useState("Free");

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
      setTotal(parseFloat(total).toFixed(2));
    };
    calculateSubTotal();
  }, [cart]);

  function handleNextClick() {
    switch (checkoutStep) {
      case 1:
        return (
          <FormContext.Provider value={{ formData, setFormData }}>
            <ShippingAddress />
          </FormContext.Provider>
        );
      case 2: {
        return (
          <FormContext.Provider value={{ formData, setFormData }}>
            <TotalContext.Provider value={{ total, setTotal }}>
              <ShippingContext.Provider value={{ shipping, setShipping }}>
                <ShippingMethod subTotal={subTotal} />
              </ShippingContext.Provider>
            </TotalContext.Provider>
          </FormContext.Provider>
        );
      }
      case 3: {
        return (
          <FormContext.Provider value={{ formData, setFormData }}>
            <Payment />;
          </FormContext.Provider>
        );
      }
    }
  }

  function handleRenderActions() {
    switch (checkoutStep) {
      case 1:
        return (
          <>
            <div className="w-100 d-flex justify-content-between">
              <Link to="/cart" className="my-4 py-2 px-1">
                <span id="return">{"< RETURN TO CART"}</span>
              </Link>
              <button
                className="btn d-flex justify-content-center my-4 py-2 px-1 rounded-0"
                id="continue-shipping"
                onClick={() => handleSubmitByStep()}
              >
                CONTINUE TO SHIPPING
              </button>
            </div>
          </>
        );
      case 2: {
        return (
          <>
            <span
              className="w-50 my-4 py-2 px-1"
              id="return"
              onClick={() => setCheckoutStep(1)}
            >
              {"< RETURN TO INFORMATION"}
            </span>
            <button
              className="btn d-flex justify-content-center w-50 my-4 py-2 px-1 rounded-0"
              id="continue-shipping"
              onClick={() => handleSubmitByStep()}
            >
              CONTINUE TO PAYMENT
            </button>
          </>
        );
      }
      case 3: {
        return (
          <>
            <div className="w-100 d-flex justify-content-between">
              <span
                className="w-50 my-4 py-2 px-1"
                id="return"
                onClick={() => setCheckoutStep(2)}
              >
                {"< RETURN TO SHIPPING"}
              </span>
              <button
                className="btn d-flex justify-content-center w-50 my-4 py-2 px-1 rounded-0"
                id="continue-shipping"
                onClick={() => handleSubmit()}
              >
                PAY NOW
              </button>
            </div>
          </>
        );
      }
    }
  }

  function handleSubmitByStep() {
    const form = formRef.current;
    //if (form.checkValidity()) {
    setCheckoutStep(checkoutStep + 1);
    //}
  }

  async function handleSubmit(e) {
    console.log("entre");
    await axios(
      {
        method: "POST",
        url: `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/orders`,
        data: {
          firstname: formData.step1.firstname,
          lastname: formData.step1.lastname,
          address: formData.step1.fullAddress,
          phone: formData.step1.phone,
          payment: "Credit Card",
          paymentdata: form.step3.paymentdata,
          products: cart,
          status: "Pending",
          userId: user.dataValues.id,
        },
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
      dispatch(clearCart()),
      console.log("compraste")
    );
  }

  console.log(formData);

  return (
    <div className="container">
      <div className="row d-flex">
        <StepContext.Provider value={{ checkoutStep, setCheckoutStep }}>
          <TimelineStatus />
        </StepContext.Provider>
      </div>
      {cart.length !== 0 ? (
        <>
          <div className="row">
            <form className="col" ref={formRef} method="POST">
              {handleNextClick()}
              <div className="d-flex justify-content-between">
                {handleRenderActions()}
              </div>
            </form>
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
                <span>{shipping}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold">Total</span>
                <span className="fs-2 fw-bold">${total}</span>
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
