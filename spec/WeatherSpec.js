describe('Weather', function() {

  beforeEach(function() {
    weather = new Weather;
  })

  describe('#isStormy', function () {
    it('returns false by default', function() {
      expect(weather.isStormy).toEqual(false);
    })
  })
})
