import Query from '../index';

describe('Root Query', () => {
  test('Should return description text', () => {
    const result = Query.info();
    expect(result).toBeDefined();
    expect(typeof result).toBe('string');
  });
});
