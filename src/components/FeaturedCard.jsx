import "./FeaturedCard.css";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function FeaturedCard({ product }) {
  const navigate = useNavigate();
  // console.log(product)
  return (
    <div
      onClick={() => {
        navigate(`/products/${product.id}`);
      }}
      className="featured-card"
    >
      <div className="featured-img-div">
        <img className="featured-img-product" 
        loading="lazy"
        alt={product.title}
        src={product?.thumbnail} />
      </div>
      <div className="featured-text-container">
        <p className="featured-text-brand">
            {product?.title == null ? "MyStore" : product.title }
            </p>
            <p className="featured-text-price">${product?.price}</p>
      </div>
      {/* <p className="featured-text-title">{product?.title}</p> */}
      {/* <p className="featured-text-price">${product?.price}</p> */}
    </div>
  );
}
export default React.memo(FeaturedCard);
