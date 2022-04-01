const orders = [
  {
    date: "2005-05-03",
    subtotal: 90.22,
    items: [
      {
        product: { id: "redshoe", description: "old red shoe", price: 45.11 },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
