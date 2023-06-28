import { Link } from "react-router-dom";
import "./AboutUSButton.css";

function AboutUSButton() {
  return (
    <div className="link-lateral" transition-style="in:wipe:down">
      <Link to="/about-us">
        <span className="btn btn-dark">About this project</span>
      </Link>
    </div>
  );
}

export default AboutUSButton;
