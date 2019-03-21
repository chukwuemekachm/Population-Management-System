import { Request } from 'express-serve-static-core';

import { Prisma } from '../prisma/generated/prisma-client';

export type DateTime = string;
export type ID = string;

export interface Context {
  request: Request;
  prisma: Prisma;
}

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
  name: string;
  maleResidents: number;
  femaleResidents: number;
  totalResidents: number;
  parentLocationId: ID;
  subLocations: Location[];
  creator: User;
  createdAt: DateTime;
  updatedAt: DateTime;
}
