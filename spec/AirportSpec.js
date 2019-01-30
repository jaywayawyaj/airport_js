describe('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('#land', function() {
    it('lands a plane', function() {
      airport.land(plane);
      expect(airport.hangar.length).toEqual(1);
    });
  });

  describe('#takeoff', function() {
    it('a plane can takeoff from the hangar', function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.hangar.length).toEqual(0);
    });
  });
});
