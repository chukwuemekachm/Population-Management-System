import prismaTestMockClient from '../../__mocks__/prisma';
import { CREATE_LOCATION_MUTATION } from '../../constants';
import { User } from '../../types/types';
import { locationInputs } from '../../fixtures/locationFixtures';
import { userInputs } from '../../fixtures/userFixtures';
import { constructGraphqlTestClient } from '../../utils/testClient';

let user: Partial<User>;

describe('create location mutation', () => {
  beforeAll(async () => {
    await prismaTestMockClient.deleteManyUsers();
    user = await prismaTestMockClient.createUser(userInputs[1]);
  });
  afterAll(async () => {
    await prismaTestMockClient.deleteManyUsers();
  });

  test('should return newly created location', async () => {
    const { mutate } = constructGraphqlTestClient(user);
    const payload = {
      variables: {
        location: locationInputs[1],
      },
    };
    const { errors, data } = await mutate({
      mutation: CREATE_LOCATION_MUTATION,
      ...payload,
    });
    expect(errors).toBeUndefined();
    expect(data).toBeDefined();
    expect(data).toMatchSnapshot();
  });

  test('should return validation errors when inputs are not provided', async () => {
    const { mutate } = constructGraphqlTestClient(user);
    const payload = {
      variables: {
        location: locationInputs[0],
      },
    };
    const { errors, data } = await mutate({
      mutation: CREATE_LOCATION_MUTATION,
      ...payload,
    });
    expect(data).toBeNull();
    expect(errors).toBeDefined();
    expect(errors).toMatchSnapshot();
  });

  test('should return a location exists error', async () => {
    const { mutate } = constructGraphqlTestClient(user);
    const payload = {
      variables: {
        location: locationInputs[1],
      },
    };
    const { errors, data } = await mutate({
      mutation: CREATE_LOCATION_MUTATION,
      ...payload,
    });
    expect(data).toBeNull();
    expect(errors).toBeDefined();
    expect(errors).toMatchSnapshot();
  });

  test('should return an invalid parentId error', async () => {
    const { mutate } = constructGraphqlTestClient(user);
    const payload = {
      variables: {
        location: {
          ...locationInputs[2],
          parentLocationId: 'hncu4u58uxy8y89',
        },
      },
    };
    const { errors, data } = await mutate({
      mutation: CREATE_LOCATION_MUTATION,
      ...payload,
    });
    expect(data).toBeNull();
    expect(errors).toBeDefined();
    expect(errors).toMatchSnapshot();
  });
});
