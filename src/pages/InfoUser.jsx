import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

import "./InfoUser.css";

function InfoUser() {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function fetchData() {
      const ordersResponse = await axios({
        method: "get",
        url: `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/orders`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setOrders(ordersResponse.data);
    }
    fetchData();
  }, []);

  return (
    <>
      {orders && (
        <div className="container mt-3 py-5 ">
          <div className="row">
            <div className="col-6">
              <h1>User Info</h1>
              <div className="info-user">
                <label htmlFor="">Name:</label>
                <p className="border ">{user.dataValues.firstname}</p>
                <label htmlFor="">Lastname:</label>
                <p className="border">{user.dataValues.lastname}</p>
                <label htmlFor="">Email:</label>
                <p className="border">{user.dataValues.email}</p>
                <label htmlFor="">Phone:</label>
                <p className="border">{user.dataValues.phone}</p>
              </div>
            </div>
            <div className="col-6">
              <h1>Order List</h1>

              {orders.map(
                (order) =>
                  user.dataValues.id === order.userId && (
                    <>
                      {console.log(order)}
                      <th scope="row">Adress</th>
                      <th scope="row">Product</th>
                      <th scope="row">Total</th>
                      <tbody>
                        <tr key={order.id}>
                          <td>{order.address}</td>
                          <td>
                            {order.products.map((product) => {
                              return (
                                <>
                                  <div className="mb-2">
                                    {product.name} - {product.price}
                                  </div>
                                </>
                              );
                            })}
                          </td>
                          <td>
                            $
                            {order.products
                              .reduce(
                                (total, product) =>
                                  total +
                                  parseFloat(
                                    (product.price * product.quantity).toFixed(
                                      2
                                    )
                                  ),
                                0
                              )
                              .toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </>
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoUser;
