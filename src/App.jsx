import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Err404 from "./pages/Err404";
import Category from "./pages/Category";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products/:slug" element={<Product />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories/:slug" element={<Category />} />
        <Route path="*" element={<Err404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
