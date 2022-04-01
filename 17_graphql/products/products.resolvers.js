const productsModel = require("./products.model");

module.exports = {
  Query: {
    // parent is rootValue
    // args for filtering data
    // context for shared data
    // info current state of operation

    products: async (parent, args, context, info) => {
      console.log("Getting the products...");
      const products = await Promise.resolve(productsModel.getAllProducts());
      return products;
    },

    productsByPrice: (_, args) => {
      const { min, max } = args;
      return productsModel.getProductsByPrice(min, max);
    },

    product: (_, args) => {
      const { id } = args;
      return productsModel.getProductById(id);
    },
  },

  Mutation: {
    addNewProduct: (_, args) => {
      const { id, description, price } = args;
      return productsModel.addNewProduct(id, description, price);
    },
  },
};
