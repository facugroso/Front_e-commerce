import { useState, useEffect } from "react";
import axios from "axios";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { Link } from "react-router-dom";
import "./FeaturedItem.css";

function FeaturedItem() {
  const [productInfo, setProductInfo] = useState(null);
  useEffect(() => {
    async function getProducts() {
      const response = await axios({
        method: "get",
        url: "http://localhost:3000/products",
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
            <div className="d-flex">
              <div className="d-flex flex-column justify-content-center">
                <div>
                  <p className="fw-semibold">Lorem ipsum dolor sit amet.</p>
                  <h2 className="fw-bold fs-1 w-50 modelTitle" id="itemTitle">
                    {productInfo[0].name}
                  </h2>
                  <p className="fs-5 w-75 featuredItemDescriptionText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    laborum esse ipsum repellat magnam iste ipsam omnis nostrum
                    natus qui.
                  </p>
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
              <div>
                <img
                  className="featuredItemImage hide-bg"
                  src={productInfo[0].image}
                  alt="Cloud Stinger 2 Wireless image"
                />
              </div>
              <div>
                <div className="itemDivShape"></div>
                <div className="itemBackground"></div>
                <div className="itemDivShapeVariant"></div>
              </div>
            </div>

            <div className="d-flex secondItemDiv">
              <div className="featuredItemDescription">
                <img
                  className="featuredItemImageVariant hide-bg"
                  src={productInfo[13].image}
                  alt="Pulsefire Haste image"
                />
                <div className="secondItemDivShape"></div>
                <div className="secondItemBackground"></div>
                <div className="secondDivShapeVariant"></div>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <div>
                  <p className="fw-semibold">Lorem ipsum dolor sit amet.</p>
                  <h2 id="secondItemTitle" className="fw-bold fs-1 modelTitle">
                    {productInfo[13].name}
                  </h2>
                  <p id="sencodItemDesc" className="fs-5 description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam similique facere sint, repellat impedit ut ipsum
                    magnam quis ipsam dolorem.
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
          </>
        </div>
      )}
    </>
  );
}

export default FeaturedItem;
