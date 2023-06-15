import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  ListGroup,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavBar.css";
import SearchIcon from "../assets/icons/SearchIcon";
import BagIcon from "../assets/icons/BagIcon";
import Logo from "../assets/icons/Logo";

function NavBar() {
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
                            <span className="category_arrow"> ⇒</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span>
                              <span className="category_icon">
                                <img src="https://row.hyperx.com/cdn/shop/files/icon_headset.svg?v=16078609973338147091" />
                              </span>
                              Placeholder
                            </span>
                            <span className="category_arrow"> ⇒</span>
                          </Link>
                          <li>
                            <Link to="/">
                              <span>
                                <span className="category_icon">
                                  <img src="https://row.hyperx.com/cdn/shop/files/icon_headset.svg?v=16078609973338147091" />
                                </span>
                                Placeholder
                              </span>
                              <span className="category_arrow"> ⇒</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <span>
                                <span className="category_icon">
                                  <img src="https://row.hyperx.com/cdn/shop/files/icon_headset.svg?v=16078609973338147091" />
                                </span>
                                Placeholder
                              </span>
                              <span className="category_arrow"> ⇒</span>
                            </Link>
                          </li>
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
                                <img src="https://row.hyperx.com/cdn/shop/files/icon_headset.svg?v=16078609973338147091" />
                              </span>
                              PlaceholderS
                            </span>
                            <span className="category_arrow"> ⇒</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <span>
                              <span className="category_icon">
                                <img src="https://row.hyperx.com/cdn/shop/files/icon_headset.svg?v=16078609973338147091" />
                              </span>
                              Placeholder
                            </span>
                            <span className="category_arrow"> ⇒</span>
                          </Link>
                          <li>
                            <Link to="/">
                              <span>
                                <span className="category_icon">
                                  <img src="https://row.hyperx.com/cdn/shop/files/icon_headset.svg?v=16078609973338147091" />
                                </span>
                                Placeholder
                              </span>
                              <span className="category_arrow"> ⇒</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <span>
                                <span className="category_icon">
                                  <img src="https://row.hyperx.com/cdn/shop/files/icon_headset.svg?v=16078609973338147091" />
                                </span>
                                Placeholder
                              </span>
                              <span className="category_arrow"> ⇒</span>
                            </Link>
                          </li>
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
