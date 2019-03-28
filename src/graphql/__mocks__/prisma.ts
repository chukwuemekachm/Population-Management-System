import { makePrismaClientClass } from 'prisma-client-lib';
import {
  ClientConstructor,
  Prisma,
  models,
} from '../prisma/generated/prisma-client';
import { typeDefs } from '../prisma/generated/prisma-client/prisma-schema';

const prismaTestMockClient = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `${process.env['PRISMA_API_URL_TEST']}`,
});

export default new prismaTestMockClient();
