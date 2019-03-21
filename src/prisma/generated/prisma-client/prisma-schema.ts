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
    maleResidents: Int
    femaleResidents: Int
    totalResidents: Int
    parentLocationId: ID
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
    maleResidents: Int
    femaleResidents: Int
    totalResidents: Int
    parentLocationId: ID
    subLocations: LocationCreateManyInput
    creator: UserCreateOneWithoutLocationsInput!
  }

  input LocationCreateManyInput {
    create: [LocationCreateInput!]
    connect: [LocationWhereUniqueInput!]
  }

  input LocationCreateManyWithoutCreatorInput {
    create: [LocationCreateWithoutCreatorInput!]
    connect: [LocationWhereUniqueInput!]
  }

  input LocationCreateWithoutCreatorInput {
    name: String!
    maleResidents: Int
    femaleResidents: Int
    totalResidents: Int
    parentLocationId: ID
    subLocations: LocationCreateManyInput
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
    maleResidents_ASC
    maleResidents_DESC
    femaleResidents_ASC
    femaleResidents_DESC
    totalResidents_ASC
    totalResidents_DESC
    parentLocationId_ASC
    parentLocationId_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type LocationPreviousValues {
    id: ID!
    name: String!
    maleResidents: Int
    femaleResidents: Int
    totalResidents: Int
    parentLocationId: ID
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
    maleResidents: Int
    maleResidents_not: Int
    maleResidents_in: [Int!]
    maleResidents_not_in: [Int!]
    maleResidents_lt: Int
    maleResidents_lte: Int
    maleResidents_gt: Int
    maleResidents_gte: Int
    femaleResidents: Int
    femaleResidents_not: Int
    femaleResidents_in: [Int!]
    femaleResidents_not_in: [Int!]
    femaleResidents_lt: Int
    femaleResidents_lte: Int
    femaleResidents_gt: Int
    femaleResidents_gte: Int
    totalResidents: Int
    totalResidents_not: Int
    totalResidents_in: [Int!]
    totalResidents_not_in: [Int!]
    totalResidents_lt: Int
    totalResidents_lte: Int
    totalResidents_gt: Int
    totalResidents_gte: Int
    parentLocationId: ID
    parentLocationId_not: ID
    parentLocationId_in: [ID!]
    parentLocationId_not_in: [ID!]
    parentLocationId_lt: ID
    parentLocationId_lte: ID
    parentLocationId_gt: ID
    parentLocationId_gte: ID
    parentLocationId_contains: ID
    parentLocationId_not_contains: ID
    parentLocationId_starts_with: ID
    parentLocationId_not_starts_with: ID
    parentLocationId_ends_with: ID
    parentLocationId_not_ends_with: ID
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

  input LocationUpdateDataInput {
    name: String
    maleResidents: Int
    femaleResidents: Int
    totalResidents: Int
    parentLocationId: ID
    subLocations: LocationUpdateManyInput
    creator: UserUpdateOneRequiredWithoutLocationsInput
  }

  input LocationUpdateInput {
    name: String
    maleResidents: Int
    femaleResidents: Int
    totalResidents: Int
    parentLocationId: ID
    subLocations: LocationUpdateManyInput
    creator: UserUpdateOneRequiredWithoutLocationsInput
  }

  input LocationUpdateManyDataInput {
    name: String
    maleResidents: Int
    femaleResidents: Int
    totalResidents: Int
    parentLocationId: ID
  }

  input LocationUpdateManyInput {
    create: [LocationCreateInput!]
    update: [LocationUpdateWithWhereUniqueNestedInput!]
    upsert: [LocationUpsertWithWhereUniqueNestedInput!]
    delete: [LocationWhereUniqueInput!]
    connect: [LocationWhereUniqueInput!]
    disconnect: [LocationWhereUniqueInput!]
    deleteMany: [LocationScalarWhereInput!]
    updateMany: [LocationUpdateManyWithWhereNestedInput!]
  }

  input LocationUpdateManyMutationInput {
    name: String
    maleResidents: Int
    femaleResidents: Int
    totalResidents: Int
    parentLocationId: ID
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

  input LocationUpdateManyWithWhereNestedInput {
    where: LocationScalarWhereInput!
    data: LocationUpdateManyDataInput!
  }

  input LocationUpdateWithoutCreatorDataInput {
    name: String
    maleResidents: Int
    femaleResidents: Int
    totalResidents: Int
    parentLocationId: ID
    subLocations: LocationUpdateManyInput
  }

  input LocationUpdateWithWhereUniqueNestedInput {
    where: LocationWhereUniqueInput!
    data: LocationUpdateDataInput!
  }

  input LocationUpdateWithWhereUniqueWithoutCreatorInput {
    where: LocationWhereUniqueInput!
    data: LocationUpdateWithoutCreatorDataInput!
  }

  input LocationUpsertWithWhereUniqueNestedInput {
    where: LocationWhereUniqueInput!
    update: LocationUpdateDataInput!
    create: LocationCreateInput!
  }

  input LocationUpsertWithWhereUniqueWithoutCreatorInput {
    where: LocationWhereUniqueInput!
    update: LocationUpdateWithoutCreatorDataInput!
    create: LocationCreateWithoutCreatorInput!
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
    maleResidents: Int
    maleResidents_not: Int
    maleResidents_in: [Int!]
    maleResidents_not_in: [Int!]
    maleResidents_lt: Int
    maleResidents_lte: Int
    maleResidents_gt: Int
    maleResidents_gte: Int
    femaleResidents: Int
    femaleResidents_not: Int
    femaleResidents_in: [Int!]
    femaleResidents_not_in: [Int!]
    femaleResidents_lt: Int
    femaleResidents_lte: Int
    femaleResidents_gt: Int
    femaleResidents_gte: Int
    totalResidents: Int
    totalResidents_not: Int
    totalResidents_in: [Int!]
    totalResidents_not_in: [Int!]
    totalResidents_lt: Int
    totalResidents_lte: Int
    totalResidents_gt: Int
    totalResidents_gte: Int
    parentLocationId: ID
    parentLocationId_not: ID
    parentLocationId_in: [ID!]
    parentLocationId_not_in: [ID!]
    parentLocationId_lt: ID
    parentLocationId_lte: ID
    parentLocationId_gt: ID
    parentLocationId_gte: ID
    parentLocationId_contains: ID
    parentLocationId_not_contains: ID
    parentLocationId_starts_with: ID
    parentLocationId_not_starts_with: ID
    parentLocationId_ends_with: ID
    parentLocationId_not_ends_with: ID
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
    email: String
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
    email: String
    locations: LocationCreateManyWithoutCreatorInput
  }

  input UserCreateOneWithoutLocationsInput {
    create: UserCreateWithoutLocationsInput
    connect: UserWhereUniqueInput
  }

  input UserCreateWithoutLocationsInput {
    firstName: String!
    lastName: String
    email: String
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
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
  }

  type UserPreviousValues {
    id: ID!
    firstName: String!
    lastName: String
    email: String
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
    locations: LocationUpdateManyWithoutCreatorInput
  }

  input UserUpdateManyMutationInput {
    firstName: String
    lastName: String
    email: String
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
  }
`;
