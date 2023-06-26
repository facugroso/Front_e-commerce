import { useState, useEffect } from "react";
import axios from "axios";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { Link } from "react-router-dom";
import "./FeaturedItem.css";
import { Parallax } from "react-scroll-parallax";

function FeaturedItem() {
  const [productInfo, setProductInfo] = useState(null);
  useEffect(() => {
    async function getProducts() {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/products`,
      });
      setProductInfo(response.data);
    }
    getProducts();
  }, []);

  return (
    <>
      {productInfo && (
        <div>
          <>
            <div className="row">
              <div className="col-lg-7">
                <div className="d-flex flex-column h-100 justify-content-center">
                  <div className="item-description">
                    <p className="fw-semibold">
                      {productInfo[0].descriptionTitle}
                    </p>
                    <h2 className="fw-bold fs-1 modelTitle">
                      {productInfo[0].name}
                    </h2>
                    <p className="fs-5 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Et laborum esse ipsum repellat magnam iste ipsam omnis
                      nostrum natus qui.
                    </p>
                  </div>
                  <div>
                    <Link to={`/products/${productInfo[0].slug}`}>
                      <button
                        id="button-style"
                        className="btn rounded-0 px-3 py-2"
                      >
                        <div className="d-flex align-items-center">
                          <span>LEARN MORE</span>
                          <span className="d-inline-block ms-3 button_arrow">
                            <ArrowIcon />
                          </span>
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="background-container">
                  <div className="itembackground-top"></div>
                  <div className="itembackground-body">
                    <Parallax translateY={["-70px", "120px"]}>
                      <img
                        className="itemimage-first hide-bg"
                        src={
                          productInfo[0].image.includes("https")
                            ? productInfo[0].image
                            : `${import.meta.env.VITE_IMAGE_CLOUD_DIRECTION}/${
                                productInfo[0].image
                              }`
                        }
                        alt="Cloud Stinger 2 Wireless image"
                      />
                    </Parallax>
                  </div>
                  <div className="itembackground-bottom"></div>
                </div>
              </div>
            </div>

            <section className="second-featured-item">
              <div className="row">
                <div className="col-lg-5">
                  <div>
                    <div className="second-itembackground-top"></div>
                    <div className="second-itembackground-body">
                      <Parallax translateY={["-70px", "120px"]}>
                        <img
                          className="itemimage-second hide-bg"
                          src={
                            productInfo[13].image.includes("https")
                              ? productInfo[13].image
                              : `${
                                  import.meta.env.VITE_IMAGE_CLOUD_DIRECTION
                                }/${productInfo[13].image}`
                          }
                          alt="Pulsefire Haste image"
                        />
                      </Parallax>
                    </div>
                    <div className="second-itembackground-bottom"></div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="d-flex flex-column h-100 justify-content-center second-item-description">
                    <div>
                      <p className="fw-semibold">
                        {" "}
                        {productInfo[13].descriptionTitle}
                      </p>
                      <h2 className="fw-bold fs-1 modelTitle">
                        {productInfo[13].name}
                      </h2>
                      <p className="fs-5 description ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aliquam similique facere sint, repellat impedit ut
                        ipsum magnam quis ipsam dolorem.
                      </p>
                      <Link to={`/products/${productInfo[13].slug}`}>
                        <button
                          id="button-style"
                          className="btn rounded-0 px-3 py-2"
                        >
                          <div className="d-flex align-items-center">
                            <span>LEARN MORE</span>
                            <span className="d-inline-block ms-3 button_arrow">
                              <ArrowIcon />
                            </span>
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        </div>
      )}
    </>
  );
}

export default FeaturedItem;
