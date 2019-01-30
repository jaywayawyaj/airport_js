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

    it('cannot land if it is stormy', function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(true);
      expect(function(){ airport.land(plane) }).toThrow('It is too stormy to land!');
    })
  });

  describe('#takeoff', function() {
    it('a plane can takeoff from the hangar', function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.hangar.length).toEqual(0);
    });
  });
});
