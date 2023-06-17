import { useState } from "react";
import { useDispatch } from "react-redux";
import { setShow } from "../redux/offCanvasSlice";

import "./AddToCartButton.css";

function AddToCartButton() {
  const dispatch = useDispatch();
  const [over, setOver] = useState(false);

  const handleShow = () => {
    dispatch(setShow(true));
  };

  return (
    <>
      <span
        type="button"
        className="d-flex justify-content-between p-3 w-100"
        id="add-to-cart"
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        onClick={handleShow}
      >
        <span className="description">Add to cart</span>
        <i className={over ? "bi bi-bag-plus" : "bi bi-bag"}></i>
      </span>
    </>
  );
}

export default AddToCartButton;
