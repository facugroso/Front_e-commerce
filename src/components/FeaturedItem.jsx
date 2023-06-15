import { useState, useEffect } from "react";
import axios from "axios";
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
                  <h2 className="fw-bold fs-1 w-50 modelTitle">
                    {productInfo[0].name}
                  </h2>
                  <p className="fs-5 w-75 featuredItemDescriptionText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    laborum esse ipsum repellat magnam iste ipsam omnis nostrum
                    natus qui.
                  </p>
                  <button className="btn rounded-0 btn-danger">
                    LEARN MORE
                  </button>
                </div>
              </div>
              <div>
                <img
                  className="featuredItemImage hide-bg"
                  src={productInfo[0].image}
                  alt="Cloud Stinger 2 Wireless image"
                />
                <div className="itemDivShape"></div>
                <div className="itemBackground"></div>
                <div className="itemDivShapeVariant"></div>
              </div>
            </div>

            <div className="d-flex secondItemDiv">
              <div className="featuredItemDescription">
                <img
                  className="featuredItemImageVariant hide-bg"
                  src={productInfo[3].image}
                  alt="Pulsefire Haste image"
                />
                <div className="secondItemDivShape"></div>
                <div className="secondItemBackground"></div>
                <div className="secondDivShapeVariant"></div>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <div>
                  <p className="fw-semibold">Lorem ipsum dolor sit amet.</p>
                  <h2 className="fw-bold fs-1 w-75 modelTitle">
                    {productInfo[1].name}
                  </h2>
                  <p className="fs-5 w-75 featuredItemDescriptionText">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam similique facere sint, repellat impedit ut ipsum
                    magnam quis ipsam dolorem.
                  </p>
                  <button className="btn rounded-0 btn-danger">
                    LEARN MORE
                  </button>
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
