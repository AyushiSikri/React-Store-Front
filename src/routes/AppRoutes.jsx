import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from '../pages/Home.jsx';
import ProductDetails from "../pages/ProductDetails.jsx";
import SearchProducts from "../pages/SearchProducts.jsx";
import ErrorState from "../components/ErrorState/ErrorState.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products/:id" element={<ProductDetails/>} />
      <Route path="/search" element={<SearchProducts/>} />
      <Route path="*" element={<ErrorState/>} />
    </Routes>
  );
}
export default AppRoutes;
