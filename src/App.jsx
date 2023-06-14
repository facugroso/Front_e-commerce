import { Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
