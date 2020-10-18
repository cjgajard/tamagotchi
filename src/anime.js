const RESET = -1;

class Anime {
  constructor(scr) {
    this.screen = scr;
    this.reset();
  }

  reset() {
    this.frame = RESET;
  }

  draw() { // eslint-disable-line class-methods-use-this
    return false;
  }
}

export default Anime;
