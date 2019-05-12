class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 4;
      return this.currentTime;
    }, 0);
  }

  getMinutes() {
    return Math.floor(this.currentTime / (60 * 1000));
  }
  getSeconds() {
    //return Math.floor(this.currentTime / 100);
    console.log(`this.currentTime: ${this.currentTime} - Segundos: ${(this.currentTime % 60000) / 1000}`);
    return (this.currentTime % 60000) / 1000;
  }

  twoDigitsNumber(value = 0) {
    return typeof(value) === 'number' ? 
      value.toLocaleString('en', {minimumIntegerDigits:2}) 
      : null;
  }
   stopClick() {
     clearInterval(this.intervalId);
   }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {

  }
}