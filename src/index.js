const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const schema = require('./schema');

const app = express();
const server = new ApolloServer(schema);
const options = { port: 5000 };

server.applyMiddleware({ app });
app.listen(options, () => {
  // eslint-disable-next-line
  console.log(`Server ready. Go to ${server.graphqlPath}`);
});
