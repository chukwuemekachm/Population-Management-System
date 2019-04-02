import { isAuthenticated } from './rules';

const permissions = {
  Mutation: {
    createLocation: isAuthenticated,
  },
};

export default permissions;
