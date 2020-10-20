export default class Anime {
  constructor(scr) {
    this.screen = scr;
    this.reset();
  }

  reset() {
    this.frame = this.constructor.reset;
  }

  draw() { // eslint-disable-line class-methods-use-this
    return false;
  }
}

const RESET = -1;
Anime.reset = RESET;
