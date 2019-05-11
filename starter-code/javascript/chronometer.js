class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      console.log(this.currentTime);
      this.currentTime++;
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(dig) {
    if (dig < 10) {
      return "0" + dig;
    } else {
      return dig.toString();
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  // splitClick() {}
}
