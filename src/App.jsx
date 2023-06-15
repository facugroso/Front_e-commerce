import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Product from "./pages/Product";

import NavBar from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Home />} />

        <Route path="/navbar" element={<NavBar />} />
      </Routes>
    </>
  );
}

export default App;
