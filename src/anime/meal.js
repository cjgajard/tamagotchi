import Anime from './.';

const breadSprite = [
  `
.xxxxxxx.
x.....x.x
x.....x.x
.x...x.x.
.x...x.x.
.xxxxxxx.
  `,
  `
.xxxxx
x....x
x....x
.x...x
.x...x
.xxxxx
  `,
  `
.xxx
x..x
x..x
.x.x
.x.x
.xxx
  `,
];

export default class MealAnime extends Anime {
  draw() {
    /* eslint-disable no-magic-numbers */
    switch (this.frame) {
    case 0:
      this.screen.drawString(breadSprite[0], 0, 5);
      break;
    case 1:
      this.screen.drawString(breadSprite[1], 0, 5);
      break;
    case 2:
      this.screen.drawString(breadSprite[2], 0, 5);
      break;
    default:
      break;
    }
    /* eslint-disable no-magic-numbers */
    return false;
  }
}

const RESET = 0;
MealAnime.reset = RESET;
