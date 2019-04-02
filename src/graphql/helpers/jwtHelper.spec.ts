import { generateToken, decodeToken } from './jwtHelper';
import users from '../fixtures/userFixtures';
import context from '../__mocks__/context';

let token = generateToken(users[0]);
const request = {
  get: jest.fn().mockReturnValue(token),
};

describe('jwt helper', () => {
  test('should decode token when it is valid', () => {
    context.request = request;
    const result = decodeToken(context);
    expect(result).toMatchObject(users[0]);
  });

  test('should return false when token is invalid', () => {
    context.request = {
      get: jest.fn(),
    };
    const result = decodeToken(context);
    expect(result).toBe(false);
  });
});
