import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

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
            <div className="my-3">
              <div className="px-3 d-flex">
                <Link to={"/"}>
                  <p className="redirect-link">Home</p>
                </Link>
                <p className="mx-1"> / {product.name}</p>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-lg-1 px-0 d-none d-lg-block">
                <div style={{ height: "600px" }}>
                  <Swiper
                    slidesPerView="5"
                    spaceBetween={10}
                    direction="vertical"
                    navigation={true}
                    modules={[Navigation]}
                    className="gallery-carrousel"
                  >
                    {product.gallery.map((image, idx) => (
                      <SwiperSlide>
                        <img
                          key={idx}
                          onClick={() => setImg(image)}
                          className="btn-image p-2 my-5"
                          src={
                            image.includes("https")
                              ? image
                              : `${
                                  import.meta.env.VITE_IMAGE_CLOUD_DIRECTION
                                }/${image}`
                          }
                        ></img>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-6 col-md-7 order-md-1">
                <img
                  className="img-fluid style-max d-none d-lg-block"
                  src={
                    img.includes("https")
                      ? img
                      : `${import.meta.env.VITE_IMAGE_CLOUD_DIRECTION}/${img}`
                  }
                ></img>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper style-min-product"
                >
                  {product.gallery.map((image, idx) => (
                    <SwiperSlide className="pb-5">
                      <div className="d-flex flex-column justify-content-between">
                        <div>
                          <img
                            className="img-fluid product-image"
                            src={
                              image.includes("https")
                                ? image
                                : `${
                                    import.meta.env.VITE_IMAGE_CLOUD_DIRECTION
                                  }/${image}`
                            }
                            alt={` image`}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="col-lg-5 col-md-5 p-4 order-md-2 ">
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
                <div className="col-12 col-sm-7">
                  <h2 className="mb-2 fs-2 modelTitle fw-bolder">
                    {product.descriptionTitle}
                  </h2>
                  <p className="description">{product.description}</p>
                </div>
                <div className="col-12 col-sm-5">
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
