import prismaTestMockClient from '../../__mocks__/prisma';
import { GET_LOCATIONS_QUERY, CREATE_LOCATION_MUTATION } from '../../constants';
import { userInputs } from '../../fixtures/userFixtures';
import { constructGraphqlTestClient } from '../../utils/testClient';
import { User } from '../../types/types';
import { locationInputs } from '../../fixtures/locationFixtures';

let user: Partial<User>;

describe('get locations query', () => {
  beforeAll(async () => {
    const { mutate } = constructGraphqlTestClient();
    await prismaTestMockClient.deleteManyLocations();
    await prismaTestMockClient.deleteManyUsers();
    user = await prismaTestMockClient.createUser(userInputs[1]);
    const payload = {
      variables: {
        location: locationInputs[1],
      },
    };
    await mutate({
      mutation: CREATE_LOCATION_MUTATION,
      ...payload,
    });
  });
  afterAll(async () => {
    await prismaTestMockClient.deleteManyLocations();
    await prismaTestMockClient.deleteManyUsers();
  });

  test('should return locations on the platform', async () => {
    const { query } = constructGraphqlTestClient(user);
    const { errors, data } = await query({
      mutation: GET_LOCATIONS_QUERY,
    });
    expect(errors).toBeUndefined();
    expect(data).toBeDefined();
    expect(data).toMatchSnapshot();
  });

  test('should filter locations when filter values are provided', async () => {
    const { query } = constructGraphqlTestClient(user);
    const payload = {
      variables: {
        filter: {
          search: 'u',
          offset: 0,
          limit: 3,
          orderBy: 'locationName_ASC',
        },
      },
    };
    const { errors, data } = await query({
      mutation: GET_LOCATIONS_QUERY,
      ...payload,
    });
    expect(errors).toBeUndefined();
    expect(data).toBeDefined();
    expect(data).toMatchSnapshot();
  });

  test('should return errors when an invalid filter is supplied', async () => {
    const { query } = constructGraphqlTestClient(user);
    const payload = {
      variables: {
        filter: {
          search: 'u',
          offset: 0,
          limit: 3,
          orderBy: 'locationName_BAD',
        },
      },
    };
    const { errors, data } = await query({
      mutation: GET_LOCATIONS_QUERY,
      ...payload,
    });
    expect(errors).toBeDefined();
    expect(data).toBeUndefined();
    expect(errors).toMatchSnapshot();
  });
});
