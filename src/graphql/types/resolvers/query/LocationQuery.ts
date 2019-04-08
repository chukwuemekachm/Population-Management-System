import { GraphQLResolveInfo } from 'graphql';

import { Context, Location } from '../../types';
import { LocationOrderByInput } from '../../../prisma/generated/prisma-client';

export interface LocationFilterInput {
  search?: string;
  orderBy?: LocationOrderByInput;
  offset?: number;
  limit?: number;
}

export interface ArgsGetLocations {
  filter: LocationFilterInput;
}

export type GetLocationsResolver = (
  parent: undefined,
  args: ArgsGetLocations,
  ctx: Context,
  info?: GraphQLResolveInfo | null,
) => Promise<Partial<Location>[]>;

interface LocationQuery {
  getLocations: GetLocationsResolver;
}

export default LocationQuery;
