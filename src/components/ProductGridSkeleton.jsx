import ProductCardSkeleton from "./ProductCardSkeleton";
import './ProductGridSkeleton.css'
export default function ProductGridSkeleton() {
  return (
     <section className="skeleton-section-product">
      <p className="skeleton-heading-product"></p>

      <div className="product-grid">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
