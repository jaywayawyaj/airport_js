class Airport {
  constructor(weather = new Weather, capacity = 1) {
    this.hangar = [];
    this.weather = weather;
    this.capacity = capacity;
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

  atCapacity() {
    return (this.hangar.length >= this.capacity)
  }
}
