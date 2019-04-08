import { gql } from 'apollo-server-express';

export const GET_LOCATIONS_QUERY = gql`
  query getLocations($filter: LocationFilterInput) {
    getLocations(filter: $filter) {
      locationName
    }
  }
`;
