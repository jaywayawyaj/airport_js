describe('Weather', function() {

  beforeEach(function() {
    weather = new Weather;
  })

  describe('#isStormy', function () {
    it('returns stormy weather sometimes', function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(weather.isStormy()).toEqual(true);
    })

    it('returns non - stormy weather sometimes', function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(weather.isStormy()).toEqual(false);
    })
  })
})
