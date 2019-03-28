import { ApolloServer } from 'apollo-server-express';

import typeDefs from './schema';
import resolvers from './resolvers';
import { prisma } from './prisma/generated/prisma-client';

const { NODE_ENV, PORT = 3000 } = process.env;
const isProduction = NODE_ENV === 'production' ? true : false;

const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    request: req,
    prisma,
  }),
  introspection: !isProduction,
  debug: !isProduction,
});

export default graphqlServer;
