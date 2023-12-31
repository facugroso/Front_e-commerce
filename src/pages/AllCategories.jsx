import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Category.css";

function AllCategories() {
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    async function getCategory() {
      const res = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/categories`,
      });
      setCategory(res.data);
    }
    getCategory();
  }, [category]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/products`,
      });
      setProducts(response.data);
    }
    getProducts();
  }, [products]);

  return (
    <>
      {category === undefined ? (
        <div>
          <p>Loading....</p>
        </div>
      ) : (
        <>
          <section>
            <div className="text-center mt-5">
              <Link to="/">
                <span className="product-link">Home</span>
              </Link>
              <span> / ALL CATEGORIES</span>
            </div>
            <div className="mt-5">
              <div className="text-center mb-5">
                <h1 className="modelTitle">All Categories</h1>
              </div>
            </div>
            {products && (
              <>
                <div className="background-gray">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-2 gray-left-border gray-left-column pe-4">
                        <h2 className="modelSubtitle fs-4 pt-5 pb-3">
                          Refine By
                        </h2>
                        <hr />
                        <p className="description fs-6 fw-bold">Color</p>
                      </div>
                      <div className="col-md-10 bg-white px-5 d-flex flex-fill pb-5">
                        <div className="row g-3 ">
                          {products.map((item) => {
                            return (
                              <>
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                  <div
                                    key={item.id}
                                    className="item-card p-3 border"
                                  >
                                    <Link
                                      className="product-link"
                                      to={`/products/${item.slug}`}
                                    >
                                      <div>
                                        <img
                                          className="img-fluid product-image"
                                          src={
                                            item.image.includes("https")
                                              ? item.image
                                              : `${
                                                  import.meta.env
                                                    .VITE_IMAGE_CLOUD_DIRECTION
                                                }/${item.image}`
                                          }
                                          alt={`${item.name} image`}
                                        />
                                      </div>
                                      <div>
                                        <h3 className="fs-6 product-name">
                                          {item.name}
                                        </h3>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </section>
        </>
      )}
    </>
  );
}

export default AllCategories;
