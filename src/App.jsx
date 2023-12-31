import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import "./App.css";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Err404 from "./pages/Err404";
import Category from "./pages/Category";
import CheckOut from "./pages/CheckOut";
import AllCategories from "./pages/AllCategories";
import Purchase from "./pages/Purchase";
import { ParallaxProvider } from "react-scroll-parallax";

import "bootstrap/dist/css/bootstrap.min.css";
import InfoUser from "./pages/InfoUser";
import AboutUsButton from "./components/AboutUSButton";

function App() {
  const location = useLocation();
  const hideComponents = ["/login", "/register"];
  const hideButton = ["/about-us"];
  const hideElements = !hideComponents.includes(location.pathname);
  const hideAboutBtn = !hideButton.includes(location.pathname);
  const user = useSelector((state) => state.user);
  return (
    <>
      <ParallaxProvider>
        {hideElements && <NavBar />}
        {hideElements && hideAboutBtn && <AboutUsButton />}
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products/:slug" element={<Product />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories/:slug" element={<Category />} />
          <Route
            path="/categories/all-categories"
            element={<AllCategories />}
          />
          <Route path="/user-info" element={<InfoUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route
            path="/checkout"
            element={
              user && user.token ? (
                <CheckOut />
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="*" element={<Err404 />} />
        </Routes>
        {hideElements && <Footer />}
      </ParallaxProvider>
    </>
  );
}

export default App;
