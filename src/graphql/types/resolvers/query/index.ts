import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../../types';

export interface InfoInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ArgsInfo {}

export type InfoResolver = (
  parent: undefined,
  args: ArgsInfo,
  ctx: Context,
  info: GraphQLResolveInfo | {},
) => string | Promise<string>;

interface QueryResolvers {
  info: InfoResolver;
}

export default QueryResolvers;
