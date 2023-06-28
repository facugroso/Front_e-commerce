import { useState, useContext } from "react";
import Cards from "react-credit-cards-2";

import { FormContext } from "../pages/CheckOut";
import CreditCard from "./CreditCard";

function Payment() {
  const { formData, setFormData } = useContext(FormContext);

  console.log(formData);
  return (
    <div className="col">
      {/* <div className="container border mb-3">
        <div className="d-flex justify-content-between p-1">
          <span className="fw-bold">Contact</span>
          <span>{user.dataValues.email}</span>
        </div>
        <div className="d-flex justify-content-between p-1">
          <span className="fw-bold">Ship to</span>
          <span>{`${formData.step1.fullAddress.country},${formData.step1.fullAddress.address},${formData.step1.fullAddress.city},${formData.step1.fullAddress.cardData}`}</span>
        </div>
        <div className="d-flex justify-content-between p-1">
          <span className="fw-bold">Method</span>
          <span>{`${formData.step1.fullAddress.country}`}</span>
        </div>
      </div> */}
      <div>
        <h3>Pyment</h3>
        <div>
          <CreditCard />
        </div>
      </div>
    </div>
  );
}

export default Payment;
