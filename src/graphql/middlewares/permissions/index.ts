import { isAuthenticated } from './rules';

const permissions = {
  Mutation: {
    createLocation: isAuthenticated,
  },
  Query: {
    getLocations: isAuthenticated,
    getLocation: isAuthenticated,
  },
};

export default permissions;
