import AuthResponseResolver from '../AuthResponse';
import { authResponse } from '../../fixtures/userFixtures';

describe('AuthResponseResolver Resolver', () => {
  test('should resolve and return the token', () => {
    const token = AuthResponseResolver.token(authResponse);
    expect(token).toEqual(authResponse.token);
  });

  test('should resolve and return the user profile', () => {
    const user = AuthResponseResolver.user(authResponse);
    expect(user).toEqual(authResponse.user);
  });
});
