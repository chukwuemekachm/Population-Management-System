import { GraphQLResolveInfo } from 'graphql';
import { Location, Context } from '../../types';

export interface LocationInput {
  locationName: string;
  malePopulation: number;
  femalePopulation: number;
  parentLocationId: string;
}

export interface ArgsLocation {
  location: LocationInput;
}

export type CreateLocationResolver = (
  parent: undefined,
  args: ArgsLocation,
  ctx: Context,
  info?: GraphQLResolveInfo | null,
) => Partial<Location> | Promise<Partial<Location>>;

interface LocationMutation {
  createLocation: CreateLocationResolver;
}

export default LocationMutation;
