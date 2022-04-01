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
  },
};
