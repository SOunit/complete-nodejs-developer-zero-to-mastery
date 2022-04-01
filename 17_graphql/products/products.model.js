const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
  },
  {
    id: "bluejean",
    description: "Blue Jean",
    price: 55.55,
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  const filteredProducts = products.filter(
    (product) => min < product.price && product.price < max
  );

  console.log("filteredProducts", filteredProducts);

  return filteredProducts;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
};
