import AuthMutation from '../AuthMutation';
import prismaTestMockClient from '../../../__mocks__/prisma';
import context from '../../../__mocks__/context';
import users, { userInputs } from '../../../fixtures/userFixtures';
import { validationMessage } from '../../../validators';

describe('AuthMution', () => {
  beforeEach(async () => {
    await prismaTestMockClient.deleteManyLocations();
    await prismaTestMockClient.deleteManyUsers();
    await prismaTestMockClient.createUser(userInputs[1]);
  });
  afterAll(async () => {
    await prismaTestMockClient.deleteManyLocations();
    await prismaTestMockClient.deleteManyUsers();
  });

  describe('Signup', () => {
    test('should create a user account when valid information is provided', async () => {
      const result = await AuthMutation.signup(
        undefined,
        { user: userInputs[2] },
        context,
        undefined,
      );
      expect(result.token).toBeDefined();
      expect(result.user).toBeDefined();
      expect(result.user).toHaveProperty('id');
      expect(result.user).toHaveProperty('email');
      expect(result.user).toHaveProperty('firstName');
      expect(result.user).toHaveProperty('lastName');
      expect(result.user).toHaveProperty('updatedAt');
      expect(result.user).toHaveProperty('createdAt');
      expect(result.user.email).toEqual(userInputs[2].email);
      expect(result.user.firstName).toEqual(userInputs[2].firstName);
      expect(result.user.lastName).toEqual(userInputs[2].lastName);
    });

    test('should throw validation errors if the inputs are not valid', async () => {
      try {
        await AuthMutation.signup(
          undefined,
          { user: userInputs[0] },
          context,
          undefined,
        );
      } catch ({ message }) {
        expect(message).toEqual(validationMessage);
      }
    });
  });

  describe('Login', () => {
    test('should authenticate a user when valid information is provided', async () => {
      await AuthMutation.signup(
        undefined,
        { user: userInputs[2] },
        context,
        undefined,
      );

      const args = {
        user: {
          email: userInputs[2].email,
          password: userInputs[2].password,
        },
      };
      const result = await AuthMutation.login(
        undefined,
        args,
        context,
        undefined,
      );
      expect(result.token).toBeDefined();
      expect(result.user).toBeDefined();
      expect(result.user).toHaveProperty('id');
      expect(result.user).toHaveProperty('email');
      expect(result.user).toHaveProperty('firstName');
      expect(result.user).toHaveProperty('lastName');
      expect(result.user).toHaveProperty('updatedAt');
      expect(result.user).toHaveProperty('createdAt');
      expect(result.user.email).toEqual(userInputs[2].email);
      expect(result.user.firstName).toEqual(userInputs[2].firstName);
      expect(result.user.lastName).toEqual(userInputs[2].lastName);
    });

    test('should throw validation errors if the inputs are not valid', async () => {
      try {
        await AuthMutation.login(
          undefined,
          { user: userInputs[0] },
          context,
          undefined,
        );
      } catch ({ message }) {
        expect(message).toEqual(validationMessage);
      }
    });
  });
});
