import LocationResolver from '../Location';
import locations from '../../fixtures/locationFixtures';

describe('Location', () => {
  test('should have the appropriate field resolver functions', () => {
    expect(typeof LocationResolver.id).toEqual('function');
    expect(typeof LocationResolver.femalePopulation).toEqual('function');
    expect(typeof LocationResolver.malePopulation).toEqual('function');
    expect(typeof LocationResolver.totalPopulation).toEqual('function');
    expect(typeof LocationResolver.subLocations).toEqual('function');
    expect(typeof LocationResolver.creator).toEqual('function');
    expect(typeof LocationResolver.parentLocation).toEqual('function');
    expect(typeof LocationResolver.createdAt).toEqual('function');
    expect(typeof LocationResolver.updatedAt).toEqual('function');
  });

  test('should resolve the fields and return their values', () => {
    expect(LocationResolver.id(locations[0])).toEqual(locations[0].id);
    expect(LocationResolver.locationName(locations[0])).toEqual(
      locations[0].locationName,
    );
    expect(LocationResolver.malePopulation(locations[0])).toEqual(
      locations[0].malePopulation,
    );
    expect(LocationResolver.femalePopulation(locations[0])).toEqual(
      locations[0].femalePopulation,
    );
    expect(LocationResolver.createdAt(locations[0])).toEqual(
      locations[0].createdAt,
    );
    expect(LocationResolver.updatedAt(locations[0])).toEqual(
      locations[0].updatedAt,
    );
  });
});
