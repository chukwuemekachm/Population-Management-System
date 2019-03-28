import { ApolloServer } from 'apollo-server-express';

import typeDefs from '../schema';
import resolvers from '../resolvers';
import prismaTestMockClient from './prisma';

const graphqlTestServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    request: req,
    prisma: prismaTestMockClient,
  }),
});

export default graphqlTestServer;
