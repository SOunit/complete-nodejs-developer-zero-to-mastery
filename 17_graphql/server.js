const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));

const schema = makeExecutableSchema({
  typeDefs: [typesArray],
});

const root = {
  orders: require("./orders/orders.model"),
  products: require("./products/products.model"),
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
