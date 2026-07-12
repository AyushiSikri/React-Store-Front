const BASE_URL = "https://dummyjson.com";

export async function getCategories() {
  const response = await fetch(`${BASE_URL}/products/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await response.json();
  return data;
}

export async function getSelectedCategory(category) {
  const response = await fetch(`${BASE_URL}/products/category/${category}`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await response.json();
  return data.products;
}