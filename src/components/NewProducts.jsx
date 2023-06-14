import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import "./NewProducts.css";

function NewProducts() {
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
        <div className="d-flex">
          <div className="descriptionBox">
            <h2 className="fw-bold fs-3 mb-3">New Products</h2>
            <p className="mb-5">Check Our New Gaming Tech!</p>
            <Button className="rounded-0" variant="outline-dark">
              LEARN MORE
            </Button>
          </div>

          {productInfo.map((item) => (
            <div className="productCard p-3 border mx-2 d-flex flex-column justify-content-between">
              <div className="p-4">
                <img className="img-fluid" src={item.image} alt="" />
              </div>
              <div>
                <h3 className="fs-6">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default NewProducts;
