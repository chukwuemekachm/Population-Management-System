import { Request } from 'express-serve-static-core';
import { GraphQLResolveInfo } from 'graphql';

import { Prisma } from '../prisma/generated/prisma-client';

// Data Types
export type DateTime = string;
export type ID = string;
export declare type ResolverFn = <T>(
  parent?: T,
  args?: T,
  context?: T,
  info?: GraphQLResolveInfo,
) => AsyncIterator<T>;

// Resolver Types
export type AuthResponseResolver = (parent: AuthResponse) => AuthResponse;
export type UserResolver = (parent: User) => User;
export type LocationResolver = (parent: Location) => Location;

// Common Types
export interface Context {
  request: Request | { get: () => string };
  prisma: Prisma;
  user?: Partial<User>;
}

export interface AuthResponse {
  token: string;
  user: Partial<User>;
}

// Model Types
export interface User {
  id: ID;
  firstName: string;
  lastName: string;
  email: string;
  locations: Location[];
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface Location {
  id: ID;
  locationName: string;
  malePopulation: number;
  femalePopulation: number;
  totalPopulation: number;
  parentLocation: Location | null;
  subLocations: Location[];
  creator: User | null;
  createdAt: DateTime;
  updatedAt: DateTime;
}
