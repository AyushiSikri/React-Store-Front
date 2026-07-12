import React from "react";
import "./CategorySidebar.css";
function CategorySidebar({ categories, selectedCategory, onSelectedCategory }) {
  const categoriesList = categories;

  return (
    <aside className="aside-category">
      <p className="heading-category">Categories</p>
      <div className="category-outer-div">
        {categoriesList.map((category) => {
          return (
            <div className="category-inner-div" key={category.slug}>
              <input
                type="checkbox"
                name="category"
                checked={selectedCategory === category.slug}
                onChange={() => {
                  if (selectedCategory === category.slug) {
                    onSelectedCategory(null);
                  } else {
                    onSelectedCategory(category.slug);
                  }
                  // onSelectedCategory(category.slug);
                }}
                id={category.slug}
                className="category-input"
              />
              <label htmlFor={category.slug} className="category-label">
                {category.name}
              </label>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
export default CategorySidebar;
