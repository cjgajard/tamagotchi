import Anime from './.';

const snackSprite = [
  `
x.xx.x.
xxxxxx.
x.xx.x.
  `,
  `
.xx.
xxxx
.xx.
  `,
  `
.x
xx
.x
  `,
];

export default class SnackAnime extends Anime {
  draw() {
    /* eslint-disable no-magic-numbers */
    switch (this.frame) {
    case 0:
      this.screen.drawString(snackSprite[0], 2, 7);
      break;
    case 1:
      this.screen.drawString(snackSprite[1], 3, 7);
      break;
    case 2:
      this.screen.drawString(snackSprite[2], 3, 7);
      break;
    default:
      break;
    }
    /* eslint-disable no-magic-numbers */
    return false;
  }
}

const RESET = 0;
SnackAnime.reset = RESET;
