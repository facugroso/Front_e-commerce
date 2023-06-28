import "./TimelineStatus.css";

function TimelineStatus() {
  return (
    <div className="mt-3">
      <ol id="timeline-list" className="d-flex justify-content-between">
        <li className="d-flex flex-column align-items-center">
          <span className="timeline-circle"></span>
          <span>Cart</span>
        </li>
        <li className="d-flex flex-column align-items-center">
          <span className="timeline-circle"></span>
          <span>Information</span>
        </li>
        <li className="d-flex flex-column align-items-center">
          <span className="timeline-circle"></span>
          <span>Shipping</span>
        </li>
        <li className="d-flex flex-column align-items-center">
          <span className="timeline-circle"></span>
          <span>Payment</span>
        </li>
      </ol>
    </div>
  );
}

export default TimelineStatus;
