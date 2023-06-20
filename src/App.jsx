import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Err404 from "./pages/Err404";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const hideSidebarAndNavBar =
    window.location.pathname === "/login" ||
    window.location.pathname === "/register";
  return (
    <>
      {!hideSidebarAndNavBar && <NavBar />}
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products/:slug" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
      {!hideSidebarAndNavBar && <Footer />}
    </>
  );
}

export default App;
