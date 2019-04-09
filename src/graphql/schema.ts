import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar DateTime

  type Query {
    info: String!
    getLocations(filter: LocationFilterInput): [Location!]!
    getLocation(locationId: String!): Location
  }

  type Mutation {
    signup(user: SignupInput): AuthResponse!
    login(user: LoginInput): AuthResponse!
    createLocation(location: LocationInput): Location!
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

  input LocationInput {
    locationName: String!
    malePopulation: Int!
    femalePopulation: Int!
    parentLocationId: String
  }

  input LocationFilterInput {
    search: String
    orderBy: LocationOrderBy
    offset: Int
    limit: Int
  }

  enum LocationOrderBy {
    locationName_ASC
    locationName_DESC
    malePopulation_ASC
    malePopulation_DESC
    femalePopulation_ASC
    femalePopulation_DESC
    createdAt_ASC
    createdAt_DESC
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
