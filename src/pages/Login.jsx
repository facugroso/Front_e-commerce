import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/icons/logofooter.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import axios from "axios";

import { useState } from "react";
import { setToken } from "../redux/userSlice";

import { useDispatch } from "react-redux";

function Login() {
  const [firstnameValue, setFirstname] = useState("");
  const [lastnameValue, setLastname] = useState("");
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [phoneValue, setPhone] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === "/login";

  async function handleLogin(event) {
    event.preventDefault();

    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/tokenUser`,
      data: {
        email: emailValue,
        password: passwordValue,
      },
    });

    const token = response.data.token;
    if (token) {
      dispatch(setToken(response.data));
      navigate("/");
    } else {
      navigate("/login");
    }
  }

  async function handleSignup(event) {
    event.preventDefault();

    const userData = {
      firstname: firstnameValue,
      lastname: lastnameValue,
      email: emailValue,
      password: passwordValue,
      phone: phoneValue,
    };

    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/users`,
      data: userData,
    });

    await handleLogin(event);
  }

  async function passwordReset() {
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
      <div id="login_box" className="bg-dark">
        <img src={Logo} className="d-block pt-3" alt="Logo" />
        {isLoginPage ? (
          <div className="p-3 shadow-lg rounded">
            <div>
              <h2 className="text-white">Sign In</h2>
            </div>

            <form
              className="mt-4"
              action="/login"
              method="POST"
              onSubmit={handleLogin}
            >
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className="form-control form-control-sm bg-light mb-2"
                  placeholder="Email"
                  value={emailValue}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  name="password"
                  type="password"
                  className="form-control form-control-sm bg-light"
                  placeholder="Password"
                  value={passwordValue}
                  onChange={(event) => setPassword(event.target.value)}
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
                <Link to="#" className="text-danger" onClick={passwordReset}>
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

            <form className="mt-4" method="POST" onSubmit={handleSignup}>
              <div className="form-group">
                <input
                  name="firstname"
                  type="text"
                  className="form-control form-control-sm bg-light mb-2"
                  placeholder="First Name"
                  value={firstnameValue}
                  onChange={(event) => setFirstname(event.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  name="lastname"
                  type="text"
                  className="form-control form-control-sm bg-light mb-2"
                  placeholder="Last Name"
                  value={lastnameValue}
                  onChange={(event) => setLastname(event.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className="form-control form-control-sm bg-light mb-2"
                  placeholder="Email"
                  value={emailValue}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  name="password"
                  type="password"
                  className="form-control form-control-sm bg-light mb-2"
                  placeholder="Password"
                  value={passwordValue}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  name="phone"
                  type="tel"
                  className="form-control form-control-sm bg-light"
                  placeholder="Phone Number"
                  value={phoneValue}
                  onChange={(event) => setPhone(event.target.value)}
                  required
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
      <div
        id="credentials"
        className="bg-dark text-white p-4 shadow-sm"
        transition-style="in:square:bottom-left"
      >
        <h5>Credentials</h5>
        <span className="d-block">Email: usertest@email.com </span>
        <span className="d-block">Password: 1234</span>
      </div>
    </>
  );
}

export default Login;
