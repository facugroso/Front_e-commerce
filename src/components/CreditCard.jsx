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
    <div>
      <Cards
        number={cardData.number}
        expiry={cardData.expiry}
        cvc={cardData.cvc}
        name={cardData.name}
        focused={cardData.focus}
      />
      <form className="mt-4">
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          value={cardData.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="cvc"
          name="cvc"
          placeholder="CVC"
          value={cardData.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="name"
          name="name"
          placeholder="Name"
          value={cardData.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="month"
          name="expiry"
          placeholder="expiry"
          value={cardData.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form>
    </div>
  );
};

export default CreditCard;
