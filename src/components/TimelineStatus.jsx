import { useContext } from "react";
import { StepContext } from "../pages/CheckOut";

import "./TimelineStatus.css";

function TimelineStatus() {
  const { checkoutStep, setCheckoutStep } = useContext(StepContext);

  return (
    <div className="my-4 p-4">
      <ol id="timeline-list" className="d-flex justify-content-between">
        <li className="d-flex flex-column align-items-center">
          <span className="timeline-circle-red"></span>
          <span className="description">Cart</span>
        </li>
        <li className="d-flex flex-column align-items-center">
          <span
            className={
              checkoutStep >= 1 ? "timeline-circle-red " : "timeline-circle"
            }
          ></span>
          <span className="description">Information</span>
        </li>
        <li className="d-flex flex-column align-items-center">
          <span
            className={
              checkoutStep >= 2 ? "timeline-circle-red" : "timeline-circle"
            }
          ></span>
          <span className="description">Shipping</span>
        </li>
        <li className="d-flex flex-column align-items-center">
          <span
            className={
              checkoutStep >= 3 ? "timeline-circle-red" : "timeline-circle"
            }
          ></span>
          <span className="description">Payment</span>
        </li>
      </ol>
    </div>
  );
}

export default TimelineStatus;
