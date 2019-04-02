import { gql } from 'apollo-server-express';

export const SIGNUP_MUTATION = gql`
  mutation signup($user: SignupInput) {
    signup(user: $user) {
      user {
        email
        firstName
        lastName
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($user: LoginInput) {
    login(user: $user) {
      user {
        firstName
        lastName
      }
    }
  }
`;

export const CREATE_LOCATION_MUTATION = gql`
  mutation login($location: LocationInput) {
    createLocation(location: $location) {
      locationName
      malePopulation
      femalePopulation
    }
  }
`;
