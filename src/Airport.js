class Airport {
  constructor(capacity) {
    this.hangar = [];
  }

  land(plane) {
    this.hangar.push(plane);
    plane.changeLandedStatus();
  }

  takeoff(plane) {
    this.hangar.pop();
    plane.changeLandedStatus();
  }
}
