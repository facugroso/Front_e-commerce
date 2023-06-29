import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./InfoUser.css";

function InfoUser() {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState();
  const [showUserInfo, setShowUserInfo] = useState("");
  const [showOrders, setShowOrders] = useState("none");

  useEffect(() => {
    async function fetchData() {
      const ordersResponse = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/orders`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setOrders(ordersResponse.data);
    }
    fetchData();
  }, []);

  const handleShowUserInfo = (e) => {
    e.preventDefault();
    setShowUserInfo("");
    setShowOrders("none");
  };

  const handleShowOrders = (e) => {
    e.preventDefault();
    setShowUserInfo("none");
    setShowOrders("");
  };

  return (
    <>
      {orders && (
        <section>
          <div className="text-center mt-5">
            <Link to="/">
              <span className="product-link">Home</span>
            </Link>
            <span> / My profile</span>
          </div>
          <div className="mt-5">
            <div className="text-center mb-5">
              <h1 className="modelTitle">MY PROFILE</h1>
            </div>
          </div>
          <div className="background-gray-user">
            <div className="container">
              <div className="row">
                <div className="col-md-2 gray-left-border gray-left-column pe-4">
                  <h2 className="modelSubtitle fs-4 pt-5 pb-3">My account</h2>
                  <hr />
                  <Link onClick={handleShowUserInfo}>
                    <p className="description fs-6 fw-bold">Account details</p>
                  </Link>
                  <Link onClick={handleShowOrders}>
                    <p className="description fs-6 fw-bold">Orders</p>
                  </Link>
                </div>
                <div className="col-md-10 bg-white px-5 d-flex flex-fill pb-5">
                  <div className="d-flex flex-column w-100">
                    <div
                      className="mb-5"
                      style={{ display: `${showUserInfo}` }}
                    >
                      <h3 className="modelSubtitle fs-3 mb-5">
                        Account details
                      </h3>
                      <div>
                        <div className="d-flex justify-content-between">
                          <div style={{ width: "48%" }}>
                            <p className="m-0 modelSubtitle fw-light fs-5">
                              Firstame:
                            </p>
                            <p className="border description fs-6 p-2">
                              {user.dataValues.firstname}
                            </p>
                          </div>
                          <div style={{ width: "48%" }}>
                            <p className="m-0 modelSubtitle fw-light fs-5">
                              Lastname:
                            </p>
                            <p className="border description fs-6 p-2">
                              {user.dataValues.lastname}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="m-0 modelSubtitle fw-light fs-5">
                            E-mail:
                          </p>
                          <p className="border description fs-6 p-2">
                            {user.dataValues.email}
                          </p>
                          <p className="m-0 modelSubtitle fw-light fs-5">
                            Phone:
                          </p>
                          <p className="border description fs-6 p-2">
                            {user.dataValues.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Orders */}
                    <div
                      className="col-6 w-100 mb-5"
                      style={{ display: `${showOrders}` }}
                    >
                      <h3 className="modelSubtitle fs-3 mb-5">Order List</h3>

                      <table className="table mt-3">
                        <thead>
                          <tr>
                            <th className="modelSubtitle fw-light" scope="col">
                              Adress
                            </th>
                            <th className="modelSubtitle fw-light" scope="col">
                              Product
                            </th>
                            <th className="modelSubtitle fw-light" scope="col">
                              Unit Price / Quantity
                            </th>
                            <th className="modelSubtitle fw-light" scope="col">
                              Total
                            </th>
                            <th className="modelSubtitle fw-light" scope="col">
                              Status
                            </th>
                          </tr>
                        </thead>
                        {orders.map(
                          (order) =>
                            user.dataValues.id === order.userId && (
                              <>
                                <tbody>
                                  <tr key={order.id}>
                                    <td className="description">
                                      <>
                                        {order.address.address},{" "}
                                        {order.address.city},{" "}
                                        {order.address.country}
                                      </>
                                    </td>
                                    <td className="mb-2 description">
                                      {order.products.map((product) => {
                                        return (
                                          <>
                                            <div className="mb-3">
                                              &bull; {product.name}
                                            </div>
                                          </>
                                        );
                                      })}
                                    </td>
                                    <td className="description">
                                      {order.products.map((product) => {
                                        return (
                                          <>
                                            <div className="d-flex align-items-center">
                                              <div>
                                                $ {product.price} /{" "}
                                                {product.quantity}u.
                                              </div>
                                            </div>
                                          </>
                                        );
                                      })}
                                    </td>

                                    <td className="description">
                                      $
                                      {order.products
                                        .reduce(
                                          (total, product) =>
                                            total +
                                            parseFloat(
                                              (
                                                product.price * product.quantity
                                              ).toFixed(2)
                                            ),
                                          0
                                        )
                                        .toFixed(2)}
                                    </td>
                                    <td
                                      className="description"
                                      style={{ textAlign: "right" }}
                                    >
                                      {order.status}
                                    </td>
                                  </tr>
                                </tbody>
                              </>
                            )
                        )}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default InfoUser;
