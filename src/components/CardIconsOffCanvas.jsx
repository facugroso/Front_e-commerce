import Amex from "../assets/icons/CardIcons/Amex";
import ApplePay from "../assets/icons/CardIcons/ApplePay";
import Discover from "../assets/icons/CardIcons/Discover";
import Meta from "../assets/icons/CardIcons/Meta";
import Gpay from "../assets/icons/CardIcons/Gpay";
import MasterCard from "../assets/icons/CardIcons/MasterCard";
import Visa from "../assets/icons/CardIcons/Visa";

import "./CardIconsOffCanvas.css";

function CardIconsOffCanvas() {
  return (
    <div className="card-container">
      <Amex />
      <ApplePay />
      <Discover />
      <Meta />
      <Gpay />
      <MasterCard />
      <Visa />
    </div>
  );
}

export default CardIconsOffCanvas;
