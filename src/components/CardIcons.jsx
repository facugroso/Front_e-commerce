import Amex from "../assets/icons/CardIcons/Amex";
import ApplePay from "../assets/icons/CardIcons/ApplePay";
import Discover from "../assets/icons/CardIcons/Discover";
import Meta from "../assets/icons/CardIcons/Meta";
import Gpay from "../assets/icons/CardIcons/Gpay";
import MasterCard from "../assets/icons/CardIcons/MasterCard";
import Visa from "../assets/icons/CardIcons/Visa";
import ChatBubble from "../assets/icons/ChatBubble";

import "./CardIconsOffCanvas.css";

function CardIconsOffCanvas({ showChat }) {
  return (
    <div className="credit-card-container row mt-3">
      <div
        className={
          !showChat ? "text-center col-12 p-0" : "text-center col-9 p-0"
        }
      >
        <span>
          <Amex />
          <ApplePay />
          <Discover />
          <Meta />
          <Gpay />
          <MasterCard />
          <Visa />
        </span>
        <p className="ms-4">
          Shipping, taxes, and discounts calculated at checkout. Orders will be
          processed in USD.
        </p>
      </div>
      {!showChat ? (
        <></>
      ) : (
        <>
          <div className="col p-0">
            <ChatBubble />
          </div>
        </>
      )}
    </div>
  );
}

export default CardIconsOffCanvas;
