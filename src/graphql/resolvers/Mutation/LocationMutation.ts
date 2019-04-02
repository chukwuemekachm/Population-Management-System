import LocationMutationInterface, {
  CreateLocationResolver,
  ArgsLocation,
} from '../../types/resolvers/mutation/LocationMutation';
import { Context, Location, User } from '../../types/types';
import { LocationValidator } from '../../validators/LocationValidator';
import validateRequest from '../../validators';
import DuplicateInputError from '../../errors/DuplicateInputError';
import { UserInputError } from 'apollo-server-core';

class LocationMutation implements LocationMutationInterface {
  /**
   * @description Creates a new location on the platform
   * Returning the newly created Location
   *
   * @param {object} parent The previous GraphQL object
   * @param {object} args The request payload
   * @param {object} context The request context
   *
   * @returns {object}
   */
  createLocation: CreateLocationResolver = async (
    parent: undefined,
    { location: locationInput }: ArgsLocation,
    { prisma, user, request }: Context,
  ): Promise<Partial<Location>> => {
    try {
      await validateRequest(LocationValidator, locationInput);
      const {
        locationName,
        malePopulation,
        femalePopulation,
        parentLocationId,
      } = locationInput;
      const { id } = <User>user;

      const location = await prisma.$exists.location({ locationName });
      if (location) {
        throw new DuplicateInputError(
          `A location with the name: ${locationName} already exists`,
        );
      }
      const parentLocation = await prisma.$exists.location({
        id: parentLocationId,
      });
      if (parentLocationId && !parentLocation) {
        throw new UserInputError(
          `The parent location with id: ${parentLocationId} does not exist`,
        );
      }

      const newLocation = await prisma.createLocation({
        locationName,
        malePopulation,
        femalePopulation,
        creator: {
          connect: {
            id,
          },
        },
        parentLocation: parentLocationId
          ? {
              connect: {
                id: parentLocationId,
              },
            }
          : undefined,
      });
      return newLocation;
    } catch (err) {
      throw err;
    }
  };
}

export default new LocationMutation();
