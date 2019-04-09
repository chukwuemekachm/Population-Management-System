import { GraphQLResolveInfo } from 'graphql';

import { Context } from '../../types';
import { GetLocationsResolver, GetLocationResolver } from './LocationQuery';

export interface InfoInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ArgsInfo {}

export type InfoResolver = (
  parent?: undefined,
  args?: ArgsInfo,
  ctx?: Context,
  info?: GraphQLResolveInfo | {},
) => string | Promise<string>;

interface QueryResolvers {
  info: InfoResolver;
  getLocations: GetLocationsResolver;
  getLocation: GetLocationResolver;
  [key: string]: any;
}

export default QueryResolvers;
