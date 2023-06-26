import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

import { clearCart } from "../redux/cartSlice";

function ShippingAddress() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

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
  return (
    <>
      <div className="col">
        <form method="POST" onSubmit={handleSubmit} className="my-4">
          <span className="fs-4 fw-bold">Shipping Address</span>
          <div className="border my-2">
            <label className="ms-2">Country/Region</label>
            <select className="w-100 select-country">
              <option value=""></option>
              <option value="1">United States</option>
            </select>
          </div>
          <div className="row m-0">
            <div className="col border p-0 me-2">
              <label className="ms-2">First Name</label>
              <input
                type="text"
                className="w-75 p-0 ms-2"
                name="firstname"
                value={firstname}
                onChange={(event) => setFirstname(event.target.value)}
                required
              ></input>
            </div>
            <div className="col border p-0">
              <label className="ms-2">Last Name</label>
              <input
                type="text"
                className="w-75 p-0 ms-2"
                name="lastname"
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
                required
              ></input>
            </div>
          </div>
          <div className="border mt-2">
            <label className="ms-2">Address</label>
            <input
              type="text"
              className="w-100 ms-2"
              name="address"
              onChange={(event) =>
                setFullAddress((prevState) => ({
                  ...prevState,
                  address: event.target.value,
                }))
              }
              required
            ></input>
          </div>
          <div className="border mt-2">
            <label className="ms-2">Aparment</label>
            <input type="text" className="w-100 ms-2" name="aparment"></input>
          </div>
          <div className="d-flex mt-2">
            <div className="border p-0 me-1">
              <label className="ms-2">City</label>
              <input
                type="text"
                className="ms-2"
                onChange={(event) =>
                  setFullAddress((prevState) => ({
                    ...prevState,
                    city: event.target.value,
                  }))
                }
                required
              ></input>
            </div>
            <div className="border p-0 me-1">
              <label className="ms-2">State</label>
              <input type="text" className="ms-2" required></input>
            </div>
            <div className="border p-0">
              <label className="ms-2">Zip code</label>
              <input
                type="text"
                className="ms-2"
                onChange={(event) =>
                  setFullAddress((prevState) => ({
                    ...prevState,
                    zipcode: event.target.value,
                  }))
                }
              ></input>
            </div>
          </div>
          <div className="border mt-2">
            <label className="ms-2">Phone</label>
            <input
              type="text"
              className="w-100 ms-2"
              name="phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            ></input>
          </div>
          {/* <span className="fs-4 fw-bold">Payment method</span>
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
                  required
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
                  required
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
                  required
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
                  required
                ></input>
                <div className="d-flex">
                  <input
                    className="w-50 me-2"
                    placeholder="Expiration date"
                    type="month"
                    min="2023-06"
                    required
                  ></input>
                  <input className="w-50" placeholder="CVV" required></input>
                </div>
              </div>
            </div>
          )} */}
          <div className="d-flex justify-content-end">
            <Link to="/cart" className="w-50 my-4 py-2 px-1">
              <span id="return">{"< RETURN TO CART"}</span>
            </Link>
            <button
              type="submit"
              className="btn d-flex justify-content-center w-50 my-4 py-2 px-1 rounded-0"
              id="continue-shipping"
            >
              CONTINUE TO SHIPPING
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ShippingAddress;
