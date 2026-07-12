import "./FeaturedProducts.css";
import FeaturedCard from "./FeaturedCard";
import { useMemo } from "react";

function FeaturedProducts({ products }) {

  // const featuredProducts = products.slice(8, 20);
  const featuredProducts = useMemo(() => products.slice(8, 20), [products]);

  return (
    <section className="featured-container">
      <p className="heading-featured-product">Featured Products</p>
      <div className="featured-product-grid">
        {featuredProducts.map((item) => {
          return <FeaturedCard key={item.id} product={item} />;
        })}
      </div>
    </section>
  );
}
export default FeaturedProducts;
