import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NewProducts from "../components/home/NewProducts";
import "./Purchase.css";

function Purchase() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className="container">
        <div className="text-center mt-5">
          <Link to="/">
            <span className="product-link">Home</span>
          </Link>
          <span> / CHECKOUT</span>
        </div>
        <div className="my-5 text-center">
          <h1 className="mb-2 modelTitle my-5">
            THANK YOU, {user.dataValues.firstname}
          </h1>
          <div className="w-100 d-flex justify-content-center">
            <p className="mt-5 fs-5 description w-50">
              We are gettin started on your order right away, and you will
              recive an order confirmation email shortly to{" "}
              {user.dataValues.email}. In the meantime, explore the latest
              HyperX products
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Link to={"/"}>
              <button
                className="mb-5 mx-1 btn d-flex justify-content-center my-4 px-3 py-2 px-1 rounded-0"
                id="continue-shipping"
              >
                CONTINUE SHOPPING
              </button>
            </Link>
            <Link to={"/user-info"}>
              <button
                className="mb-5 mx-1 btn d-flex justify-content-center my-4 px-3 py-2 px-1 rounded-0"
                id="continue-shipping"
              >
                MY ORDERS
              </button>
            </Link>
          </div>
        </div>
        <div className="latest-products">
          <NewProducts />
        </div>
      </div>
    </>
  );
}

export default Purchase;
