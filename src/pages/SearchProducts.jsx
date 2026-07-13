import { useEffect, useState } from "react";
import { getSearchedProducts } from "../services/searchApi";
import "./SearchProducts.css";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ErrorState from "../components/ErrorState/ErrorState";
import ProductCardSkeleton from "../components/LoadingSkeleton/ProductCardSkeleton";


function SearchProducts() {
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("q") || "";
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchSearchedProducts(searchText) {
    try {
      setLoading(true);
      setError(null);
      const data = await getSearchedProducts(searchText);
      setSearchedProducts(data);
      // console.log(data);
    } catch (error) {
      setError("Unable to fetch searched items.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!searchText.trim()) {
        setSearchedProducts([]);
        return;
      }
      fetchSearchedProducts(searchText);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchText]);

  if (error) {
    return (
      <>
        <Navbar />
        <ErrorState
          message={error}
          onRetry={() => {
            fetchSearchedProducts(searchText);
          }}
        />
      </>
    );
  }

  return (
    <section>
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "15px",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          className="search-input"
          value={searchText}
          placeholder="Search products..."
          aria-label="Search products"
          onChange={(val) => {
            const value = val.target.value;

            if (value.trim()) {
              setSearchParams({ q: value }, { replace: true });
            } else {
              setSearchParams({}, { replace: true });
            }
          }}
        />
      </div>

      <div className="searched-product-grid">
        {loading ? (
           Array.from({ length: 12 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))
        ) : (
          searchedProducts?.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })
        )}
      </div>
    </section>
  );
}
export default SearchProducts;
