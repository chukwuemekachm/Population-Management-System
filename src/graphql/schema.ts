import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar DateTime

  type Query {
    info: String!
  }

  type Mutation {
    signup(user: SignupInput): AuthResponse!
    login(user: LoginInput): AuthResponse!
  }

  type AuthResponse {
    token: String!
    user: User!
  }

  input SignupInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String
    email: String
    locations: [Location!]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Location {
    id: ID!
    locationName: String!
    malePopulation: Int!
    femalePopulation: Int!
    totalPopulation: Int!
    parentLocation: Location
    subLocations: [Location!]!
    creator: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`;

export default typeDefs;
