import { Link } from "react-router-dom";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <div className="main container-fluid bg-image">
          <div
            id="boxMax"
            className="d-flex flex-column justify-content-center h-100"
          >
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
        <div
          id="boxMin"
          className="d-flex flex-column justify-content-center d-none "
        >
          <div className="d-flex flex-column justify-content-between py-5 container">
            <h1 className="modelTitle fs-2 ">CLOUD III</h1>
            <p className="modelSubtitle fs-6">A Legend Reborn</p>
            <Link
              to="/products/hyperx-cloud-iii-gaming-headset"
              className="shopLink"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
