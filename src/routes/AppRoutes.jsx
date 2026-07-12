import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from '../pages/Home.jsx';
import ProductDetails from "../pages/ProductDetails.jsx";
import SearchProducts from "../pages/SearchProducts.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products/:id" element={<ProductDetails/>} />
      <Route path="/search" element={<SearchProducts/>} />
    </Routes>
  );
}
export default AppRoutes;
