import { Link } from "react-router-dom";

function AboutUSButton() {
  return (
    <Link to="/about-us">
      <button className="btn btn-secondary">About thid proyect</button>
    </Link>
  );
}

export default AboutUSButton;
