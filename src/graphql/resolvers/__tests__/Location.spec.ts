import LocationResolver from '../Location';
import locations from '../../fixtures/locationFixtures';

describe('Location', () => {
  test('should have the appropriate field resolver functions', () => {
    expect(typeof LocationResolver.id).toEqual('function');
    expect(typeof LocationResolver.femaleResidents).toEqual('function');
    expect(typeof LocationResolver.maleResidents).toEqual('function');
    expect(typeof LocationResolver.totalResidents).toEqual('function');
    expect(typeof LocationResolver.subLocations).toEqual('function');
    expect(typeof LocationResolver.creator).toEqual('function');
    expect(typeof LocationResolver.parentLocationId).toEqual('function');
    expect(typeof LocationResolver.createdAt).toEqual('function');
    expect(typeof LocationResolver.updatedAt).toEqual('function');
  });

  test('should resolve the fields and return their values', () => {
    expect(LocationResolver.id(locations[0])).toEqual(locations[0].id);
    expect(LocationResolver.name(locations[0])).toEqual(locations[0].name);
    expect(LocationResolver.parentLocationId(locations[0])).toEqual(
      locations[0].parentLocationId,
    );
    expect(LocationResolver.maleResidents(locations[0])).toEqual(
      locations[0].maleResidents,
    );
    expect(LocationResolver.femaleResidents(locations[0])).toEqual(
      locations[0].femaleResidents,
    );
    expect(LocationResolver.creator(locations[0])).toEqual(
      locations[0].creator,
    );
    expect(LocationResolver.subLocations(locations[0])).toEqual(
      locations[0].subLocations,
    );
    expect(LocationResolver.createdAt(locations[0])).toEqual(
      locations[0].createdAt,
    );
    expect(LocationResolver.updatedAt(locations[0])).toEqual(
      locations[0].updatedAt,
    );
  });
});
