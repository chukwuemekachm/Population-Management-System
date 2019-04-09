import { gql } from 'apollo-server-express';

export const GET_LOCATIONS_QUERY = gql`
  query getLocations($filter: LocationFilterInput) {
    getLocations(filter: $filter) {
      locationName
    }
  }
`;

export const GET_LOCATION_QUERY = gql`
  query getLocation($locationId: String!) {
    getLocation(locationId: $locationId) {
      locationName
    }
  }
`;
