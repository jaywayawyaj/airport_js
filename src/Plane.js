// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport

class Plane {
  constructor() {
    this.isLanded = false
  };

  changeLandedStatus() {
    this.isLanded = !this.isLanded;
  };
};
