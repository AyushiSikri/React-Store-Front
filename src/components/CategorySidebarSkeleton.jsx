import "./CategorySidebarSkeleton.css";

function CategorySidebarSkeleton() {
  return (
    <aside className="aside-category-skeleton">
      <div className="skeleton skeleton-heading"></div>

      <div className="category-outer-div">
        {Array.from({ length: 24 }).map((_, index) => (
          <div className="category-inner-div" key={index}>
            <div className="skeleton skeleton-checkbox"></div>
            <div className="skeleton skeleton-category-text"></div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default CategorySidebarSkeleton;