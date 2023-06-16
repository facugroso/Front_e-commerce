import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
