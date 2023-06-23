import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import AddToCartButton from "../components/AddToCartButton";

import "./Product.css";

function Product() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [img, setImg] = useState();

  useEffect(() => {
    async function getProducts() {
      const res = await axios({
        method: "get",
        url: `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/products/${
          params.slug
        }`,
      });
      setProduct(res.data);
      setImg(res.data.image);
    }
    getProducts();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {product === undefined ? (
        <div>
          <p>Loading....</p>
        </div>
      ) : (
        <>
          <div className="container">
            <div className="row m-4">
              <div className="col-12 col-sm-6 order-md-1 order-2">
                {product.gallery.map((image, idx) => (
                  <img
                    key={idx}
                    onClick={() => setImg(image)}
                    className="btn-image"
                    src={
                      image.includes("https")
                        ? image
                        : `${
                            import.meta.env.VITE_IMAGE_CLOUD_DIRECTION
                          }/${image}`
                    }
                  ></img>
                ))}
                <img
                  className="img-fluid"
                  src={
                    img.includes("https")
                      ? img
                      : `${import.meta.env.VITE_IMAGE_CLOUD_DIRECTION}/${img}`
                  }
                ></img>
              </div>
              <div className="col-12 col-sm-6 p-4 order-md-2 order-1">
                <h1 className="fs-2 modelSubtitle">{product.name}</h1>
                <p className="fs-5 description">$ {product.price}</p>
                <ul className="description d-none d-md-block">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
          <section className="mt-3 pt-3 description-container">
            <div className="container mt-5 pb-5">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <h2 className="mb-2 fs-2 modelTitle fw-bolder">
                    {product.descriptionTitle}
                  </h2>
                  <p className="description">{product.description}</p>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="row">
                    <div className="col-12">
                      {product.features.map((feature, idx) => (
                        <p className="product-desc description" key={idx}>
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Product;
