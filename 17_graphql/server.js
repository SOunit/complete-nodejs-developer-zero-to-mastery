const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product {
        id: ID!
        description: String!
        price: Float!
        reviews: [Review]
    }

    type Review {
        rating: Int!
        comment: String
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
`);

const root = {
  products: [
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
  ],
  orders: [
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
  ],
};

const app = express();

// setup graphql endpoint for node / express
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log("Running GraphQL server...");
});
