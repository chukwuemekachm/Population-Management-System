import prismaTestMockClient from '../../__mocks__/prisma';
import { GET_LOCATION_QUERY } from '../../constants';
import { userInputs } from '../../fixtures/userFixtures';
import { constructGraphqlTestClient } from '../../utils/testClient';
import { User } from '../../types/types';
import { locationInputs } from '../../fixtures/locationFixtures';

let user: Partial<User>;
let locationId: string;

describe('get single location query', () => {
  beforeAll(async () => {
    const { mutate } = constructGraphqlTestClient();
    await prismaTestMockClient.deleteManyLocations();
    await prismaTestMockClient.deleteManyUsers();
    user = await prismaTestMockClient.createUser(userInputs[1]);
    ({ id: locationId } = await prismaTestMockClient.createLocation({
      locationName: locationInputs[0].locationName,
      femalePopulation: locationInputs[0].femalePopulation,
      malePopulation: locationInputs[0].malePopulation,
      creator: {
        connect: {
          id: user.id,
        },
      },
    }));
  });
  afterAll(async () => {
    await prismaTestMockClient.deleteManyLocations();
    await prismaTestMockClient.deleteManyUsers();
  });

  test('should return a single location matching the id on the platform', async () => {
    const { query } = constructGraphqlTestClient(user);
    const payload = {
      variables: {
        locationId,
      },
    };
    const { errors, data } = await query({
      mutation: GET_LOCATION_QUERY,
      ...payload,
    });
    expect(errors).toBeUndefined();
    expect(data).toBeDefined();
    expect(data).toMatchSnapshot();
  });

  test('should return a null when platform does not exist', async () => {
    const { query } = constructGraphqlTestClient(user);
    const payload = {
      variables: {
        locationId: 'jnsu9zi0o0jh89io0o0zmi8n89',
      },
    };
    const { errors } = await query({
      mutation: GET_LOCATION_QUERY,
      ...payload,
    });
    expect(errors).toBeDefined();
    expect(errors).toMatchSnapshot();
  });
});
