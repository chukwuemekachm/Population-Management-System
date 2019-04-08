import LocationQueryInterface, {
  GetLocationsResolver,
  ArgsGetLocations,
} from '../../types/resolvers/query/LocationQuery';
import { Context, Location } from '../../types/types';

class LocationQuery implements LocationQueryInterface {
  /**
   * @description Retrieves a list of available Locations on the platform
   * Returning available Locations
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {array}
   */
  getLocations: GetLocationsResolver = async (
    parent: undefined,
    { filter: locationFilterInput = {} }: ArgsGetLocations,
    { prisma }: Context,
  ): Promise<Partial<Location>[]> => {
    const { search, orderBy, offset, limit } = locationFilterInput;
    const where = { locationName_contains: search };

    return prisma.locations({
      where,
      orderBy,
      skip: offset,
      first: limit,
    });
  };
}

export default new LocationQuery();
