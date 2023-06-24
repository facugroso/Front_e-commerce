import { useDispatch } from "react-redux";
import { setShow } from "../redux/offCanvasSlice";
import { addToCart } from "../redux/cartSlice";

import ArrowIcon from "../assets/icons/ArrowIcon";

import "./AddToCartButton.css";

function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  const handleShow = () => {
    dispatch(setShow(true));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <span
        type="button"
        className="d-flex justify-content-between p-3 w-100"
        id="add-to-cart"
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        onClick={() => {
          handleShow(), handleAddToCart(product);
        }}
      >
        <span className="description">Add to cart</span>
        <span className="add-to-cart-arrow">
          <ArrowIcon />
        </span>
      </span>
    </>
  );
}

export default AddToCartButton;
