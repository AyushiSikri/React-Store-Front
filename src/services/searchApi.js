const BASE_URL = "https://dummyjson.com";

export async function getSearchedProducts(searchText) {
  const response = await fetch(`${BASE_URL}/products/search?q=${encodeURIComponent(searchText)}`);

  if (!response.ok) {
    throw new Error("Failed to fetch searched items");
  }

  const data = await response.json();
  return data.products;
}