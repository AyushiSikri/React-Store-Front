import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../services/productApi";
import ProductCard from "../components/ProductCard";
import "./ProductDetails.css";
import ProductDetailSkeleton from "../components/LoadingSkeleton/ProductDetailSkeleton";
import ErrorState from "../components/ErrorState/ErrorState";

function ProductDetails() {
  const [productDetail, setProductDetail] = useState([]);
  const [inStock, setInStock] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  // console.log(id);

  async function fetchProductDetail(id) {
    try {
      setLoading(true);
      setError(null);
      const data = await getProductDetail(id);
      setProductDetail(data);
      checkInStock(data);
      setProductImages(data?.images);
      // console.log(data);
    } catch (error) {
      setError("Unable to load product.");
    } finally {
      setLoading(false);
    }
  }

  function checkInStock(product) {
    let stock = product?.stock;
    console.error(`sytock ${stock}`);
    if (!stock) {
      setInStock(`Out of Stock`);
    } else if (stock < 10) {
      setInStock(`Only ${stock} left!`);
    }
  }

  useEffect(() => {
    fetchProductDetail(id);
  }, []);

  if (error) {
    return (
      <>
        <Navbar />
        <ErrorState
          message={error}
          onRetry={() => {
            fetchProductDetail(id);
          }}
        />
      </>
    );
  }

  return (
    <>
      <Navbar />
      {loading ? (
        <ProductDetailSkeleton />
      ) : (
        <section className="product-detail-section">
          <section className="product-detail-inner-section">
            <img
              loading="lazy"
              className="product-detail-thumbnail"
              src={
                selectedImage == "" ? productDetail?.thumbnail : selectedImage
              }
            />

            <div className="product-detail-img-div">
              {productImages.map((item) => {
                return (
                  <img
                    loading="lazy"
                    className="product-detail-img"
                    onClick={() => setSelectedImage(item)}
                    src={item}
                  />
                );
              })}
            </div>
          </section>

          <section className="product-detail-section-para">
            <p className="product-detail-brand">
              {productDetail?.brand == null ? "MyStore" : productDetail?.brand}
            </p>
            <p className="product-detail-title">{productDetail?.title}</p>

            <p className="product-detail-category">
              #{productDetail?.category}
            </p>

            <p className="product-detail-description">
              {productDetail?.description}
            </p>

            <p className="product-detail-price">${productDetail?.price}</p>
            <p className="product-tax">(inclusive of all taxes)</p>

            <div className="product-detail-rating">
              <Rating
                name="product-rating"
                value={productDetail?.rating || 0}
                precision={0.1}
                readOnly
              />{" "}
              <span className="product-detail-rating-text">
                ({productDetail?.rating})
              </span>
            </div>

            {inStock != "" ? <p className="in-stock">{inStock}</p> : null}

            <button className="add-cart-btn">Add to Cart</button>
          </section>
        </section>
      )}
    </>
  );
}
export default ProductDetails;
