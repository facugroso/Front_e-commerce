import React from "react";
import { useState, createContext, useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import TimelineStatus from "../components/TimelineStatus";
import ShippingAddress from "../components/ShippingAddress";
import ShippingMethod from "../components/ShippingMethod";
import Payment from "../components/Payment";
import { clearCart } from "../redux/cartSlice";
import { setShow } from "../redux/offCanvasSlice";

import "./CheckOut.css";

export const FormContext = createContext();
export const TotalContext = createContext();
export const ShippingContext = createContext();
export const StepContext = createContext();

function CheckOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  dispatch(setShow(false));

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
          <>
            <FormContext.Provider value={{ formData, setFormData }}>
              <ShippingAddress />
            </FormContext.Provider>
            <div className="d-md-none d-flex justify-content-between aling-items-center mt-4">
              <span className="fw-bold fs-4 modelSubtitle">Total</span>
              <span className="fs-2 modelSubtitle">${total}</span>
            </div>
          </>
        );
      case 2: {
        return (
          <>
            <FormContext.Provider value={{ formData, setFormData }}>
              <TotalContext.Provider value={{ total, setTotal }}>
                <ShippingContext.Provider value={{ shipping, setShipping }}>
                  <ShippingMethod subTotal={subTotal} />
                </ShippingContext.Provider>
              </TotalContext.Provider>
            </FormContext.Provider>
            <div className="d-md-none d-flex justify-content-between aling-items-center mt-4">
              <span className="fw-bold fs-4 modelSubtitle">Total</span>
              <span className="fs-2 modelSubtitle">${total}</span>
            </div>
          </>
        );
      }
      case 3: {
        return (
          <>
            <FormContext.Provider value={{ formData, setFormData }}>
              <Payment />
            </FormContext.Provider>
            <div className="d-md-none d-flex justify-content-between aling-items-center mt-4">
              <span className="fw-bold fs-4 modelSubtitle">Total</span>
              <span className="fs-2 modelSubtitle">${total}</span>
            </div>
          </>
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
                type="submit"
                className="btn d-flex justify-content-center w-50 my-4 py-2 px-1 rounded-0"
                id="continue-shipping"
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
    if (form.checkValidity()) {
      setCheckoutStep(checkoutStep + 1);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios(
      {
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/orders`,
        data: {
          firstname: formData.step1.firstname,
          lastname: formData.step1.lastname,
          address: formData.step1.fullAddress,
          phone: formData.step1.phone,
          payment: "Credit Card",
          paymentdata: formData.step3.paymentdata,
          products: cart,
          status: "Pending",
          userId: user.dataValues.id,
        },
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
      dispatch(clearCart())
    );
    navigate("/purchase");
  }

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
            <div className="col">
              <form ref={formRef} method="POST" onSubmit={handleSubmit}>
                {handleNextClick()}
                <div className="d-flex justify-content-between">
                  {handleRenderActions()}
                </div>
              </form>
            </div>
            <div className="col d-none d-md-block">
              {cart.map((item) => (
                <div className="col check-out-product" key={item.id}>
                  <div className="no-margin d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="mb-3">
                        <img
                          src={
                            item.image.includes("https")
                              ? item.image
                              : `${
                                  import.meta.env.VITE_IMAGE_CLOUD_DIRECTION
                                }/${item.image}`
                          }
                          alt={`imagen ${item.name}`}
                          className="img-fluid border"
                          style={{ maxWidth: "80px" }}
                        />
                      </div>
                      <div className="mb-3 px-3">
                        <p className="modelSubtitle fs-6 m-0">{item.name}</p>
                        <span>Quantity: {item.quantity}</span>
                      </div>
                    </div>
                    <div>
                      <p className="fw-bold text-end">${item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="d-block">
                <div className="d-flex justify-content-between mt-4">
                  <span className="fw-semibold description">Subtotal</span>
                  <span className="fw-bold description">${subTotal}</span>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-semibold description">Shipping</span>
                  <span className="fw-bold description">{shipping}</span>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="fw-bold fs-4 modelSubtitle">Total</span>
                <span className="fs-2 modelSubtitle">${total}</span>
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
