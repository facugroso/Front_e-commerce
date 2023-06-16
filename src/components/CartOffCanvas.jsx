import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../redux/offCanvasSlice";
import { Link } from "react-router-dom";

function CartOffCanvas({ cart, ...placement }) {
  const show = useSelector((state) => state.offcanvas);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleClose = () => {
    dispatch(setShow(false));
    console.log("cartOffCanvas");
  };
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} {...placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Bag</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div className="row no-margin bg-grey">
              <div className="col">
                <img
                  className="img-fluid border"
                  src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloud_iii_red_66x0049_angle_4_720x.jpg?v=1686845842"
                  alt="imagen del producto"
                />{" "}
              </div>
              <div className="col">
                <span className="fw-bold d-block">
                  HyperX Cloud III - Gaming Headset
                </span>
                <span>Color: Black-Red</span>
                <p>$99.99</p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex border">
                    <i className="bi bi-dash" onClick={handleDecrement}></i>
                    <p className="d-block px-3 m-0"> {count}</p>
                    <i className="bi bi-plus" onClick={handleIncrement}></i>
                  </div>
                  <div>
                    <i className="bi bi-trash3"></i>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p>Subtotal:price</p>
              <Link to="/cart">
                <button
                  className="btn btn-light border w-50"
                  onClick={handleClose}
                >
                  VIEW BAG
                </button>
              </Link>
              <button className="btn btn-danger border w-50">CHECK OUT</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartOffCanvas;
