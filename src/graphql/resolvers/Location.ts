import { Location } from '../types/types';

const location = {
  id: ({ id }: Location) => id,
  name: ({ name }: Location) => name,
  maleResidents: ({ maleResidents }: Location) => maleResidents,
  femaleResidents: ({ femaleResidents }: Location) => femaleResidents,
  totalResidents: ({ totalResidents }: Location) => totalResidents,
  parentLocationId: ({ parentLocationId }: Location) => parentLocationId,
  subLocations: ({ subLocations }: Location) => subLocations,
  creator: ({ creator }: Location) => creator,
  createdAt: ({ createdAt }: Location) => createdAt,
  updatedAt: ({ updatedAt }: Location) => updatedAt,
};

export default location;
