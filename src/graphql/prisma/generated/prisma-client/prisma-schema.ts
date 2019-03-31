export const typeDefs = /* GraphQL */ `
  type AggregateLocation {
    count: Int!
  }

  type AggregateUser {
    count: Int!
  }

  type BatchPayload {
    count: Long!
  }

  scalar DateTime

  type Location {
    id: ID!
    name: String!
    malePopulation: Int
    femalePopulation: Int
    parentLocation: Location
    subLocations(
      where: LocationWhereInput
      orderBy: LocationOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Location!]
    creator: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type LocationConnection {
    pageInfo: PageInfo!
    edges: [LocationEdge]!
    aggregate: AggregateLocation!
  }

  input LocationCreateInput {
    name: String!
    malePopulation: Int
    femalePopulation: Int
    parentLocation: LocationCreateOneWithoutParentLocationInput
    subLocations: LocationCreateManyWithoutSubLocationsInput
    creator: UserCreateOneWithoutLocationsInput!
  }

  input LocationCreateManyWithoutCreatorInput {
    create: [LocationCreateWithoutCreatorInput!]
    connect: [LocationWhereUniqueInput!]
  }

  input LocationCreateManyWithoutSubLocationsInput {
    create: [LocationCreateWithoutSubLocationsInput!]
    connect: [LocationWhereUniqueInput!]
  }

  input LocationCreateOneWithoutParentLocationInput {
    create: LocationCreateWithoutParentLocationInput
    connect: LocationWhereUniqueInput
  }

  input LocationCreateWithoutCreatorInput {
    name: String!
    malePopulation: Int
    femalePopulation: Int
    parentLocation: LocationCreateOneWithoutParentLocationInput
    subLocations: LocationCreateManyWithoutSubLocationsInput
  }

  input LocationCreateWithoutParentLocationInput {
    name: String!
    malePopulation: Int
    femalePopulation: Int
    subLocations: LocationCreateManyWithoutSubLocationsInput
    creator: UserCreateOneWithoutLocationsInput!
  }

  input LocationCreateWithoutSubLocationsInput {
    name: String!
    malePopulation: Int
    femalePopulation: Int
    parentLocation: LocationCreateOneWithoutParentLocationInput
    creator: UserCreateOneWithoutLocationsInput!
  }

  type LocationEdge {
    node: Location!
    cursor: String!
  }

  enum LocationOrderByInput {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    malePopulation_ASC
    malePopulation_DESC
    femalePopulation_ASC
    femalePopulation_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type LocationPreviousValues {
    id: ID!
    name: String!
    malePopulation: Int
    femalePopulation: Int
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  input LocationScalarWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    malePopulation: Int
    malePopulation_not: Int
    malePopulation_in: [Int!]
    malePopulation_not_in: [Int!]
    malePopulation_lt: Int
    malePopulation_lte: Int
    malePopulation_gt: Int
    malePopulation_gte: Int
    femalePopulation: Int
    femalePopulation_not: Int
    femalePopulation_in: [Int!]
    femalePopulation_not_in: [Int!]
    femalePopulation_lt: Int
    femalePopulation_lte: Int
    femalePopulation_gt: Int
    femalePopulation_gte: Int
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    AND: [LocationScalarWhereInput!]
    OR: [LocationScalarWhereInput!]
    NOT: [LocationScalarWhereInput!]
  }

  type LocationSubscriptionPayload {
    mutation: MutationType!
    node: Location
    updatedFields: [String!]
    previousValues: LocationPreviousValues
  }

  input LocationSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: LocationWhereInput
    AND: [LocationSubscriptionWhereInput!]
    OR: [LocationSubscriptionWhereInput!]
    NOT: [LocationSubscriptionWhereInput!]
  }

  input LocationUpdateInput {
    name: String
    malePopulation: Int
    femalePopulation: Int
    parentLocation: LocationUpdateOneWithoutParentLocationInput
    subLocations: LocationUpdateManyWithoutSubLocationsInput
    creator: UserUpdateOneRequiredWithoutLocationsInput
  }

  input LocationUpdateManyDataInput {
    name: String
    malePopulation: Int
    femalePopulation: Int
  }

  input LocationUpdateManyMutationInput {
    name: String
    malePopulation: Int
    femalePopulation: Int
  }

  input LocationUpdateManyWithoutCreatorInput {
    create: [LocationCreateWithoutCreatorInput!]
    delete: [LocationWhereUniqueInput!]
    connect: [LocationWhereUniqueInput!]
    disconnect: [LocationWhereUniqueInput!]
    update: [LocationUpdateWithWhereUniqueWithoutCreatorInput!]
    upsert: [LocationUpsertWithWhereUniqueWithoutCreatorInput!]
    deleteMany: [LocationScalarWhereInput!]
    updateMany: [LocationUpdateManyWithWhereNestedInput!]
  }

  input LocationUpdateManyWithoutSubLocationsInput {
    create: [LocationCreateWithoutSubLocationsInput!]
    delete: [LocationWhereUniqueInput!]
    connect: [LocationWhereUniqueInput!]
    disconnect: [LocationWhereUniqueInput!]
    update: [LocationUpdateWithWhereUniqueWithoutSubLocationsInput!]
    upsert: [LocationUpsertWithWhereUniqueWithoutSubLocationsInput!]
    deleteMany: [LocationScalarWhereInput!]
    updateMany: [LocationUpdateManyWithWhereNestedInput!]
  }

  input LocationUpdateManyWithWhereNestedInput {
    where: LocationScalarWhereInput!
    data: LocationUpdateManyDataInput!
  }

  input LocationUpdateOneWithoutParentLocationInput {
    create: LocationCreateWithoutParentLocationInput
    update: LocationUpdateWithoutParentLocationDataInput
    upsert: LocationUpsertWithoutParentLocationInput
    delete: Boolean
    disconnect: Boolean
    connect: LocationWhereUniqueInput
  }

  input LocationUpdateWithoutCreatorDataInput {
    name: String
    malePopulation: Int
    femalePopulation: Int
    parentLocation: LocationUpdateOneWithoutParentLocationInput
    subLocations: LocationUpdateManyWithoutSubLocationsInput
  }

  input LocationUpdateWithoutParentLocationDataInput {
    name: String
    malePopulation: Int
    femalePopulation: Int
    subLocations: LocationUpdateManyWithoutSubLocationsInput
    creator: UserUpdateOneRequiredWithoutLocationsInput
  }

  input LocationUpdateWithoutSubLocationsDataInput {
    name: String
    malePopulation: Int
    femalePopulation: Int
    parentLocation: LocationUpdateOneWithoutParentLocationInput
    creator: UserUpdateOneRequiredWithoutLocationsInput
  }

  input LocationUpdateWithWhereUniqueWithoutCreatorInput {
    where: LocationWhereUniqueInput!
    data: LocationUpdateWithoutCreatorDataInput!
  }

  input LocationUpdateWithWhereUniqueWithoutSubLocationsInput {
    where: LocationWhereUniqueInput!
    data: LocationUpdateWithoutSubLocationsDataInput!
  }

  input LocationUpsertWithoutParentLocationInput {
    update: LocationUpdateWithoutParentLocationDataInput!
    create: LocationCreateWithoutParentLocationInput!
  }

  input LocationUpsertWithWhereUniqueWithoutCreatorInput {
    where: LocationWhereUniqueInput!
    update: LocationUpdateWithoutCreatorDataInput!
    create: LocationCreateWithoutCreatorInput!
  }

  input LocationUpsertWithWhereUniqueWithoutSubLocationsInput {
    where: LocationWhereUniqueInput!
    update: LocationUpdateWithoutSubLocationsDataInput!
    create: LocationCreateWithoutSubLocationsInput!
  }

  input LocationWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    name: String
    name_not: String
    name_in: [String!]
    name_not_in: [String!]
    name_lt: String
    name_lte: String
    name_gt: String
    name_gte: String
    name_contains: String
    name_not_contains: String
    name_starts_with: String
    name_not_starts_with: String
    name_ends_with: String
    name_not_ends_with: String
    malePopulation: Int
    malePopulation_not: Int
    malePopulation_in: [Int!]
    malePopulation_not_in: [Int!]
    malePopulation_lt: Int
    malePopulation_lte: Int
    malePopulation_gt: Int
    malePopulation_gte: Int
    femalePopulation: Int
    femalePopulation_not: Int
    femalePopulation_in: [Int!]
    femalePopulation_not_in: [Int!]
    femalePopulation_lt: Int
    femalePopulation_lte: Int
    femalePopulation_gt: Int
    femalePopulation_gte: Int
    parentLocation: LocationWhereInput
    subLocations_every: LocationWhereInput
    subLocations_some: LocationWhereInput
    subLocations_none: LocationWhereInput
    creator: UserWhereInput
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    AND: [LocationWhereInput!]
    OR: [LocationWhereInput!]
    NOT: [LocationWhereInput!]
  }

  input LocationWhereUniqueInput {
    id: ID
  }

  scalar Long

  type Mutation {
    createLocation(data: LocationCreateInput!): Location!
    updateLocation(
      data: LocationUpdateInput!
      where: LocationWhereUniqueInput!
    ): Location
    updateManyLocations(
      data: LocationUpdateManyMutationInput!
      where: LocationWhereInput
    ): BatchPayload!
    upsertLocation(
      where: LocationWhereUniqueInput!
      create: LocationCreateInput!
      update: LocationUpdateInput!
    ): Location!
    deleteLocation(where: LocationWhereUniqueInput!): Location
    deleteManyLocations(where: LocationWhereInput): BatchPayload!
    createUser(data: UserCreateInput!): User!
    updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
    updateManyUsers(
      data: UserUpdateManyMutationInput!
      where: UserWhereInput
    ): BatchPayload!
    upsertUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User!
    deleteUser(where: UserWhereUniqueInput!): User
    deleteManyUsers(where: UserWhereInput): BatchPayload!
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }

  interface Node {
    id: ID!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type Query {
    location(where: LocationWhereUniqueInput!): Location
    locations(
      where: LocationWhereInput
      orderBy: LocationOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Location]!
    locationsConnection(
      where: LocationWhereInput
      orderBy: LocationOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): LocationConnection!
    user(where: UserWhereUniqueInput!): User
    users(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [User]!
    usersConnection(
      where: UserWhereInput
      orderBy: UserOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): UserConnection!
    node(id: ID!): Node
  }

  type Subscription {
    location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
    user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String
    email: String!
    password: String!
    locations(
      where: LocationWhereInput
      orderBy: LocationOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Location!]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type UserConnection {
    pageInfo: PageInfo!
    edges: [UserEdge]!
    aggregate: AggregateUser!
  }

  input UserCreateInput {
    firstName: String!
    lastName: String
    email: String!
    password: String!
    locations: LocationCreateManyWithoutCreatorInput
  }

  input UserCreateOneWithoutLocationsInput {
    create: UserCreateWithoutLocationsInput
    connect: UserWhereUniqueInput
  }

  input UserCreateWithoutLocationsInput {
    firstName: String!
    lastName: String
    email: String!
    password: String!
  }

  type UserEdge {
    node: User!
    cursor: String!
  }

  enum UserOrderByInput {
    id_ASC
    id_DESC
    firstName_ASC
    firstName_DESC
    lastName_ASC
    lastName_DESC
    email_ASC
    email_DESC
    password_ASC
    password_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type UserPreviousValues {
    id: ID!
    firstName: String!
    lastName: String
    email: String!
    password: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type UserSubscriptionPayload {
    mutation: MutationType!
    node: User
    updatedFields: [String!]
    previousValues: UserPreviousValues
  }

  input UserSubscriptionWhereInput {
    mutation_in: [MutationType!]
    updatedFields_contains: String
    updatedFields_contains_every: [String!]
    updatedFields_contains_some: [String!]
    node: UserWhereInput
    AND: [UserSubscriptionWhereInput!]
    OR: [UserSubscriptionWhereInput!]
    NOT: [UserSubscriptionWhereInput!]
  }

  input UserUpdateInput {
    firstName: String
    lastName: String
    email: String
    password: String
    locations: LocationUpdateManyWithoutCreatorInput
  }

  input UserUpdateManyMutationInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }

  input UserUpdateOneRequiredWithoutLocationsInput {
    create: UserCreateWithoutLocationsInput
    update: UserUpdateWithoutLocationsDataInput
    upsert: UserUpsertWithoutLocationsInput
    connect: UserWhereUniqueInput
  }

  input UserUpdateWithoutLocationsDataInput {
    firstName: String
    lastName: String
    email: String
    password: String
  }

  input UserUpsertWithoutLocationsInput {
    update: UserUpdateWithoutLocationsDataInput!
    create: UserCreateWithoutLocationsInput!
  }

  input UserWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    firstName: String
    firstName_not: String
    firstName_in: [String!]
    firstName_not_in: [String!]
    firstName_lt: String
    firstName_lte: String
    firstName_gt: String
    firstName_gte: String
    firstName_contains: String
    firstName_not_contains: String
    firstName_starts_with: String
    firstName_not_starts_with: String
    firstName_ends_with: String
    firstName_not_ends_with: String
    lastName: String
    lastName_not: String
    lastName_in: [String!]
    lastName_not_in: [String!]
    lastName_lt: String
    lastName_lte: String
    lastName_gt: String
    lastName_gte: String
    lastName_contains: String
    lastName_not_contains: String
    lastName_starts_with: String
    lastName_not_starts_with: String
    lastName_ends_with: String
    lastName_not_ends_with: String
    email: String
    email_not: String
    email_in: [String!]
    email_not_in: [String!]
    email_lt: String
    email_lte: String
    email_gt: String
    email_gte: String
    email_contains: String
    email_not_contains: String
    email_starts_with: String
    email_not_starts_with: String
    email_ends_with: String
    email_not_ends_with: String
    password: String
    password_not: String
    password_in: [String!]
    password_not_in: [String!]
    password_lt: String
    password_lte: String
    password_gt: String
    password_gte: String
    password_contains: String
    password_not_contains: String
    password_starts_with: String
    password_not_starts_with: String
    password_ends_with: String
    password_not_ends_with: String
    locations_every: LocationWhereInput
    locations_some: LocationWhereInput
    locations_none: LocationWhereInput
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
  }

  input UserWhereUniqueInput {
    id: ID
    email: String
  }
`;
