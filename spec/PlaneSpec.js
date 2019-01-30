describe('Plane', function() {
  let plane;
  let airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj(Airport, ['land']);
  });

  it('Creates a non-landed plane', function() {
    expect(plane.isLanded).toEqual(false);
  });

  describe('#changeLandedStatus toggles isLanded', function() {
    it('has landed status once landed in an airport', function() {
      plane.changeLandedStatus();
      expect(plane.isLanded).toEqual(true);
    });
  });
});
