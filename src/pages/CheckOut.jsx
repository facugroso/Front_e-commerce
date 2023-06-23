import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { clearCart } from "../redux/cartSlice";

import "./CheckOut.css";

function CheckOut() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const [subTotal, setSubTotal] = useState();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [fullAddress, setFullAddress] = useState(null);
  const [paymentData, setPaymentData] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await axios(
      {
        method: "POST",
        url: `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/orders`,
        data: {
          firstname,
          lastname,
          address: fullAddress,
          phone,
          payment: paymentMethod,
          paymentdata: paymentData,
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
      {cart.length !== 0 ? (
        <>
          <div className="row">
            <div className="col">
              <form method="POST" onSubmit={handleSubmit} className="mt-4">
                <span className="fs-4 fw-bold">Shipping Address</span>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="w-100 m-2"
                      name="firstname"
                      value={firstname}
                      onChange={(event) => setFirstname(event.target.value)}
                      placeholder="First Name"
                    ></input>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="w-100 m-2"
                      name="lastname"
                      value={lastname}
                      onChange={(event) => setLastname(event.target.value)}
                      placeholder="Last Name"
                    ></input>
                  </div>
                </div>
                <input
                  type="text"
                  className="w-100 m-2"
                  name="address"
                  onChange={(event) =>
                    setFullAddress((prevState) => ({
                      ...prevState,
                      address: event.target.value,
                    }))
                  }
                  placeholder="Address"
                ></input>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="w-100 m-2"
                      onChange={(event) =>
                        setFullAddress((prevState) => ({
                          ...prevState,
                          city: event.target.value,
                        }))
                      }
                      placeholder="City"
                    ></input>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="w-100 m-2"
                      placeholder="Zip Code"
                      onChange={(event) =>
                        setFullAddress((prevState) => ({
                          ...prevState,
                          zipcode: event.target.value,
                        }))
                      }
                    ></input>
                  </div>
                </div>
                <input
                  type="text"
                  className="w-100 m-2"
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="Phone"
                ></input>
                <span className="fs-4 fw-bold">Payment method</span>
                <ul>
                  <li>
                    <input
                      type="radio"
                      name="payment-method"
                      id="credit-card"
                      value="credit-card"
                      onClick={() => setPaymentMethod("Crédito")}
                    ></input>
                    <label className="ms-4">Credit card</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="payment-method"
                      id="paypal"
                      value="paypal"
                      onClick={() => setPaymentMethod("PayPal")}
                    ></input>
                    <label className="ms-4">Paypal</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="payment-method"
                      id="mercado-pago"
                      value="mercado-pago"
                      onClick={() => setPaymentMethod("MercadoPago")}
                    ></input>
                    <label className="ms-4">Mercado Pago</label>
                  </li>
                </ul>
                {paymentMethod === "" ? (
                  <></>
                ) : (
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="w-100 mb-2"
                        placeholder="Card number"
                        onChange={(event) =>
                          setPaymentData((prevState) => ({
                            ...prevState,
                            cardNumber: event.target.value,
                          }))
                        }
                      ></input>
                      <input
                        type="text"
                        className="w-100 mb-2"
                        placeholder="First name"
                        onChange={(event) =>
                          setPaymentData((prevState) => ({
                            ...prevState,
                            firstname: event.target.value,
                          }))
                        }
                      ></input>
                      <input
                        type="text"
                        className="w-100 mb-2"
                        placeholder="Last name"
                        onChange={(event) =>
                          setPaymentData((prevState) => ({
                            ...prevState,
                            lastname: event.target.value,
                          }))
                        }
                      ></input>
                      <input
                        type="text"
                        className="w-100 mb-2"
                        placeholder="CI"
                        onChange={(event) =>
                          setPaymentData((prevState) => ({
                            ...prevState,
                            ci: event.target.value,
                          }))
                        }
                      ></input>
                      <div className="d-flex">
                        <input
                          className="w-50 me-2"
                          placeholder="Expiration date"
                          type="month"
                          min="2023-06"
                        ></input>
                        <input className="w-50" placeholder="CVV"></input>
                      </div>
                    </div>
                  </div>
                )}
                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="d-flex justify-content-end w-50 my-3 p-1 px-3"
                    id="buy"
                  >
                    BUY
                  </button>
                </div>
              </form>
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
