const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue Jean",
    price: 55.55,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  const filteredProducts = products.filter(
    (product) => min < product.price && product.price < max
  );
  return filteredProducts;
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function addNewProduct(id, description, price) {
  const newProduct = { id, description, price, reviews: [] };
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex >= 0) {
    const newReview = { rating, comment };
    products[productIndex].reviews.push(newReview);
    return newReview;
  }
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
