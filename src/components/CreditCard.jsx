import React, { useState } from "react";
import Cards from "react-credit-cards-2";

import "../../node_modules/react-credit-cards-2/dist/es/styles-compiled.css";

const CreditCard = () => {
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

  const handleInputFocus = (evt) => {
    setCardData((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
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
            type="number"
            name="number"
            placeholder="Card Number"
            className="border p-2 mb-2"
            value={cardData.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="cvc"
            name="cvc"
            placeholder="CVC"
            className="border p-2 mb-2"
            value={cardData.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="d-flex flex-column justify-content-end">
          <input
            type="name"
            name="name"
            placeholder="Name"
            className="border p-2 mb-2"
            value={cardData.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="month"
            name="expiry"
            placeholder="expiry"
            className="border p-2 mb-2"
            value={cardData.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
