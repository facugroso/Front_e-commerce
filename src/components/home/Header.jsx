import { Link } from "react-router-dom";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <div className="main container-fluid bg-image">
          <div className="d-flex flex-column justify-content-center h-100">
            <div className="bg-white mainHeadset d-flex flex-column justify-content-between">
              <h1 className="modelTitle">CLOUD III</h1>
              <p className="modelSubtitle">A Legend Reborn</p>
              <Link
                to="/products/hyperx-cloud-iii-gaming-headset"
                className="shopLink"
              >
                <span>SHOP NOW</span>
                <span className="d-inline-block" id="arrow">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
            <div className="divShape"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
