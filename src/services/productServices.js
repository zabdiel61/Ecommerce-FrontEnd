export const getProducts = async () => {
  const response = await fetch('http://localhost:8080/product/products');
  const products = await response.json();

  return products;
};
