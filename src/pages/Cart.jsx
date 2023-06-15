import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Cart.css";

function Cart() {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="container ">
        <h1 className="fw-bold fs-5">My Bag</h1>
        <div className="row">
          <div className="col">
            <div className=" no-margin  d-flex align-items-center ">
              <div className="image p-3">
                <img
                  src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloud_iii_red_66x0049_main_1_588d9fec-b439-4046-bcae-4d38df96053e_900x.jpg?v=1686682119"
                  alt="imagen del producto"
                  className="productCart border"
                />
              </div>
              <div className="text-blak ">
                <p className="fw-bold fs-6">HyperX SoloCast - USB Microphone</p>
                <span>Color: Black-Red</span>
                <p>$99.99</p>

                <div className="d-flex justify-content-between">
                  <div className="d-flex border">
                    <i className="bi bi-dash" onClick={handleDecrement}></i>
                    <p className="d-block px-3 m-0"> {count}</p>
                    <i className="bi bi-plus" onClick={handleIncrement}></i>
                  </div>
                  <div>
                    <i className="bi bi-trash3 text-end"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center ">
            <div className="bg-white text-center bg-body-tertiary p-4 w-50">
              <p>Subtotal:price</p>
              <button className="btn btn-danger rounded-0 w-100">
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
