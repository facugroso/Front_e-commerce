import { useContext } from "react";
import { useSelector } from "react-redux";

import { FormContext } from "../pages/CheckOut";

import "../pages/CheckOut.css";

function ShippingAddress() {
  const { formData, setFormData } = useContext(FormContext);

  const user = useSelector((state) => state.user);

  const handleButtonClick = (value) => {
    if (value.trim() === "") {
      // Realizar la acción deseada cuando el campo no esté vacío
      console.log("El campo no está vacío. Realizar la acción aquí.");
    }
  };

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   await axios(
  //     {
  //       method: "POST",
  //       url: `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/orders`,
  //       data: {
  //         firstname,
  //         lastname,
  //         address: fullAddress,
  //         phone,
  //         payment: paymentMethod,
  //         paymentdata: paymentData,
  //         products: cart,
  //         status: "Pending",
  //         userId: user.dataValues.id,
  //       },
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     },
  //     dispatch(clearCart()),
  //     console.log("compraste")
  //   );
  // }

  return (
    <>
      <span className="fs-4 fw-bold">Shipping Address</span>
      <div className="border my-2">
        <label className="ms-2">Country/Region</label>
        <select
          className="w-100 select-country"
          onChange={(event) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              step1: {
                ...prevFormData.step1,
                fullAddress: {
                  ...prevFormData.step1.fullAddress,
                  country: event.target.value,
                },
              },
            }));
          }}
          required
        >
          <option value=""></option>
          <option value="United States">United States</option>
        </select>
      </div>
      <div className="row m-0">
        <div className="col border p-0 me-2">
          <label className="ms-2">First Name</label>
          <input
            type="text"
            className="w-75 p-0 ms-2"
            name="firstname"
            value={
              formData.step1 && formData.step1.firstname
                ? formData.step1.firstname
                : ""
            }
            onChange={(event) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                step1: {
                  ...prevFormData.step1,
                  firstname: event.target.value,
                },
              }));
              //setFirstName(formData.step1.firstname);
            }}
            required
          ></input>
        </div>
        <div className="col border p-0">
          <label className="ms-2">Last Name</label>
          <input
            type="text"
            className="w-75 p-0 ms-2"
            name="lastname"
            value={
              formData.step1 && formData.step1.lastname
                ? formData.step1.lastname
                : ""
            }
            onChange={(event) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                step1: {
                  ...prevFormData.step1,
                  lastname: event.target.value,
                },
              }));
            }}
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
          value={
            formData.step1.fullAddress && formData.step1.fullAddress.address
              ? formData.step1.fullAddress.address
              : ""
          }
          onChange={(event) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              step1: {
                ...prevFormData.step1,
                fullAddress: {
                  ...prevFormData.step1.fullAddress,
                  address: event.target.value,
                },
              },
            }));
          }}
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
            value={
              formData.step1.fullAddress && formData.step1.fullAddress.city
                ? formData.step1.fullAddress.city
                : ""
            }
            onChange={(event) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                step1: {
                  ...prevFormData.step1,
                  fullAddress: {
                    ...prevFormData.step1.fullAddress,
                    city: event.target.value,
                  },
                },
              }));
            }}
            required
          ></input>
        </div>
        <div className="border p-0 me-1">
          <label className="ms-2">State</label>
          <input
            type="text"
            className="ms-2"
            value={
              formData.step1.fullAddress && formData.step1.fullAddress.state
                ? formData.step1.fullAddress.state
                : ""
            }
            onChange={(event) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                step1: {
                  ...prevFormData.step1,
                  fullAddress: {
                    ...prevFormData.step1.fullAddress,
                    state: event.target.value,
                  },
                },
              }));
            }}
            required
          ></input>
        </div>
        <div className="border p-0">
          <label className="ms-2">Zip code</label>
          <input
            type="text"
            className="ms-2"
            value={
              formData.step1.fullAddress && formData.step1.fullAddress.zipcode
                ? formData.step1.fullAddress.zipcode
                : ""
            }
            onChange={(event) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                step1: {
                  ...prevFormData.step1,
                  fullAddress: {
                    ...prevFormData.step1.fullAddress,
                    zipcode: event.target.value,
                  },
                },
              }));
            }}
          ></input>
        </div>
      </div>
      <div className="border mt-2">
        <label className="ms-2">Phone</label>
        <input
          type="text"
          className="w-100 ms-2"
          name="phone"
          value={
            formData.step1 && formData.step1.phone ? formData.step1.phone : ""
          }
          onChange={(event) => {
            setFormData((prevFormData) => ({
              ...prevFormData,
              step1: {
                ...prevFormData.step1,
                phone: event.target.value,
              },
            }));
          }}
        ></input>
      </div>
    </>
  );
}

export default ShippingAddress;

{
  /* <span className="fs-4 fw-bold">Payment method</span>
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
                    setPaymentformData((prevState) => ({
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
          )} */
}
{
  /* <div className="d-flex justify-content-end">
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
          </div> */
}
