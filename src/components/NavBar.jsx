import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavBar.css";
import SearchIcon from "../assets/icons/SearchIcon";
import BagIcon from "../assets/icons/BagIcon";
import UserInfo from "../assets/icons/UserInfo";
import Logo from "../assets/icons/Logo";
import ArrowIcon from "../assets/icons/ArrowIcon";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user);
  const showDropdown = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };
  async function searchBar() {
    toast.warn("This feature is still under developement", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div id="announcement_bar">
        <Container>
          <Row>
            <Col className="d-flex justify-content-end">
              {!user ? (
                <>
                  <Link to="/login">
                    <span>Login</span>
                  </Link>
                  <Link to="/register">
                    <span>Register</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link>
                    <span onClick={handleLogout}>Log out</span>
                  </Link>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar id="navbar" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/" className="order-1 order-lg-0 mx-auto">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="order-0 order-lg-1"
          />
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
                          <Link to="/categories/gaming-headsets">
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
                          <Link to="/categories/gaming-keyboards">
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
                          <Link to="/categories/mouse-pads">
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
                          <Link to="/categories/gaming-controllers">
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
                          <Link to="/categories/gaming-monitors">
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
                          <Link to="/categories/microphone">
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
                          <Link to="/categories/gaming-mice">
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
                          <Link to="/categories/all-categories">
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
              <Nav.Link href="/products/hyperx-cloud-iii-gaming-headset">
                CLOUD III
              </Nav.Link>
              <Nav.Link href="/about-us">About this project</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link href="#" className="d-none d-lg-flex" onClick={searchBar}>
              <SearchIcon />
            </Nav.Link>
            <Nav.Link className="position-relative" eventKey={2}>
              <BagIcon />
            </Nav.Link>

            {user && (
              <Nav.Link href="/user-info" className="d-none d-lg-flex">
                <UserInfo />
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
