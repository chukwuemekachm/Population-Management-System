import { Location } from '../types/types';
import users from './userFixtures';

const data: Location[] = [
  {
    id: 'u2m9IN89Unu9u9n9uY',
    name: 'Lagos',
    maleResidents: 2345,
    femaleResidents: 3235,
    totalResidents: 3235 + 2345,
    parentLocationId: null,
    subLocations: [],
    creator: users[0],
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  },
  {
    id: 'u2m2IN89Unu6u9n4uY',
    name: 'Enugu',
    maleResidents: 2342,
    femaleResidents: 2235,
    totalResidents: 2235 + 2342,
    parentLocationId: null,
    subLocations: [],
    creator: users[0],
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  },
  {
    id: 'u3m5IN89Unu5u5n5uY',
    name: 'Abuja',
    maleResidents: 8345,
    femaleResidents: 5235,
    totalResidents: 5235 + 8345,
    parentLocationId: null,
    subLocations: [],
    creator: users[0],
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  },
];

export default data;
