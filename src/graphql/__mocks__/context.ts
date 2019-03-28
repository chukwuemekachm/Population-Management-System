import { Context } from '../types/types';
import prismaTestMockClient from './prisma';

const context: Context = {
  prisma: prismaTestMockClient,
  request: {},
};

export default context;
