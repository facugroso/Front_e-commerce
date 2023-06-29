import React from "react";
import { useSelector } from "react-redux";

function Purchase() {
  const user = useSelector((state) => state.user);
  return (
    <div className="container d-flex flex-column justify-content-center">
      <h1 className="fs-1 mb-2 text-center">
        THANK YOU {user.dataValues.firstname}
      </h1>
      <p className="text-center">
        We are gettin started on your order right away, and you will recive an
        order confirmation email shortly to {user.dataValues.email}. In the
        meantime, explore the latest HyperX products
      </p>
    </div>
  );
}

export default Purchase;
