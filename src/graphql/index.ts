import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { applyMiddleware } from 'graphql-middleware';

import typeDefs from './schema';
import resolvers from './resolvers';
import { prisma } from './prisma/generated/prisma-client';
import middlewares from './middlewares';

const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production' ? true : false;
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const schemaWithMiddleware = applyMiddleware(schema, ...middlewares);

const graphqlServer = new ApolloServer({
  schema: schemaWithMiddleware,
  context: ({ req }) => ({
    request: req,
    prisma,
  }),
  debug: !isProduction,
  playground: true,
});

export default graphqlServer;
