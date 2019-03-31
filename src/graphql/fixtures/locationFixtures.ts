import { Location } from '../types/types';
import users from './userFixtures';

const data: Location[] = [
  {
    id: 'u2m9IN89Unu9u9n9uY',
    locationName: 'Lagos',
    malePopulation: 2345,
    femalePopulation: 3235,
    totalPopulation: 2345 + 3235,
    parentLocation: null,
    subLocations: [],
    creator: users[0],
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  },
  {
    id: 'u2m2IN89Unu6u9n4uY',
    locationName: 'Enugu',
    malePopulation: 4245,
    femalePopulation: 7235,
    totalPopulation: 4245 + 7235,
    parentLocation: null,
    subLocations: [],
    creator: users[0],
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  },
  {
    id: 'u3m5IN89Unu5u5n5uY',
    locationName: 'Abuja',
    malePopulation: 8494,
    femalePopulation: 6474,
    totalPopulation: 8494 + 6474,
    parentLocation: null,
    subLocations: [],
    creator: users[0],
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  },
];

export default data;
