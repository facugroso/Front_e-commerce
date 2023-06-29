import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import Cards from "react-credit-cards-2";

import { FormContext } from "../pages/CheckOut";
import Visa from "../assets/icons/CardIcons/Visa";
import MasterCard from "../assets/icons/CardIcons/MasterCard";
import Amex from "../assets/icons/CardIcons/Amex";
import Discover from "../assets/icons/CardIcons/Discover";

import "../../node_modules/react-credit-cards-2/dist/es/styles-compiled.css";

function Payment() {
  const user = useSelector((state) => state.user);

  const { formData, setFormData } = useContext(FormContext);

  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setCardData((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputChangeNumbers = (evt) => {
    const { name, value } = evt.target;

    /^[0-9]*$/.test(value) &&
      setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setCardData((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className="col">
      <div className="container border mb-3">
        <div className="d-flex justify-content-between p-1">
          <span className="fw-bold">Contact</span>
          <span>{user.dataValues.email}</span>
        </div>
        <div className="d-flex justify-content-between p-1">
          <span className="fw-bold">Ship to</span>
          <span>{`${formData.step1.fullAddress.country}, ${formData.step1.fullAddress.address}, ${formData.step1.fullAddress.city}, ${formData.step1.fullAddress.state}`}</span>
        </div>
        <div className="d-flex justify-content-between p-1">
          <span className="fw-bold">Method</span>
          <span>{formData.step1.fullAddress.country}</span>
        </div>
      </div>

      <div>
        <h3>Payment</h3>
        <p className="fw-light">All transactions are secure and encrypted.</p>
        <div className="border">
          <span className="d-flex p-2 mb-3">
            <input type="radio" defaultChecked />
            <span className="ms-2">Credit Card</span>
            <span className="ms-auto">
              <Visa />
              <MasterCard />
              <Amex />
              <Discover />
            </span>
          </span>
          <div className="pb-4">
            <div className="p-4 border-top">
              <Cards
                number={cardData.number}
                expiry={cardData.expiry}
                cvc={cardData.cvc}
                name={cardData.name}
                focused={cardData.focus}
              />
              <div className="my-4 d-flex justify-content-between">
                <div>
                  <input
                    type="text"
                    name="number"
                    placeholder="Card Number"
                    className="border p-2 mb-2"
                    maxLength={16}
                    value={cardData.number}
                    onChange={(event) => {
                      handleInputChangeNumbers(event);
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        step3: {
                          ...prevFormData.step3,
                          paymentdata: {
                            ...prevFormData.step3.paymentdata,
                            cardNumber: event.target.value,
                          },
                        },
                      }));
                    }}
                    onFocus={handleInputFocus}
                    required
                  />
                  <input
                    type="text"
                    name="cvc"
                    maxLength={3}
                    placeholder="CVC"
                    className="border p-2 mb-2"
                    value={cardData.cvc}
                    onChange={handleInputChangeNumbers}
                    onFocus={handleInputFocus}
                    required
                  />
                </div>
                <div className="d-flex flex-column justify-content-end">
                  <input
                    type="name"
                    name="name"
                    placeholder="Name"
                    className="border p-2 mb-2"
                    value={cardData.name}
                    onChange={(event) => {
                      handleInputChange(event);
                      const inputName = event.target.value;
                      const fullName = inputName.split(" ");
                      const firstname = fullName[0];
                      const lastname = fullName[1];
                      setFormData((prevFormData) => ({
                        ...prevFormData,
                        step3: {
                          ...prevFormData.step3,
                          paymentdata: {
                            ...prevFormData.step3.paymentdata,
                            firstname: firstname,
                            lastname: lastname,
                          },
                        },
                      }));
                    }}
                    onFocus={handleInputFocus}
                    required
                  />
                  <input
                    type="text"
                    id="expiryDate"
                    placeholder="MM/YY"
                    name="expiry"
                    maxLength={4}
                    className="border p-2 mb-2"
                    value={cardData.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
