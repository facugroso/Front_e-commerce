import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

function CartOffCanvas({ cart, show, handleClose, ...props }) {
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
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Bag</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Your cart is currently empty.
          <div>
            <div className="row no-margin bg-grey">
              <div className="col">
                <img src="" alt="imagen del producto" />{" "}
              </div>
              <div className="col">
                <span>Color: Black</span>
                <p>$ price</p>
                <div className="d-flex border">
                  <i className="bi bi-dash" onClick={handleDecrement}></i>
                  <p className="d-block px-3 m-0"> {count}</p>
                  <i className="bi bi-plus" onClick={handleIncrement}></i>
                </div>
                <button> remove </button>
              </div>
            </div>

            <div>
              <p>Subtotal:price</p>
              <button>VIEW BAG</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CartOffCanvas;
