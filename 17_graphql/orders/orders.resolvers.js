const orderModel = require("./orders.model");

module.exports = {
  Query: {
    orders: () => {
      console.log("Getting the orders...");
      return orderModel.getAllOrders();
    },
  },
};
