import FeaturedCardSkeleton from "./FeaturedCardSkeleton";
import "./FeaturedProducts.css";

function FeaturedProductsSkeleton() {
  return (
    <section className="featured-container">
      <div
        className="skeleton"
        style={{
          width: "220px",
          height: "32px",
          marginLeft: "45px",
          marginBottom: "20px",
        }}
      />

      <div className="featured-product-grid">
        {Array.from({ length: 6 }).map((_, index) => (
          <FeaturedCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProductsSkeleton;