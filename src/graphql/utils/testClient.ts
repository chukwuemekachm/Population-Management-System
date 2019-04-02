import { ApolloServer } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';

import typeDefs from '../schema';
import resolvers from '../resolvers';
import prismaTestMockClient from '../__mocks__/prisma';
import { User } from '../types/types';

export const constructGraphqlTestClient = (user?: Partial<User>) => {
  const testServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      request: req,
      prisma: prismaTestMockClient,
      user,
    }),
  });

  return createTestClient(testServer);
};
