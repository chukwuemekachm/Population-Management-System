import { GraphQLServer } from 'graphql-yoga';
import * as dotenv from 'dotenv';

import resolvers from './resolvers';

dotenv.config();
const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: ({ request }) => ({
    request,
  }),
});

server.start({
  port: PORT || 4000,
  endpoint: '/graphql',
  playground: '/playground',
  getEndpoint: true,
});
