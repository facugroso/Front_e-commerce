import { useEffect, useState } from "react";
import axios from "axios";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "./TopCategories.css";

function TopCategories() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function getCategories() {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/categories`,
      });
      setCategories(response.data);
    }
    getCategories();
  }, []);

  return (
    <>
      <div>
        <h2 className="text-center mb-4 fs-3 fw-bold modelTitle">
          Top Categories
        </h2>
      </div>
      {categories && (
        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper style-max-category d-none d-lg-block"
          >
            {categories.map((category) => (
              <SwiperSlide className="swiper-styles" key={category.id}>
                <div className="productCard">
                  <Link
                    id="link-style"
                    className="product-link"
                    to={`/categories/${category.slug}`}
                  >
                    <div>
                      <img
                        className="img-fluid categoryImage"
                        src={
                          category.image.includes("https")
                            ? category.image
                            : `${import.meta.env.VITE_IMAGE_CLOUD_DIRECTION}/${
                                category.image
                              }`
                        }
                        alt={`${category.name} image`}
                      />
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <h3 className="fs-6 mb-0 swiper-text description">
                        {category.name}
                      </h3>
                      <span className="mx-2 button_arrow">
                        <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper d-none d-md-block d-lg-none"
          >
            {categories.map((category) => (
              <SwiperSlide className="swiper-styles" key={category.id}>
                <div className="productCard">
                  <Link
                    id="link-style"
                    className="product-link"
                    to={`/categories/${category.slug}`}
                  >
                    <div>
                      <img
                        className="img-fluid categoryImage"
                        src={
                          category.image.includes("https")
                            ? category.image
                            : `${import.meta.env.VITE_IMAGE_CLOUD_DIRECTION}/${
                                category.image
                              }`
                        }
                        alt={`${category.name} image`}
                      />
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <h3 className="fs-6 mb-0 swiper-text description">
                        {category.name}
                      </h3>
                      <span className="mx-2 button_arrow">
                        <ArrowIcon />
                      </span>
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
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper style-min"
          >
            {categories.map((category) => (
              <SwiperSlide className="pb-5" key={category.id}>
                <div className="productCard">
                  <Link
                    id="link-style"
                    className="product-link"
                    to={`/categories/${category.slug}`}
                  >
                    <div>
                      <img
                        className="img-fluid categoryImage"
                        src={
                          category.image.includes("https")
                            ? category.image
                            : `${import.meta.env.VITE_IMAGE_CLOUD_DIRECTION}/${
                                category.image
                              }`
                        }
                        alt={`${category.name} image`}
                      />
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <h3 className="fs-6 mb-0 swiper-text description">
                        {category.name}
                      </h3>
                      <span className="mx-2 button_arrow">
                        <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </>
  );
}

export default TopCategories;
