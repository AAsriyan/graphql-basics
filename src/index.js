const { GraphQLServer, PubSub } = require('graphql-yoga');
const resolvers = require('./resolvers/index.resolvers');

const db = require('./db');

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    db,
    pubsub
  }
});

server.start(() => {
  console.log("The server is up!")
})