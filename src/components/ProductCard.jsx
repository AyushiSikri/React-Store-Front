import "./ProductCard.css";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  console.log(product)
  return (
    <div
      onClick={() => {
        navigate(`/products/${product.id}`);
      }}
      className="product-card"
    >
      <div className="img-div">
        <img className="img-product" 
        alt={product.title}
        src={product?.thumbnail} />
      </div>
      <p className="text-brand">{product?.brand == null ? "MyStore" : product.brand }</p>
      <p className="text-title">{product?.title}</p>
      <p className="text-price">${product?.price}</p>
    </div>
  );
}
export default React.memo(ProductCard);
