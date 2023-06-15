import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

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
      <div className="row">
        <div className="col no-margin bg-grey text-center">
          <h1>My Bag</h1>

          <div className="col col-sm-6 no-margin bg-grey text-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloud_iii_red_66x0049_main_1_588d9fec-b439-4046-bcae-4d38df96053e_900x.jpg?v=1686682119"
              alt="imagen del producto"
            />{" "}
          </div>
          <div>
            <Link to="">HyperX SoloCast - USB Microphone</Link>
            <span>Color: Black</span>
            <p>$ price</p>

            <Container>
              <Row>
                <Col>
                  <h1>Contador: {count}</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="primary" onClick={handleIncrement}>
                    Sumar
                  </Button>
                </Col>
                <Col>
                  <Button variant="danger" onClick={handleDecrement}>
                    Restar
                  </Button>
                </Col>
              </Row>
            </Container>

            <button> remove </button>
          </div>
        </div>

        <div>
          <p>Subtotal:price</p>
          <button>VIEW BAG</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
