import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar DateTime

  type Query {
    info: String!
  }

  type Mutation {
    signup(user: SignupInput): AuthResponse!
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
    name: String!
    maleResidents: Int!
    femaleResidents: Int!
    totalResidents: Int!
    parentLocationId: ID
    subLocations: [Location!]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
`;

export default typeDefs;
