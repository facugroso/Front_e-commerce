import { Link } from "react-router-dom";
import { useState } from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavBar.css";
import SearchIcon from "../assets/icons/SearchIcon";
import BagIcon from "../assets/icons/BagIcon";
import Logo from "../assets/icons/Logo";
import ArrowIcon from "../assets/icons/ArrowIcon";

function NavBar() {
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };
  return (
    <>
      <div id="announcement_bar">
        <Container>
          <Row>
            <Col className="d-flex justify-content-end">
              <Link to="#">
                <span>Uruguay</span>
                <span>EN</span>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar id="navbar" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Shop by Category"
                id="collasible-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                renderMenuOnMount={true}
              >
                <div id="category_dropdown">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <Link to="/">
                            <span>
                              <span className="category_icon">
                                <img src="https://row.hyperx.com/cdn/shop/files/icon_headset.svg?v=16078609973338147091" />
                              </span>
                              Gaming Headsets
                            </span>
                            <span className="category_arrow">
                              <ArrowIcon />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span>
                              <span className="category_icon">
                                <img src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/icon_keyboard.svg?v=12269105994828386092" />
                              </span>
                              Gaming Keyboards
                            </span>
                            <span className="category_arrow">
                              {" "}
                              <ArrowIcon />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span>
                              <span className="category_icon">
                                <img src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/icon_pad.svg?v=1172903177911721644" />
                              </span>
                              Mouse Pads
                            </span>
                            <span className="category_arrow">
                              {" "}
                              <ArrowIcon />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span>
                              <span className="category_icon">
                                <img src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/icon_controllers.svg?v=12197799583205238205" />
                              </span>
                              Gaming Controllers
                            </span>
                            <span className="category_arrow">
                              {" "}
                              <ArrowIcon />
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        {" "}
                        <li>
                          <Link to="/">
                            <span>
                              <span className="category_icon">
                                <img src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/icon_monitors.svg?v=3743156472970974482" />
                              </span>
                              Gaming Monitors
                            </span>
                            <span className="category_arrow">
                              {" "}
                              <ArrowIcon />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span>
                              <span className="category_icon">
                                <img src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/icon_microphone.svg?v=9939938472022010292" />
                              </span>
                              Microphones
                            </span>
                            <span className="category_arrow">
                              {" "}
                              <ArrowIcon />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span>
                              <span className="category_icon">
                                <img src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/icon_mice.svg?v=5195900237465443670" />
                              </span>
                              Gaming Mice
                            </span>
                            <span className="category_arrow">
                              {" "}
                              <ArrowIcon />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span>
                              <span className="category_icon">
                                <img src="https://cdn.shopify.com/s/files/1/0561/8345/5901/files/icon_categories.svg?v=10674281858682028349" />
                              </span>
                              All Categories
                            </span>
                            <span className="category_arrow">
                              {" "}
                              <ArrowIcon />
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </NavDropdown>
              <Nav.Link href="#">CLOUD III</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <SearchIcon />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#">
                <BagIcon />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
