import React from "react";

function PaymentMethod({ method }) {
  return (
    <>
      {method === "" ? (
        <></>
      ) : (
        <div className="row">
          <div className="col">
            <input className="w-100 mb-2" placeholder="Card number"></input>
            <input className="w-100 mb-2" placeholder="First name"></input>
            <input className="w-100 mb-2" placeholder="Last name"></input>
            <input className="w-100 mb-2" placeholder="CI"></input>
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
    </>
  );
}

export default PaymentMethod;
