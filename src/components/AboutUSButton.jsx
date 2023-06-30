import { Link } from "react-router-dom";
import "./AboutUSButton.css";

function AboutUSButton() {
  return (
    <>
      <div className="link-lateral" transition-style="in:wipe:down">
        <Link to="/about-us" className="modelSubtitle fs-">
          <p className="btn btn-dark">About this project</p>
        </Link>
      </div>
      <div className="link-lateral-cel d-none" transition-style="in:wipe:down">
        <Link to="/about-us" className="modelSubtitle fs-">
          <p className="btn btn-dark">About this project</p>
        </Link>
      </div>
    </>
  );
}

export default AboutUSButton;
