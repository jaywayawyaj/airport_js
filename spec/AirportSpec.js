describe('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('non stormy weather', function() {
    beforeEach(function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(false);
    })

    it('lands a plane', function() {
      airport.land(plane);
      expect(airport.hangar.length).toEqual(1);
    });

    it('a plane can takeoff from the hangar', function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.hangar.length).toEqual(0);
    })
  })

  describe('stormy weather', function() {
    beforeEach(function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(true);
    })

    it('cannot land if it is stormy', function() {
      let stormyLand = 'It is too stormy to land!'
      expect(function(){ airport.land(plane) }).toThrow(stormyLand);
    })

    it('cannot takeoff if it is stormy', function() {
      let stormyTakeoff = 'It is too stormy to takeoff!'
      expect(function(){ airport.takeoff(plane) }).toThrow(stormyTakeoff);
    })
  })

  describe('capacity', function() {
    it('will return false when airport is not full', function() {
      expect(airport.atCapacity()).toEqual(false);
    })

    it('will return true when airport is not full', function() {
      airport.land(plane);
      expect(airport.atCapacity()).toEqual(true);
    })

    xit('will not let a plane land when full', function() {

    })
  })
})
