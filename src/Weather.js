class Weather {
  constructor() {
    this.chanceOfStorms = 0.2
  }

  isStormy() {
    return (Math.random() < this.chanceOfStorms);
  }
}
