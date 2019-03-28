import { createTestClient } from 'apollo-server-testing';

import graphqlTestServer from '../../__mocks__/server.graphql';
import prismaTestMockClient from '../../__mocks__/prisma';
import { SIGNUP_MUTATION } from '../../constants';
import { userInputs } from '../../fixtures/userFixtures';

const { mutate } = createTestClient(graphqlTestServer);

describe('signup mutation', () => {
  beforeAll(async () => {
    await prismaTestMockClient.deleteManyUsers();
    await prismaTestMockClient.createUser(userInputs[1]);
  });
  afterAll(async () => {
    await prismaTestMockClient.deleteManyUsers();
  });

  test('should return created user profile', async () => {
    const payload = {
      variables: {
        user: userInputs[2],
      },
    };
    const { errors, data } = await mutate({
      mutation: SIGNUP_MUTATION,
      ...payload,
    });
    expect(errors).toBeUndefined();
    expect(data).toBeDefined();
    expect(data).toMatchSnapshot();
  });

  test('should return validation errors', async () => {
    const payload = {
      variables: {
        user: userInputs[0],
      },
    };
    const { errors, data } = await mutate({
      mutation: SIGNUP_MUTATION,
      ...payload,
    });
    expect(errors).toBeDefined();
    expect(data).toBeNull();
    expect(errors).toMatchSnapshot();
  });

  test('should return a user exist error', async () => {
    const payload = {
      variables: {
        user: userInputs[2],
      },
    };
    const { errors, data } = await mutate({
      mutation: SIGNUP_MUTATION,
      ...payload,
    });
    expect(errors).toBeDefined();
    expect(data).toBeNull();
    expect(errors).toMatchSnapshot();
  });
});
