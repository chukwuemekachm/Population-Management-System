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
