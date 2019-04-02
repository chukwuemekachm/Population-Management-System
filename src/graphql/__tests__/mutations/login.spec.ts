import prismaTestMockClient from '../../__mocks__/prisma';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../../constants';
import { userInputs } from '../../fixtures/userFixtures';
import { constructGraphqlTestClient } from '../../utils/testClient';

const { mutate } = constructGraphqlTestClient();

describe('login mutation', () => {
  beforeAll(async () => {
    await prismaTestMockClient.deleteManyLocations();
    await prismaTestMockClient.deleteManyUsers();
    const payload = {
      variables: {
        user: userInputs[1],
      },
    };
    await mutate({
      mutation: SIGNUP_MUTATION,
      ...payload,
    });
  });
  afterAll(async () => {
    await prismaTestMockClient.deleteManyLocations();
    await prismaTestMockClient.deleteManyUsers();
  });

  test('should return authenticated user profile when credentials are valid', async () => {
    const payload = {
      variables: {
        user: {
          email: userInputs[1].email,
          password: userInputs[1].password,
        },
      },
    };
    const { errors, data } = await mutate({
      mutation: LOGIN_MUTATION,
      ...payload,
    });
    expect(errors).toBeUndefined();
    expect(data).toBeDefined();
    expect(data).toMatchSnapshot();
  });

  test('should return validation errors when inputs are not provided', async () => {
    const payload = {
      variables: {},
    };
    const { errors, data } = await mutate({
      mutation: LOGIN_MUTATION,
      ...payload,
    });
    expect(errors).toBeDefined();
    expect(data).toBeNull();
    expect(errors).toMatchSnapshot();
  });

  test('should return an unauthenticated error response when the user does not exist', async () => {
    const payload = {
      variables: {
        user: {
          email: userInputs[2].email,
          password: userInputs[2].password,
        },
      },
    };
    const { errors, data } = await mutate({
      mutation: LOGIN_MUTATION,
      ...payload,
    });
    expect(errors).toBeDefined();
    expect(data).toBeNull();
    expect(errors).toMatchSnapshot();
  });

  test('should return an unauthenticated error response when the password does not match', async () => {
    const payload = {
      variables: {
        user: {
          email: userInputs[1].email,
          password: 'Mismatch',
        },
      },
    };
    const { errors, data } = await mutate({
      mutation: LOGIN_MUTATION,
      ...payload,
    });
    expect(errors).toBeDefined();
    expect(data).toBeNull();
    expect(errors).toMatchSnapshot();
  });
});
