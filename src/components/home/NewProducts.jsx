import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/productSlice";
import axios from "axios";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./NewProducts.css";

function NewProducts() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await axios({
        method: "get",
        url: "http://localhost:3000/products",
      });
      response.data && dispatch(setProducts(response.data));
    }
    getProducts();
  }, []);

  return (
    <>
      {products.length > 0 && (
        <>
          <div className="descriptionbox-min">
            <h2 className="fw-bold fs-3 mb-3 modelTitle">New Products</h2>
            <p className="mb-5 featuredItemDescriptionText fs-5">
              Check Our New Gaming Tech!
            </p>
            <button id="button-style" className="btn rounded-0 px-3 py-2 mb-5">
              <div className="d-flex align-items-center">
                <span>LEARN MORE</span>
                <span className="d-inline-block ms-3 button_arrow">
                  <ArrowIcon />
                </span>
              </div>
            </button>
          </div>
          <div className="d-flex">
            <div className="descriptionbox-max">
              <h2 className="fw-bold fs-3 mb-3 modelTitle">New Products</h2>
              <p className="mb-5 featuredItemDescriptionText fs-5">
                Check Our New Gaming Tech!
              </p>
              <button id="button-style" className="btn rounded-0 px-3 py-2">
                <div className="d-flex align-items-center">
                  <span>LEARN MORE</span>
                  <span className="d-inline-block ms-3 button_arrow">
                    <ArrowIcon />
                  </span>
                </div>
              </button>
            </div>

            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper style-max"
            >
              {products.map((item) => (
                <SwiperSlide className="pb-5" key={item.id}>
                  <div className="productCard p-3 border d-flex flex-column justify-content-between">
                    <Link
                      className="product-link"
                      to={`/products/${item.slug}`}
                    >
                      <div>
                        <img
                          className="img-fluid"
                          src={item.image}
                          alt={`${item.name} image`}
                        />
                      </div>
                      <div>
                        <h3 className="fs-6">{item.name}</h3>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper style-min"
            >
              {products.map((item) => (
                <SwiperSlide className="pb-5" key={item.id}>
                  <div className="productCard p-3 border d-flex flex-column justify-content-between">
                    <Link
                      className="product-link"
                      to={`/products/${item.slug}`}
                    >
                      <div>
                        <img
                          className="img-fluid"
                          src={item.image}
                          alt={`${item.name} image`}
                        />
                      </div>
                      <div>
                        <h3 className="fs-6">{item.name}</h3>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </>
  );
}

export default NewProducts;
