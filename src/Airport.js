class Airport {
  constructor(weather = new Weather) {
    this.hangar = [];
    this.weather = weather;
  }

  land(plane) {
    if (this.weather.isStormy()) {
      throw 'It is too stormy to land!'
    }
    this.hangar.push(plane);
    plane.changeLandedStatus();
  }

  takeoff(plane) {
    if (this.weather.isStormy()) {
      throw 'It is too stormy to takeoff!'
    }
    this.hangar.pop();
    plane.changeLandedStatus();
  }
}
