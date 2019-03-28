import UserResolver from '../User';
import users from '../../fixtures/userFixtures';

describe('UserResolver', () => {
  test('should have the appropriate field resolver functions', () => {
    expect(typeof UserResolver.id).toEqual('function');
    expect(typeof UserResolver.email).toEqual('function');
    expect(typeof UserResolver.firstName).toEqual('function');
    expect(typeof UserResolver.lastName).toEqual('function');
    expect(typeof UserResolver.locations).toEqual('function');
    expect(typeof UserResolver.createdAt).toEqual('function');
    expect(typeof UserResolver.updatedAt).toEqual('function');
  });

  test('should resolve the fields and return their values', () => {
    expect(UserResolver.id(users[0])).toEqual(users[0].id);
    expect(UserResolver.email(users[0])).toEqual(users[0].email);
    expect(UserResolver.firstName(users[0])).toEqual(users[0].firstName);
    expect(UserResolver.lastName(users[0])).toEqual(users[0].lastName);
    expect(UserResolver.locations(users[0])).toEqual(users[0].locations);
    expect(UserResolver.createdAt(users[0])).toEqual(users[0].createdAt);
    expect(UserResolver.updatedAt(users[0])).toEqual(users[0].updatedAt);
  });
});
