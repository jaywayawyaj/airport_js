describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it('Creates a landed plane', function() {
    expect(plane.landed).toEqual(true)
  });
});
