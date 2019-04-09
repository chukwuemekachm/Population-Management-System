import QueryResolvers from '../../types/resolvers/query';
import LocationQuery from './LocationQuery';
import {
  ArgsGetLocations,
  ArgsGetLocation,
} from '../../types/resolvers/query/LocationQuery';
import { Context } from '../../types/types';

const query: QueryResolvers = {
  info: () =>
    'Population Management System is an API that contains a list of locations and the total number of residents in each location broken down by gender',
  getLocations: (parent: undefined, args: ArgsGetLocations, context: Context) =>
    LocationQuery.getLocations(parent, args, context),
  getLocation: (parent: undefined, args: ArgsGetLocation, context: Context) =>
    LocationQuery.getLocation(parent, args, context),
};

export default query;
