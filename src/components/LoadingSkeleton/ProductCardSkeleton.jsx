import './ProductCardSkeleton.css'

function ProductCardSkeleton() {
  return (
    <div className="product-card">
      <div className="skeleton-image"></div>

      <div className="skeleton-title"></div>

      <div className="skeleton-price"></div>
    </div>
  );
}

export default ProductCardSkeleton;