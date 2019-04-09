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

export interface ArgsGetLocation {
  locationId: String;
}

export type GetLocationsResolver = (
  parent: undefined,
  args: ArgsGetLocations,
  ctx: Context,
  info?: GraphQLResolveInfo | null,
) => Promise<Partial<Location>[]>;

export type GetLocationResolver = (
  parent: undefined,
  args: ArgsGetLocation,
  ctx: Context,
  info?: GraphQLResolveInfo | null,
) => Promise<Partial<Location>> | null;

interface LocationQuery {
  getLocations: GetLocationsResolver;
  getLocation: GetLocationResolver;
}

export default LocationQuery;
