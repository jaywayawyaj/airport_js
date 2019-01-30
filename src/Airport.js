class Airport {
  constructor(capacity) {
    this.hangar = [];
  };

  land(plane) {
    this.hangar.push(plane);
    plane.changeLandedStatus();
  };
};
