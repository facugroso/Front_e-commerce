import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Category.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";
import Err404 from "./Err404";

function Category() {
  const params = useParams();
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getCategory() {
      try {
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_API_URL}/categories/${params.slug}`,
        });
        setCategory(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    }
    getCategory();
  }, [params.slug]);

  useEffect(() => {
    async function getProducts() {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_API_URL}/products`,
      });
      setProducts(response.data);
    }

    getProducts();
  }, []);

  async function filterCheck() {
    toast.warn("This feature is still under developement", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  if (isLoading) {
    return (
      <>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <Spinner animation="border" role="status" variant="dark">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </>
    );
  }

  if (isError || !category) {
    return (
      <>
        <Err404 />
      </>
    );
  }

  return (
    <>
      {category !== null && (
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
                  <span> / {category.name}</span>
                </div>
                <div className="mt-5">
                  <div className="text-center mb-5">
                    <h1 className="modelTitle">{category.name}</h1>
                  </div>
                </div>
                {products && (
                  <>
                    <div className="background-gray">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-2 gray-left-border gray-left-column pe-4 p-0 mb-5">
                            <h2 className="modelSubtitle fs-4 pt-4 mt-2 pb-3">
                              Refine By
                            </h2>
                            <hr />
                            <p className="description fs-5 fw-bold">Platform</p>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="m-0">PC</p>
                              <input type="checkbox" onClick={filterCheck} />
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="m-0">PS5</p>
                              <input type="checkbox" onClick={filterCheck} />
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="m-0">PS4</p>
                              <input type="checkbox" onClick={filterCheck} />
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="m-0">Xbox One</p>
                              <input type="checkbox" onClick={filterCheck} />
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="m-0">Xbox Series XIS</p>
                              <input type="checkbox" onClick={filterCheck} />
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="m-0">Nintendo Switch</p>
                              <input type="checkbox" onClick={filterCheck} />
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="m-0">Mobile</p>
                              <input type="checkbox" onClick={filterCheck} />
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="m-0">Mac</p>
                              <input type="checkbox" onClick={filterCheck} />
                            </div>
                            <hr />
                            <p className="description fs-5 fw-bold">Price</p>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="m-0">$25 - $50</p>
                              <input type="checkbox" onClick={filterCheck} />
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="m-0">$50 - $75</p>
                              <input type="checkbox" onClick={filterCheck} />
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="m-0">$75 - $100</p>
                              <input type="checkbox" onClick={filterCheck} />
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="m-0">$100 - $150</p>
                              <input type="checkbox" onClick={filterCheck} />
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="m-0">$150 - $200</p>
                              <input type="checkbox" onClick={filterCheck} />
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <p className="m-0">$300 - $400</p>
                              <input type="checkbox" onClick={filterCheck} />
                            </div>
                          </div>
                          <div className="col-md-10 bg-white px-5 d-flex flex-fill pb-5">
                            <div className="row g-3 ">
                              {products.map((item) => {
                                return (
                                  item.categoryId === category.id && (
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
                                  )
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
      )}
    </>
  );
}

export default Category;
