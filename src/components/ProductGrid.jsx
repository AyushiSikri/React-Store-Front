import ProductCard from "./ProductCard";
import "./ProductGrid.css";
function ProductGrid({ products }) {
  // console.log(products);
  return (
    <section className="section-product">
      <p className="heading-product">Products</p>
      <div className="product-grid">
        {products.map((item) => {
          return(
          <ProductCard key={item.id} product={item} />);
        })}
      </div>
    </section>
  );
}
export default ProductGrid;
