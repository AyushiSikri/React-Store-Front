import React, { useEffect, useState } from "react";
import CategorySidebar from "../components/CategorySidebar";
import "./Home.css";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ProductGrid from "../components/ProductGrid";
import { getProducts } from "../services/productApi";
import { getCategories, getSelectedCategory } from "../services/categoryApi";
import FeaturedProducts from "../components/FeaturedProducts";
import bannerImg from "../assets/banner_img.png";
import ProductGridSkeleton from "../components/ProductGridSkeleton";
import CategorySidebarSkeleton from "../components/CategorySidebarSkeleton";
import BannerSkeleton from "../components/BannerSkeleton";
import FeaturedProductsSkeleton from "../components/FeaturedProductsSkeleton";
import ErrorState from "../components/ErrorState";

function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingCategories, setCategoriesLoading] = useState(true);
  const [errorCategories, setErrorCategories] = useState(null);
  const [error, setError] = useState(null);

  async function fetchCategories() {
    try {
      setCategoriesLoading(true);
      setErrorCategories(null);
      const data = await getCategories();
      setCategories(data);
      console.log(data);
    } catch (error) {
      setErrorCategories("Unable to load categories.");
    } finally {
      setCategoriesLoading(false);
    }
  }

  async function fetchProducts() {
    try {
      setLoading(true);
      setError(null);
      const data = await getProducts();
      setProducts(data);
      setFeaturedProducts(data);
      console.log(data);
    } catch (error) {
      setError("Unable to load products.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCategoryChange() {
    try {
      setLoading(true);
      setError(null);
      const data = await getSelectedCategory(selectedCategory);
      setProducts(data);
      console.log("handleCategoryChange" + data);
    } catch (error) {
      setError("Unable to load products.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories(selectedCategory);
  }, []);

  useEffect(() => {
    if (selectedCategory == null || selectedCategory == "") {
      fetchProducts();
    } else {
      handleCategoryChange();
    }
  }, [selectedCategory]);

  if (error || errorCategories) {
  return (
    <>
      <Navbar />
      <ErrorState
        message={error || errorCategories}
        onRetry={() => {
          fetchProducts();
          fetchCategories();
        }}
      />
    </>
  );
}

  return (
    <>
      <Navbar />
      <main className="main-container ">
        {loading ? (
          <BannerSkeleton />
        ) : (
          <section className="banner-section">
            <img
              className="banner-img"
              src={bannerImg}
              alt="Summer Sale Banner"
            />

            <div className="banner-content">
              <h1>✨ Summer Sale</h1>
              <p>Up to 40% OFF</p>
              <p>Explore thousands of products</p>
            </div>
          </section>
        )}

        {loading ? (
          <FeaturedProductsSkeleton/>
        ) : (
          <FeaturedProducts products={featuredProducts} />
        )}

        <div className="layout-store">
          {loadingCategories ? (
            <CategorySidebarSkeleton />
          ) : (
            <CategorySidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectedCategory={setSelectedCategory}
            />
          )}

          {loading ? (
            <ProductGridSkeleton />
          ) : (
            <ProductGrid products={products} />
          )}
        </div>
      </main>
    </>
  );
}
export default Home;
