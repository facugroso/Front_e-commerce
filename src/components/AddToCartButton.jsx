import { useState } from "react";
import { useDispatch } from "react-redux";
import { setShow } from "../redux/offCanvasSlice";

function AddToCartButton() {
  const dispatch = useDispatch();
  const [over, setOver] = useState(false);

  const handleShow = () => {
    dispatch(setShow(true));
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-danger d-flex justify-content-between p-3 w-100"
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        onClick={handleShow}
      >
        <span className="description">Add to cart</span>
        <i className={over ? "bi bi-bag-plus-fill" : "bi bi-bag"}></i>
      </button>
    </>
  );
}

export default AddToCartButton;
