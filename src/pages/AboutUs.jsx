import "./AboutUs.css";
import reactIcon from "../assets/icons/reactIcon.svg";
import reduxIcon from "../assets/icons/reduxIcon.svg";
import jsIcon from "../assets/icons/jsIcon.svg";
import nodeIcon from "../assets/icons/nodeIcon.svg";
import expressIcon from "../assets/icons/expressIcon.svg";
import mysqlIcon from "../assets/icons/mysqlIcon.svg";
import sequelizeIcon from "../assets/icons/sequelizeIcon.svg";
import gitHubIcon from "../assets/icons/gitHubIcon.svg";
import Avatar1 from "../assets/img/585e4bcdcb11b227491c3396.png";
import Avatar2 from "../assets/img/585e4bc4cb11b227491c3395.png";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <div id="about_header">
        <div className="container mb-5 py-5">
          <div className="row">
            <div
              className="col-lg-6 offset-lg-3"
              transition-style="in:wipe:left"
            >
              <h1 className="text-centered pt-4">About this project</h1>
              <p className="text-justified pb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique qui modi in doloremque assumenda, optio iusto odio
                beatae recusandae explicabo unde laboriosam tempore culpa, id
                quis soluta pariatur neque facilis? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Similique qui modi in doloremque
                assumenda, optio iusto odio beatae recusandae explicabo unde
                laboriosam tempore culpa, id quis soluta pariatur neque facilis?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique qui modi in doloremque assumenda, optio iusto odio
                beatae recusandae explicabo unde laboriosam tempore culpa, id
                quis soluta pariatur neque facilis?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div id="technologies" className="mb-5">
          <h2 className="mb-3">Technologies</h2>
          <div className="d-flex justify-content-center">
            <ul className="d-flex flex-wrap justify-content-lg-between mx-4">
              <li className="me-3 me-lg-0 mb-3">
                <img src={reactIcon} alt="React Icon" />
                <span>React</span>
              </li>
              <li className="me-3 me-lg-0 mb-3">
                <img src={reduxIcon} alt="Redux Icon" />
                <span>Redux</span>
              </li>
              <li className="me-3 me-lg-0 mb-3">
                <img src={jsIcon} alt="JavaScript Icon" />
                <span>JavaScript</span>
              </li>
              <li className="me-3 me-lg-0 mb-3">
                <img src={nodeIcon} alt="Node.js Icon" />
                <span>Node.js</span>
              </li>
              <li className="me-3 me-lg-0 mb-3">
                <img src={expressIcon} alt="Express Icon" />
                <span>Express</span>
              </li>
              <li className="me-3 me-lg-0 mb-3">
                <img src={mysqlIcon} alt="MySQL Icon" />
                <span>mySQL</span>
              </li>
              <li className="me-3 me-lg-0 mb-3">
                <img src={sequelizeIcon} alt="Sequelize Icon" />
                <span>Sequelize</span>
              </li>
              <li className="me-3 me-lg-0 mb-3">
                <img src={gitHubIcon} alt="GitHub Icon" />
                <span>GitHub</span>
              </li>
            </ul>
          </div>
        </div>
        <div id="team" className="mb-5">
          <h2 className="mb-3">Team</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <img width={250} src={Avatar1} alt="" />
              <h6>Facundo Groso</h6>
              <Link>
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <img width={250} src={Avatar1} alt="" />
              <h6>Iván Paredes</h6>
              <Link>
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <img width={250} src={Avatar1} alt="" />
              <h6>Guzmán García</h6>
              <Link>
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <img width={240} src={Avatar2} alt="" />
              <h6>Valentina Le Rose</h6>
              <Link>
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
