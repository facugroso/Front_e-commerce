import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-bootstrap/lib/Navbar";

function cart({ cart, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow} className="me-2">
        👜
      </Button>
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
                <Link to="../pages/cart">HyperX SoloCast - USB Microphone</Link>
                <span>Color: Black</span>
                <p>$ price</p>
                <input> (-) contador (+)</input>
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

export default cart;
