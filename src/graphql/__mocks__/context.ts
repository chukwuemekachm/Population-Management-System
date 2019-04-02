import { Context } from '../types/types';
import prismaTestMockClient from './prisma';

const context: Context = {
  prisma: prismaTestMockClient,
  request: { get: jest.fn().mockResolvedValue('yokj') },
};

export default context;
