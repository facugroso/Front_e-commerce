import { useState } from "react";
import CartOffCanvas from "../components/CartOffCanvas";
import "./Product.css";

function Product() {
  const [over, setOver] = useState(false);
  const [img, setImg] = useState(
    "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloud_iii_red_66x0049_main_1_588d9fec-b439-4046-bcae-4d38df96053e_720x.jpg?v=1686682119"
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <button onClick={() => setShow(true)}>+</button>
      <CartOffCanvas show={show} handleClose={handleClose} placement={"end"} />
      <div className="container">
        <div className="row m-4">
          <div className="col-12 col-sm-6 order-md-1 order-2">
            <img
              onClick={() =>
                setImg(
                  "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloud_iii_red_66x0049_main_1_588d9fec-b439-4046-bcae-4d38df96053e_720x.jpg?v=1686682119"
                )
              }
              className="btn-image"
              src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloud_iii_red_66x0049_main_1_588d9fec-b439-4046-bcae-4d38df96053e_720x.jpg?v=1686682119"
            ></img>
            <img
              onClick={() =>
                setImg(
                  "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloud_iii_red_66x0049_angle_4_1512x.jpg?v=1686682119"
                )
              }
              className="btn-image"
              src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloud_iii_red_66x0049_angle_4_1512x.jpg?v=1686682119"
            ></img>
            <img
              onClick={() =>
                setImg(
                  "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloud_iii_red_66x0049_angle_3_1512x.jpg?v=1686682119"
                )
              }
              className="btn-image"
              src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloud_iii_red_66x0049_angle_3_1512x.jpg?v=1686682119"
            ></img>
            <img
              onClick={() =>
                setImg(
                  "https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloud_iii_red_66x0049_angle_2_720x.jpg?v=1686682119"
                )
              }
              className="btn-image"
              src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/hyperx_cloud_iii_red_66x0049_angle_2_720x.jpg?v=1686682119"
            ></img>
            <img className="img-fluid" src={img}></img>
          </div>
          <div className="col-12 col-sm-6 p-4 order-md-2 order-1">
            <h1 className="fs-2 modelSubtitle">
              HyperX Cloud III - Gaming Headset
            </h1>
            <p className="fs-5 description">$99.99</p>
            <ul className="description d-none d-md-block">
              <li>HyperX Signature Comfort and Durability</li>
              <li>Angled 53mm Drivers, Tuned for Impeccable Audio</li>
              <li>
                Crystal-Clear 10mm microphone, noise-cancelling, with LED
                mic-mute indicator
              </li>
              <li>Multiplatform Compatible with 3.5mm, USB-C, and USB-A</li>
            </ul>
            <button
              type="button"
              className="btn btn-danger col-12 d-flex justify-content-between p-3"
              onMouseOver={() => setOver(true)}
              onMouseLeave={() => setOver(false)}
            >
              <span className="description">Add to cart</span>
              <i className={over ? "bi bi-bag-plus-fill" : "bi bi-bag"}></i>
            </button>
          </div>
        </div>
      </div>
      <section className="mt-3 pt-3 description-container">
        <div className="container mt-5 pb-5">
          <div className="row">
            <div className="col-12 col-sm-6">
              <h2 className="mb-2 fs-2 modelTitle fw-bolder">
                A Legend Reborn.
              </h2>
              <p className="description">
                The HyperX Cloud III is an evolution of our legendary Cloud II,
                which is known for its comfort, sound quality and durability.
                With plush HyperX signature memory foam in the headband and ear
                cushions, it provides a comfortable fit perfect for long gaming
                sessions. It also features new, retuned 53mm drivers that are
                angled for an optimal listening experience. The upgraded 10mm
                microphone captures crystal clear in-game voice chat and calls.
                Simple controls on the headset earcup allow you to have quick,
                direct access to mute your mic or adjust audio volume. The LED
                mic mute clearly shows when you`re muted. Compatible with PC,
                PS5, Xbox Series X|S, Xbox One, Nintendo Switch, Mac, and
                Mobile. Experience ultimate comfort and sound across your
                favorite platforms.
              </p>
            </div>
            <div className="col-12 col-sm-6">
              <div className="row">
                <div className="col-6">
                  <p className="product-desc description">
                    HyperX Signature Comfort and Durability
                  </p>
                  <p className="product-desc description">
                    Ultra-Clear Mic with LED Mute Indicator
                  </p>
                  <p className="product-desc description">
                    Onboard Audio and Mic Controls
                  </p>
                </div>
                <div className="col-6">
                  <p className="product-desc description">
                    Angled 53mm Drivers, Tuned for Impeccable Audio
                  </p>
                  <p className="product-desc description">
                    DTS® Headphone:X® Spatial Audio
                  </p>
                  <p className="product-desc description">
                    Compatible with: PC, PS5, PS4, Xbox Series X|S, Xbox One,
                    Nintendo Switch, Mobile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
