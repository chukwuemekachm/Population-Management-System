import { Location, Context } from '../types/types';

const location = {
  id: ({ id }: Location) => id,
  locationName: ({ locationName }: Location) => locationName,
  malePopulation: ({ malePopulation }: Location) => malePopulation,
  femalePopulation: ({ femalePopulation }: Location) => femalePopulation,
  parentLocation: ({ id }: Location, args: {}, { prisma }: Context) =>
    prisma.location({ id }).parentLocation(),
  totalPopulation: ({ malePopulation, femalePopulation }: Location) =>
    malePopulation + femalePopulation,
  subLocations: ({ id }: Location, args: {}, { prisma }: Context) =>
    prisma.location({ id }).subLocations(),
  creator: ({ id }: Location, args: {}, { prisma }: Context) =>
    prisma.location({ id }).creator(),
  createdAt: ({ createdAt }: Location) => createdAt,
  updatedAt: ({ updatedAt }: Location) => updatedAt,
};

export default location;
