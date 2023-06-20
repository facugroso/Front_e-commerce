import { Link } from "react-router-dom";
import Logo from "../assets/icons/logofooter.svg";
import "./Login.css";

function Login() {
  const isLoginPage = location.pathname === "/login";
  return (
    <div id="login_box" className="bg-dark">
      <img src={Logo} className="d-block pt-3" alt="Logo" />
      {isLoginPage ? (
        <div className="p-3 shadow-lg rounded">
          <div>
            <h2 className="text-white">Sign In</h2>
          </div>

          <form className="mt-4">
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-sm bg-light mb-2"
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-sm bg-light"
                placeholder="Password"
              />
            </div>

            <div className="mt-4 mb-3 text-center">
              <button
                className="btn btn-sm btn-light col"
                style={{ width: "40%" }}
              >
                Login
              </button>
            </div>

            <div className="text-center mt-2">
              <Link to="#" className="text-danger">
                Forgot Password?
              </Link>
            </div>

            <div className="mt-5">
              <p className="text-white text-center">
                Don't have an account?
                <Link to="/register" className="text-danger ms-1">
                  Click here to register
                </Link>
              </p>
            </div>
          </form>
        </div>
      ) : (
        <div className="p-3 shadow-lg rounded">
          <div>
            <h2 className="text-white">Sign Up</h2>
          </div>

          <form className="mt-4">
            <div className="form-group">
              <input
                name="firstname"
                type="text"
                className="form-control form-control-sm bg-light mb-2"
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <input
                name="lastname"
                type="text"
                className="form-control form-control-sm bg-light mb-2"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                className="form-control form-control-sm bg-light mb-2"
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                name="password"
                type="password"
                className="form-control form-control-sm bg-light mb-2"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                name="phone"
                type="tel"
                className="form-control form-control-sm bg-light"
                placeholder="Phone Number"
              />
            </div>
            <div className="mt-4 mb-3 text-center">
              <button
                className="btn btn-sm btn-light col"
                style={{ width: "40%" }}
              >
                Register
              </button>
            </div>

            <div className="text-center mt-2">
              <Link to="#" className="text-danger">
                Forgot Password?
              </Link>
            </div>

            <div className="mt-5">
              <p className="text-white text-center">
                Already have an account?
                <Link to="/login" className="text-danger ms-1">
                  Click here to login
                </Link>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
