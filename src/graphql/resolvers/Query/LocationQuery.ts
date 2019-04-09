import LocationQueryInterface, {
  GetLocationsResolver,
  ArgsGetLocations,
  GetLocationResolver,
  ArgsGetLocation,
} from '../../types/resolvers/query/LocationQuery';
import { Context } from '../../types/types';
import NotFoundError from '../../errors/NotFoundError';

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
  ) => {
    const { search, orderBy, offset, limit } = locationFilterInput;
    const where = { locationName_contains: search };

    return prisma.locations({
      where,
      orderBy,
      skip: offset,
      first: limit,
    });
  };

  /**
   * @description Retrieves a single Location on the platform
   * Returning the location or null if it does not exist
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {array}
   */
  getLocation: GetLocationResolver = async (
    parent: undefined,
    { locationId }: ArgsGetLocation,
    { prisma }: Context,
  ) => {
    const location = await prisma.location({ id: <string>locationId });

    if (location) return location;
    throw new NotFoundError(`Location with id: ${locationId} does not exist`);
  };
}

export default new LocationQuery();
