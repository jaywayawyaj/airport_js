describe('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('lands a plane', function() {
    airport.land(plane);
    expect(airport.hangar.length).toEqual(1);
  });
});
